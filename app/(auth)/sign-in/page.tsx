'use client';

import jwt, { JwtPayload } from 'jsonwebtoken';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { authenticate } from '@/actions/auth';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await authenticate(values);
    } catch (error) {
      toast.error('Error');
      console.log(error);
    }
  };

  return (
    <>
      <Image
        src='/assets/Eventure.svg'
        width={220}
        height={48}
        alt='eventure logo'
        className='mb-4'
      />
      <h1 className='text-xl font-semibold text-center mb-6'>Sign In</h1>
      <div className='auth-page-card'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Email address'
                      className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Password'
                      className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Sign In
            </Button>
          </form>
        </Form>
      </div>
      <Link
        href='/forgot-password'
        className='text-primary text-sm hover:underline'>
        Forgot password?
      </Link>
      <p className='text-sm'>
        Don&apos;t have an account?{' '}
        <Link href='/sign-up' className='text-primary hover:underline'>
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default SignIn;
