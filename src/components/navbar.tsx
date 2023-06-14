import Image from 'next/image';

export default function Navbar() {
  return (
    <nav>
      <Image src={'/assets/logo.svg'} alt='logo' width={148} height={64} />
    </nav>
  );
}
