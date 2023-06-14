import Button from '@/components/ui/button';
import GrayText from '@/components/ui/gray-text';
import Heading from '@/components/ui/heading';
import Image from 'next/image';

export default function Pricing() {
  return (
    <section className='grid grid-cols-3 gap-20 bg-white rounded-lg shadow'>
      {data.map((el, idx) => (
        <PricingCard {...el} key={el.price} idx={idx + 1} />
      ))}
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
    <div className='p-10 space-y-5'>
      <div className='flex gap-1'>
        <span className='text-xl font-semibold text-gray-500'>$</span>
        <p className='text-6xl font-semibold text-themeIndigo-light'>{price}</p>
      </div>
      <Heading className='text-xl'>Plan {idx}</Heading>
      <GrayText>Best choice for individuals</GrayText>
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
