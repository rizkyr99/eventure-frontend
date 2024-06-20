import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center p-4'>
      {children}
    </div>
  );
};

export default AuthLayout;
