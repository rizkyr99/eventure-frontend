import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Grid2X2, List } from 'lucide-react';
import React from 'react';

const Sort = () => {
  return (
    <div className='flex items-center gap-3'>
      <Select defaultValue='latest'>
        <SelectTrigger className='border-none w-fit space-x-2'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value='latest'>Latest</SelectItem>
          <SelectItem value='popular'>Popular</SelectItem>
          <SelectItem value='price'>Price</SelectItem>
        </SelectContent>
      </Select>
      <div className='flex bg-slate-200 rounded-lg'>
        <div className='bg-white size-10 rounded-lg flex gap-2 items-center justify-center text-sm shadow cursor-pointer'>
          <Grid2X2 className='size-6' />
        </div>
        <div className='bg-transparent size-10 rounded-lg flex gap-2 items-center justify-center text-sm cursor-pointer'>
          <List className='size-6' />
        </div>
      </div>
    </div>
  );
};

export default Sort;
