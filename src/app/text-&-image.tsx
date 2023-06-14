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
    <section className='grid grid-cols-2'>
      <Image src={src} alt='people image' width={590} height={444} />
      <div>
        <Heading>{heading}</Heading>
        <GrayText>{grayText}</GrayText>
      </div>
    </section>
  );
}
