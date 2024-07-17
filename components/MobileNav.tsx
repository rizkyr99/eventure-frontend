'use client';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { Session } from 'next-auth';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface MobileNavProps {
  session: Session | null;
}

const MobileNav = ({ session }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
    setIsOpen(!isOpen);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' size='sm' className='lg:hidden'>
          <Menu className='size-6' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='font-bold text-2xl text-primary text-left'>
            Eventure
          </SheetTitle>
          <div className='py-8'>
            <Button
              onClick={() => handleClick('/events')}
              variant='ghost'
              size='sm'
              className='w-full justify-start font-semibold'>
              Find Events
            </Button>
            <Button
              onClick={() => handleClick('/organizer/events/create')}
              variant='ghost'
              size='sm'
              className='w-full justify-start font-semibold'>
              Create Event
            </Button>
            {session ? (
              <>
                <Button
                  onClick={() => handleClick('/user/profile')}
                  variant='ghost'
                  size='sm'
                  className='w-full justify-start font-semibold'>
                  Profile
                </Button>
                <Button
                  onClick={() => handleClick('/user/events')}
                  variant='ghost'
                  size='sm'
                  className='w-full justify-start font-semibold'>
                  My Events
                </Button>
                <Button
                  onClick={() => signOut()}
                  variant='ghost'
                  size='sm'
                  className='w-full justify-start font-semibold text-red-500'>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant='ghost'
                  size='sm'
                  className='w-full justify-start font-semibold'>
                  Sign In
                </Button>
                <Button
                  variant='ghost'
                  size='sm'
                  className='w-full justify-start font-semibold'>
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
