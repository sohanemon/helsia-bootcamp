import GrayText from '@/components/ui/gray-text';
import Image from 'next/image';

export default function Challenges() {
  return (
    <section className='flex items-center justify-between gap-20 p-20 my-20 max-sm:flex-col bg-gradient-to-r from-themeIndigo-dark to-themeIndigo-light rounded-3xl'>
      {data.map((el) => (
        <div key={el.text} className='flex items-center gap-8'>
          <div className='p-4 rounded-lg bg-white/20'>
            <Image src={el.icon} alt='icon' width={50} height={50} />
          </div>
          <div>
            <p className='text-lg font-semibold leading-7 text-white'>
              {el.text}
            </p>
            <GrayText className='text-gray-300'>Learn more</GrayText>
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
