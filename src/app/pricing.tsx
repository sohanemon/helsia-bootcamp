import Button from '@/components/ui/button';
import GrayText from '@/components/ui/gray-text';
import Heading from '@/components/ui/heading';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Pricing() {
  return (
    <section className='relative grid grid-cols-3 gap-20 bg-white rounded-lg rounded-tl-none shadow'>
      {data.map((el, idx) => (
        <PricingCard {...el} key={el.price} idx={idx + 1} />
      ))}
      <div className='absolute grid h-12 pt-5 font-bold bg-white rounded-lg rounded-b-none shadow after:-mx-9 after:h-4 after:bg-white px-9 -top-12 font-grot text-themeBlue place-content-center'>
        Pricing Plan
      </div>
    </section>
  );
}

const PricingCard = ({
  title,
  price,
  offeredPrice,
  idx,
}: (typeof data)[2] & { idx: number }) => {
  return (
    <div className={cn('p-10 space-y-5', { '': offeredPrice })}>
      <div className='flex gap-1'>
        <span className='text-xl font-semibold text-gray-500'>$</span>
        <p className='text-6xl font-semibold text-themeIndigo-light'>{price}</p>
      </div>
      <Heading className='text-xl'>Plan {idx}</Heading>
      <GrayText>{title}</GrayText>
      <Button outline>Buy now</Button>
      <ul className='space-y-2'>
        {Array.from(Array(4)).map((el, idx) => (
          <li key={idx} className='flex gap-2'>
            <Image
              src={'/assets/point-pink.svg'}
              alt='icon'
              width={8}
              height={8}
            />
            <GrayText>Pricing Info Point</GrayText>
          </li>
        ))}
      </ul>
    </div>
  );
};

const data = [
  {
    title: 'Best choice for individuals',
    price: 60,
  },
  {
    title: 'Best choice for individuals',
    price: 99,
  },
  {
    title: 'Best choice for priority support',
    price: 160,
    offeredPrice: 129,
  },
];
