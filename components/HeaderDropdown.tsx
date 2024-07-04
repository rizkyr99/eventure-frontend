'use client';

import { Calendar, LayoutDashboard, LogOut, User, User2 } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface HeaderDropdownProps {
  name: string | null | undefined;
  email: string | null | undefined;
  role: string;
}

const HeaderDropdown = ({ name, email, role }: HeaderDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className='size-12 bg-slate-200 rounded-full flex items-center justify-center cursor-pointer'>
          <User2 className='size-6 text-slate-500' />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-48'>
        <DropdownMenuLabel>
          <div className='py-2'>
            {name}
            <p className='text-xs text-slate-500 font-normal'>{email}</p>
          </div>
        </DropdownMenuLabel>
        {role === 'ORGANIZER' && (
          <DropdownMenuItem asChild>
            <Link href='/organizer/dashboard' className='cursor-pointer'>
              <LayoutDashboard className='size-4 mr-2' />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem asChild>
          <Link
            href={role === 'ORGANIZER' ? 'organizer/profile' : 'user/profile'}
            className='cursor-pointer'>
            <User className='size-4 mr-2' />
            <span>My Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={role === 'ORGANIZER' ? 'organizer/events' : 'user/events'}
            className='cursor-pointer'>
            <Calendar className='size-4 mr-2' />
            <span>My Events</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            onClick={() => signOut()}
            className='cursor-pointer w-full text-red-500 hover:!bg-red-500 hover:!text-white transition'>
            <LogOut className='size-4 mr-2' />
            <span>Sign Out</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderDropdown;
