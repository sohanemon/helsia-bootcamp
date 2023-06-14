import Navbar from '@/components/navbar';
import { Poppins } from 'next/font/google';
import localFont from 'next/font/local';

import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Helsia Bootcamp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className + ' pt-10 px-20'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
