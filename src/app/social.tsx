import Image from 'next/image';
import Link from 'next/link';

export default function Social() {
  return (
    <div className='flex items-center gap-6'>
      {icons.map((el) => (
        <Link key={el} href={'#'}>
          <Image
            src={el}
            alt='social'
            width={20}
            height={20}
            className='w-5 aspect-square'
          />
        </Link>
      ))}
    </div>
  );
}
const icons = [
  '/assets/facebook.svg',
  '/assets/twitter.svg',
  '/assets/instagram.svg',
  '/assets/youtube.svg',
  '/assets/discord.svg',
];
