'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useOrganizerEvents } from '@/hooks/useOrganizerEvents';
import { EventSummary } from '@/types/event';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  eventId: z.coerce.number(),
  type: z.string().min(1, 'Type is required'),
  amount: z.coerce.number().gte(1, 'Amount must be greater than or equal to 1'),
  expirationDate: z.string().min(1, 'Expiration date is required'),
  maxUses: z.coerce
    .number()
    .gte(1, 'Max uses must be greater than or equal to 1'),
  currentUses: z.coerce.number(),
});

const PromotionsPage = () => {
  const { events, isLoading, error } = useOrganizerEvents();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventId: 0,
      type: '',
      amount: 1,
      expirationDate: '',
      maxUses: 1,
      currentUses: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('submitted');
    console.log(values);
  };

  console.log(form.formState.errors);

  return (
    <main className='p-4'>
      <div className='bg-white rounded-2xl p-4'>
        <h1 className='text-2xl font-bold'>Promotions</h1>
        <p className='text-gray-500'>
          Create and manage promotions for your events
        </p>
        <div className='mt-4'>
          <Dialog>
            <DialogTrigger asChild>
              <button className='bg-primary text-white px-4 py-2 rounded-lg'>
                Create Promotion
              </button>
            </DialogTrigger>
            <DialogContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className='space-y-4'>
                  <DialogHeader>
                    <DialogTitle>Create Promotion</DialogTitle>
                  </DialogHeader>
                  <FormField
                    control={form.control}
                    name='eventId'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value.toString()}
                            onValueChange={field.onChange}>
                            <SelectTrigger>
                              <SelectValue placeholder='Select event' />
                            </SelectTrigger>
                            <SelectContent>
                              {events?.map((event: EventSummary) => (
                                <SelectItem
                                  key={event.id}
                                  value={event.id.toString()}>
                                  {event.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='type'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type</FormLabel>
                        <FormControl>
                          <Select
                            value={field.value}
                            onValueChange={field.onChange}>
                            <SelectTrigger>
                              <SelectValue placeholder='Select type' />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value='REFERRAL'>REFERRAL</SelectItem>
                              <SelectItem value='NONREFERRAL'>
                                NONREFERRAL
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='amount'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Enter discount amount'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='maxUses'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Maximal Uses</FormLabel>
                        <FormControl>
                          <Input
                            type='number'
                            placeholder='Enter maximal uses'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='expirationDate'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Expiration Date</FormLabel>
                        <FormControl>
                          <Input type='date' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='currentUses'
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type='hidden' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <DialogFooter>
                    <Button type='submit'>Submit</Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        <div className='mt-4'>
          <h2 className='font-bold mb-2'>Active Promotions</h2>
          <div className='space-y-2'>
            <div className='border p-2 rounded-lg'>
              <p className='text-lg'>Summer Festival</p>
              <div className='flex justify-between'>
                <div className='text-xl font-bold'>20% off</div>
                <div className='flex flex-wrap items-center gap-2'>
                  <div className='text-sm'>Expires in 3 days</div>
                  <div className='px-2 py-1 bg-primary/25 text-xs rounded-full flex w-fit'>
                    Referral Only
                  </div>
                </div>
                <div className='space-x-3'>
                  <Button size='sm' variant='outline'>
                    Edit
                  </Button>
                  <Button size='sm' variant='destructive'>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
            <div className='border p-2 rounded-lg'>
              <p className='text-lg'>Summer Festival</p>
              <div className='flex justify-between'>
                <div className='text-xl font-bold'>20% off</div>
                <div className='flex flex-wrap items-center gap-2'>
                  <div className='text-sm'>Expires in 3 days</div>
                  <div className='px-2 py-1 bg-primary/25 text-xs rounded-full flex w-fit'>
                    Referral Only
                  </div>
                </div>
                <div className='space-x-3'>
                  <Button size='sm' variant='outline'>
                    Edit
                  </Button>
                  <Button size='sm' variant='destructive'>
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PromotionsPage;
