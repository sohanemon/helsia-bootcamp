export default function Pricing() {
  return (
    <section className='grid grid-cols-3 bg-white'>
      {data.map((el, idx) => (
        <PricingCard {...el} key={el.price} idx={idx} />
      ))}
    </section>
  );
}

const PricingCard = ({
  title,
  price,
  offeredPrice,
}: (typeof data)[2] & { idx: number }) => {
  return (
    <div>
      <div className='flex gap-1'>
        <span className='text-xl font-semibold text-gray-500'>$</span>
        <p className='text-6xl font-semibold text-themeIndigo-light'>{price}</p>
      </div>
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
