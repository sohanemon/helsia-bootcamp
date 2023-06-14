import Image from 'next/image';

export default function TextImage({
  rtl,
  src,
  grayText,
  heading,
}: {
  rtl?: boolean;
  src: string;
  heading: string;
  grayText: string;
}) {
  return (
    <section className='grid grid-cols-2'>
      <Image src={src} alt='people image' />
    </section>
  );
}
