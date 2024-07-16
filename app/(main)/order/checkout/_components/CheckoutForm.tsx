'use client';

import { createOrder } from '@/actions/order';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import useOrderStore from '@/hooks/useOrderStore';
import { formatToIDR } from '@/lib/formatToIDR';
import { zodResolver } from '@hookform/resolvers/zod';
import { Session } from 'next-auth';
import { useRouter } from 'next/navigation';
import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const formSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters long'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  paymentMethod: z.string(),
  orderItems: z.array(
    z.object({
      ticketTypeId: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
    })
  ),
  voucherIds: z.array(z.number()),
  totalPrice: z.number(),
  eventId: z.number(),
});

interface CheckoutFormProps {
  session: Session | null;
}

const CheckoutForm = ({ session }: CheckoutFormProps) => {
  const orderItems = useOrderStore((state) => state.orderItems);
  const totalPrice = useOrderStore((state) => state.totalPrice);
  const totalDiscount = useOrderStore((state) => state.totalDiscount);
  const appliedVouchers = useOrderStore((state) => state.appliedVouchers);
  const eventId = useOrderStore((state) => state.eventId);

  const router = useRouter();

  if (orderItems.length === 0) {
    router.back();
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: session?.user.email ?? '',
      paymentMethod: 'Credit/Debit Card',
      orderItems: orderItems.map((item) => ({
        ticketTypeId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      voucherIds: appliedVouchers.map((voucher) => voucher.id),
      totalPrice,
      eventId,
    },
  });

  const { fields } = useFieldArray({
    control: form.control,
    name: 'orderItems',
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await createOrder(values);
      toast.success('Order created successfully');
      router.push('/order/success');
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  console.log(form.formState.errors);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='grid grid-cols-3 p-4 lg:p-8 gap-4 max-w-screen-lg mx-auto'>
        <div className='p-8 bg-white col-span-2 rounded-xl'>
          <h1 className='font-bold text-lg mb-2'>Checkout</h1>
          <h2 className='text-2xl font-bold mb-4'>Billing Information</h2>

          <div className='grid grid-cols-2 gap-4'>
            <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='lastName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type='email' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <h2 className='text-2xl font-bold mb-4 mt-8'>Payment Method</h2>
          <FormField
            control={form.control}
            name='paymentMethod'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Credit/Debit Card' />
                      </FormControl>
                      <FormLabel>Credit/Debit Card</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='Bank Transfer' />
                      </FormControl>
                      <FormLabel>Bank Transfer</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        <div className='bg-white p-8 rounded-xl flex flex-col'>
          <h2 className='text-2xl font-bold'>Order Summary</h2>
          <div className='space-y-2 mt-4 flex-1'>
            {fields.map((item) => (
              <div key={item.id} className='flex items-center justify-between'>
                <p>{`${item.quantity}x ${item.name}`}</p>
                <p>{formatToIDR(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>
          <div className='flex items-center justify-between pt-4'>
            <p>Sub Total</p>
            <p>{formatToIDR(totalDiscount + totalPrice)}</p>
          </div>
          <div className='mt-4 border-t py-4 space-y-2'>
            <div className='flex items-center justify-between'>
              <p>Total Discount</p>
              <p>- {formatToIDR(totalDiscount)}</p>
            </div>
            <div className='flex items-center justify-between font-bold'>
              <p>Total Price</p>
              <p>{formatToIDR(totalPrice)}</p>
            </div>
          </div>
          <Button type='submit' className='w-full'>
            Checkout
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CheckoutForm;
