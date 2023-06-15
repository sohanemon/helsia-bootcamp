import GrayText from '@/components/ui/gray-text';
import Heading from '@/components/ui/heading';
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
    <section className='grid items-center grid-cols-1 sm:grid-cols-2'>
      <Image
        src={src}
        alt='people image'
        width={590}
        height={444}
        className={rtl ? 'sm:order-last sm:ml-10' : 'sm:-ml-10'}
      />
      <div>
        <Heading className='mb-4 text-4xl leading-normal'>{heading}</Heading>
        <GrayText>{grayText}</GrayText>
      </div>
    </section>
  );
}
