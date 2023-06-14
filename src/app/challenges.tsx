import Image from 'next/image';

export default function Challenges() {
  return (
    <section>
      {data.map((el) => (
        <div key={el.text}>
          <div>
            <Image src={el.icon} alt='icon' width={50} height={50} />
          </div>
          <div>
            <p className='font-semibold leading-7'>{el.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

const data = [
  {
    text: 'Get that 11 line in 30 days',
    icon: '/public/assets/crucified.svg',
  },
  {
    text: '14 Days sherd challenge',
    icon: '/public/assets/dancer.svg',
  },
  {
    text: 'Get flat belly in 30 days',
    icon: '/public/assets/dancer-motion.svg',
  },
];
