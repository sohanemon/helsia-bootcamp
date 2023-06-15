import Image from 'next/image';
import Button from './ui/button';

export default function Navbar() {
  return (
    <nav className='flex justify-between max-sm:items-center max-sm:flex-col max-sm:justify-center'>
      <Image src={'/assets/logo.svg'} alt='logo' width={148} height={64} />
      <ul className='flex items-center max-sm:flex-col gap-9 max-sm:mt-10 '>
        {navItems.map((el) => (
          <li className='first-letter:uppercase' key={el}>
            {el}
          </li>
        ))}
        <Button>Signup Today</Button>
      </ul>
    </nav>
  );
}

const navItems = ['home', 'program', 'blogs', 'about us'];
