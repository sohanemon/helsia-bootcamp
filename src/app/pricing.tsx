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
      <span className='font-semibold'>$</span>
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
