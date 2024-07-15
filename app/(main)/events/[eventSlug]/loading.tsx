import { Loader2 } from 'lucide-react';
import React from 'react';

const Loading = () => {
  return (
    <div className='h-64 flex items-center justify-center'>
      <Loader2 className='size-8 animate-spin text-slate-500' />
    </div>
  );
};

export default Loading;
