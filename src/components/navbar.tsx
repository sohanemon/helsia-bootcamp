import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className='flex justify-between'>
      <Image src={'/assets/logo.svg'} alt='logo' width={148} height={64} />
      <ul className='flex items-center gap-9 '>
        {navItems.map((el) => (
          <li className='first-letter:uppercase' key={el}>
            {el}
          </li>
        ))}
      </ul>
    </nav>
  );
}

const navItems = ['home', 'program', 'blogs', 'about us'];
