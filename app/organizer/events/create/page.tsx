import Combobox from '@/components/Combobox';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Edit, ImagePlus, Trash } from 'lucide-react';
import React from 'react';

const CreateEventPage = () => {
  return (
    <div className='p-4 grid grid-cols-[2fr,1fr] gap-4'>
      <div className='bg-white p-6 rounded-3xl shadow-light space-y-6'>
        <p className='text-lg font-bold'>Event Details</p>
        <div className='grid grid-cols-2 gap-x-6'>
          <div>
            <Label className='block mb-2'>Name</Label>
            <Input placeholder='e.g., Tech Conference 2022' />
          </div>
          <div>
            <Label className='block mb-2'>Category</Label>
            <Select>
              <SelectTrigger className='rounded-xl'>
                <SelectValue placeholder='Select category' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='music-and-entertainment'>
                  Music & Entertainment
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className='block mb-2'>Image</Label>
          <div className='bg-slate-100 aspect-[3/1] rounded-xl border border-slate-300 flex flex-col items-center justify-center space-y-2'>
            <ImagePlus className='size-16 stroke-1 text-slate-500' />
            <p className='text-slate-500'>Upload the event&apos;s image</p>
          </div>
        </div>
        <div className='grid grid-cols-4 gap-x-6'>
          <div>
            <Label className='block mb-2'>Start</Label>
            <Input type='date' placeholder='e.g., Tech Conference 2022' />
          </div>
          <div>
            <Label className='block mb-2'>End Date</Label>
            <Input type='date' placeholder='e.g., Tech Conference 2022' />
          </div>
          <div>
            <Label className='block mb-2'>Start Time</Label>
            <Input type='time' placeholder='e.g., Tech Conference 2022' />
          </div>
          <div>
            <Label className='block mb-2'>End Time</Label>
            <Input type='time' placeholder='e.g., Tech Conference 2022' />
          </div>
        </div>
        <div className='grid grid-cols-2 gap-x-6'>
          <div>
            <Label className='block mb-2'>Venue</Label>
            <Input placeholder='e.g., Gelora Bung Karno' />
          </div>
          <div>
            <Label className='block mb-2'>Location</Label>
            <Combobox />
          </div>
        </div>
        <div>
          <Label className='block mb-2'>Description</Label>
          <Textarea rows={10} />
        </div>
      </div>
      <div className='bg-white p-6 rounded-3xl shadow-light'>
        <div className='flex items-start justify-between mb-6'>
          <p className='text-lg font-bold'>Tickets</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button size='sm' className='text-sm'>
                Add Ticket
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>Create New Ticket</DialogHeader>
              <div className='space-y-4'>
                <Input placeholder='Ticket Name' />
                <Input type='number' placeholder='Ticket Price' />
                <Input type='number' placeholder='Ticket Quantity' />
              </div>
              <DialogFooter>
                <Button size='sm'>Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className='space-y-2'>
          <div className='border border-slate-300 rounded-xl p-4 flex items-center justify-between'>
            <div>
              <p className='font-bold mb-1'>VIP A</p>
              <div className='grid grid-cols-2'>
                <p className='text-xs text-slate-500'>Quantity: 200</p>
                <p className='text-xs text-slate-500'>Price: Rp 200.000</p>
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
          <div className='border border-slate-300 rounded-xl p-4 flex items-center justify-between'>
            <div>
              <p className='font-bold mb-1'>VIP A</p>
              <div className='grid grid-cols-2'>
                <p className='text-xs text-slate-500'>Quantity: 200</p>
                <p className='text-xs text-slate-500'>Price: Rp 200.000</p>
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
        </div>
      </div>
      <div className='col-span-2 flex justify-end'>
        <Button>Publish</Button>
      </div>
    </div>
  );
};

export default CreateEventPage;
