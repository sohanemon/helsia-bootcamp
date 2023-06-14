import Image from 'next/image';

export default function Challenges() {
  return (
    <section className='flex items-center justify-between p-20 bg-gradient-to-r from-themeIndigo-dark to-themeIndigo-light'>
      {data.map((el) => (
        <div key={el.text} className='flex items-center'>
          <div>
            <Image src={el.icon} alt='icon' width={50} height={50} />
          </div>
          <div>
            <p className='font-semibold leading-7 text-white'>{el.text}</p>
          </div>
        </div>
      ))}
      <br />
    </section>
  );
}

const data = [
  {
    text: 'Get that 11 line in 30 days',
    icon: '/assets/crucified.svg',
  },
  {
    text: '14 Days sherd challenge',
    icon: '/assets/dancer.svg',
  },
  {
    text: 'Get flat belly in 30 days',
    icon: '/assets/dancer-motion.svg',
  },
];
