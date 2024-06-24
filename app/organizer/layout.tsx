import React from 'react';
import Sidebar from './_components/Sidebar';
import Header from './_components/Header';

const OrganizerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sidebar />
      <div className='ml-72'>
        <Header />
        {children}
      </div>
    </div>
  );
};

export default OrganizerLayout;
