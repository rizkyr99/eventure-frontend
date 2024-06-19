import { Facebook, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='px-4 bg-white h-20'>
      <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between'>
        <p>2024 &copy; Rizky Ramadhan</p>
        <div className='flex items-center gap-5'>
          <Link href=''>
            <Instagram className='size-4' />
          </Link>
          <Link href=''>
            <Youtube className='size-4' />
          </Link>
          <Link href=''>
            <Facebook className='size-4' />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
