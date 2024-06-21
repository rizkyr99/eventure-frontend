import Combobox from '@/components/Combobox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const ProfilePage = () => {
  return (
    <main className='py-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr,2fr] gap-6 max-w-screen-xl mx-auto'>
      <div className='bg-white rounded-3xl px-6 py-12'>
        <div className='flex flex-col items-center'>
          <Image
            src='https://res.cloudinary.com/de7uimbtt/image/upload/f_auto,q_auto/v1/eventure/vu4l7cliztlzmzbehp7t'
            width={200}
            height={200}
            alt='profile image'
            className='size-48 object-cover rounded-full'
          />
          <h1 className='text-2xl font-bold mt-4 mb-2'>Eventure Chang</h1>
          <div className='flex items-center gap-2 font-semibold text-primary'>
            <Star className='size-5 fill-primary text-primary' />
            1.080 points
          </div>
        </div>
        <div className='space-y-4'>
          <div>
            <Label className='block mb-2'>Email</Label>
            <Input placeholder='Enter your email address' />
          </div>
          <div>
            <Label className='block mb-2'>Phone</Label>
            <Input placeholder='Enter you phone number' />
          </div>
          <div>
            <Label className='block mb-2'>Gender</Label>
            <RadioGroup className='flex gap-6'>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='male' id='r1' />
                <Label htmlFor='r1'>Male</Label>
              </div>
              <div className='flex items-center space-x-2'>
                <RadioGroupItem value='female' id='r2' />
                <Label htmlFor='r2'>Female</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label className='block mb-2'>Age</Label>
            <Input type='number' placeholder='Enter you age' />
          </div>
        </div>
      </div>
      <div className='bg-white rounded-3xl'>
        <Tabs defaultValue='profile' className='w-full p-2'>
          <TabsList className='w-full grid grid-cols-2 rounded-2xl h-12'>
            <TabsTrigger value='profile' className='rounded-xl h-full'>
              Profile
            </TabsTrigger>
            <TabsTrigger value='security' className='rounded-xl h-full'>
              Security
            </TabsTrigger>
          </TabsList>
          <TabsContent value='profile' className='px-4 py-6 space-y-4'>
            <div>
              <Label className='block mb-2'>Address</Label>
              <Input placeholder='Enter your address' />
            </div>
            <div>
              <Label className='block mb-2'>Province</Label>
              <Combobox />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <Label className='block mb-2'>City</Label>
                <Combobox />
              </div>
              <div>
                <Label className='block mb-2'>Zip Code</Label>
                <Input placeholder='Enter zip code' />
              </div>
            </div>

            <p className='pt-6'>Socials</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <Label className='block mb-2'>Country</Label>
                <Input placeholder='Enter your address' />
              </div>
              <div>
                <Label className='block mb-2'>Country</Label>
                <Input placeholder='Enter your address' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <div>
                <Label className='block mb-2'>Country</Label>
                <Input placeholder='Enter your address' />
              </div>
              <div>
                <Label className='block mb-2'>Country</Label>
                <Input placeholder='Enter your address' />
              </div>
            </div>
          </TabsContent>
          <TabsContent value='security' className='px-4 py-6 space-y-4'>
            <div>
              <Label className='block mb-2'>Old Password</Label>
              <Input placeholder='Enter your address' />
            </div>
            <div>
              <Label className='block mb-2'>New Password</Label>
              <Input placeholder='Enter your address' />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default ProfilePage;
