import Image from 'next/image';
import Button from './ui/button';

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <Image src={'/assets/logo.svg'} alt='logo' width={148} height={64} />
      <ul className='flex items-center max-sm:hidden gap-9 '>
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
