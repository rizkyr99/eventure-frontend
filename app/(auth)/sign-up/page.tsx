'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const formSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
    confirmPassword: z.string(),
    referralCode: z.string().optional(),
    role: z.string().min(1),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      referralCode: '',
      role: 'ATTENDEE',
    },
  });
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        'http://localhost:8080/api/v1/users/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        toast.success('Successfully registered');
        form.reset();
        router.push('sign-in');
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || 'Registration failed');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message); // Display the error message in the toast
      } else {
        toast.error('An unexpected error occurred');
      }
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
      <h1 className='text-xl font-semibold text-center mb-6'>Sign Up</h1>
      <div className='auth-page-card'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Name'
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
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Email'
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
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Confirm password'
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
              name='role'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Role'
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
              name='referralCode'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Referral code (optional)'
                      className='bg-slate-100 w-full h-12 rounded-lg px-4 placeholder:text-slate-500'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type='submit'
              className='w-full'
              disabled={form.formState.isSubmitting}>
              Sign Up
            </Button>
          </form>
        </Form>
      </div>
      <p className='text-sm'>
        Already have an account?{' '}
        <Link href='/sign-in' className='text-primary hover:underline'>
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignIn;
