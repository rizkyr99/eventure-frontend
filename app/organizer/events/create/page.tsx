'use client';

import Combobox from '@/components/Combobox';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { formatToIDR } from '@/lib/formatToIDR';
import { zodResolver } from '@hookform/resolvers/zod';
import { Edit, Trash } from 'lucide-react';
import React, { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';
import CreateTicketModal from './_components/CreateTicketModal';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  category: z.string().min(1, 'Category is required'),
  isFree: z.boolean(),
  image: z
    .instanceof(File)
    .refine((file) => file?.size > 0, 'Image is required'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  startTime: z.string().min(1, 'Start time is required'),
  endTime: z.string().min(1, 'End time is required'),
  location: z.string().min(1, 'Location is required'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters long'),
  ticketTypes: z
    .array(
      z.object({
        name: z.string().min(1, 'Name is required'),
        price: z.number().min(1, 'Price is required'),
        quantity: z.number().min(1, 'Quantity is required'),
      })
    )
    .optional(),
});

const CreateEventPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      category: '',
      isFree: false,
      image: undefined,
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      location: '',
      description: '',
      ticketTypes: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'ticketTypes',
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      form.setValue('image', e.target.files[0]);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('category', values.category);
      formData.append('image', values.image as File);
      formData.append('location', values.location);
      formData.append('description', values.description);
      formData.append('startDate', values.startDate);
      formData.append('startTime', values.startTime);
      formData.append('endDate', values.endDate);
      formData.append('endTime', values.endTime);
      formData.append('isFree', values.isFree.toString());
      formData.append(
        'slug',
        values.name.toLowerCase().replace(/\s/g, '-') + '-' + Date.now()
      );
      if (values.ticketTypes) {
        values.ticketTypes.forEach((ticketType, index) => {
          formData.append(`ticketTypes[${index}].name`, ticketType.name);
        });
      }
      console.log(formData);
      // console.log(values);

      const response = await fetch('http://localhost:8080/api/v1/events', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='p-4 grid grid-cols-[2fr,1fr] gap-4'>
          <div className='bg-white p-6 rounded-3xl shadow-light space-y-6'>
            <p className='text-lg font-bold'>Event Details</p>
            <div className='grid grid-cols-2 gap-x-6'>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='e.g., Tech Conference 2022'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        defaultValue={field.value}
                        onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder='Select category' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='1'>Category 1</SelectItem>
                          <SelectItem value='2'>Category 2</SelectItem>
                          <SelectItem value='3'>Category 3</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='isFree'
              render={({ field }) => (
                <FormItem className='flex items-center space-x-2'>
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormLabel>Is Free</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <FormField
                control={form.control}
                name='image'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        type='file'
                        accept='image/*'
                        onChange={handleImageChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <Label className='block mb-2'>Image</Label>
            <div className='bg-slate-100 aspect-[3/1] rounded-xl border border-slate-300 flex flex-col items-center justify-center space-y-2'>
              <ImagePlus className='size-16 stroke-1 text-slate-500' />
              <p className='text-slate-500'>Upload the event&apos;s image</p>
            </div> */}
            </div>
            <div className='grid grid-cols-2 xl:grid-cols-4 gap-x-6'>
              <FormField
                control={form.control}
                name='startDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input type='date' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='endDate'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>
                    <FormControl>
                      <Input type='date' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='startTime'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type='time' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='endTime'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Time</FormLabel>
                    <FormControl>
                      <Input type='time' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 gap-x-6'>
              {/* <div>
              <Label className='block mb-2'>Venue</Label>
              <Input placeholder='e.g., Gelora Bung Karno' />
            </div> */}
              <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Combobox value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='bg-white p-6 rounded-3xl shadow-light'>
            <div className='flex items-start justify-between mb-6'>
              <p className='text-lg font-bold'>Tickets</p>
              <Button
                type='button'
                onClick={() => setModalOpen(true)}
                size='sm'
                disabled={form.getValues('isFree')}
                className='text-sm'>
                Add Ticket
              </Button>
            </div>
            <div className='space-y-2'>
              {fields.map((field, index) => (
                <div
                  key={index}
                  className='border border-slate-300 rounded-xl p-4 flex items-center justify-between'>
                  <div>
                    <p className='font-bold mb-1'>{field.name}</p>
                    <div className='grid grid-cols-2'>
                      <p className='text-xs text-slate-500'>
                        Quantity: {field.quantity}
                      </p>
                      <p className='text-xs text-slate-500'>
                        Price: {formatToIDR(field.price)}
                      </p>
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <button className='bg-amber-500 p-2 rounded-s hover:opacity-75 transition'>
                      <Edit className='size-4 text-white' />
                    </button>
                    <button className='bg-red-500 p-2 rounded-e hover:opacity-75 transition'>
                      <Trash className='size-4 text-white' />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-2 flex justify-end'>
            <Button>Publish</Button>
          </div>
        </form>
      </Form>
      <CreateTicketModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        append={append}
      />
    </>
  );
};

export default CreateEventPage;
