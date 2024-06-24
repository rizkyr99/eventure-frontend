import {
  ArrowRightLeft,
  Calendar,
  Contact,
  Gauge,
  LayoutDashboard,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen w-72 bg-white p-6'>
      <Image
        src='/assets/Eventure.svg'
        width={110}
        height={24}
        alt='eventure'
        className='mx-auto mb-12'
      />
      <div className='space-y-6'>
        <div className='space-y-2'>
          <p className='text-xs text-slate-500'>Dashboard</p>
          <div className='space-y-1'>
            <Link
              href='/organizer/dashboard'
              className='px-4 py-3 rounded-lg bg-primary flex items-center gap-2 text-white cursor-pointer transition'>
              <LayoutDashboard className='size-6 shrink-0' />
              <span className='truncate'>Dashboard</span>
            </Link>
            <Link
              href='/organizer/events'
              className='px-4 py-3 rounded-lg flex items-center gap-2 text-slate-500 hover:bg-slate-100 cursor-pointer transition'>
              <Calendar className='size-6 shrink-0' />
              <span className='truncate'>Events</span>
            </Link>
            <Link
              href='/organizer/transactions'
              className='px-4 py-3 rounded-lg flex items-center gap-2 text-slate-500 hover:bg-slate-100 cursor-pointer transition'>
              <ArrowRightLeft className='size-6 shrink-0' />
              <span className='truncate'>Transactions</span>
            </Link>
          </div>
        </div>
        <div className='space-y-2'>
          <p className='text-xs text-slate-500'>Account</p>
          <div className='space-y-1'>
            <Link
              href='/dashboard'
              className='px-4 py-3 rounded-lg flex items-center gap-2 text-slate-500 hover:bg-slate-100 cursor-pointer transition'>
              <Contact className='size-6 shrink-0' />
              <span className='truncate'>Basic Information</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
