import Combobox from '@/components/Combobox';
import { Button } from '@/components/ui/button';
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
import { ImagePlus } from 'lucide-react';
import React from 'react';

const CreateEventPage = () => {
  return (
    <div className='p-4 grid grid-cols-[2fr,1fr] gap-4  '>
      <div className='bg-white p-6 rounded-3xl shadow-light space-y-6'>
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
            <Label className='block mb-2'>Start Date & Time</Label>
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
      <div className='bg-white p-6 rounded-3xl shadow-light'></div>
      <div className='col-span-2 flex justify-end'>
        <Button>Publish</Button>
      </div>
    </div>
  );
};

export default CreateEventPage;
