import Button from '@/components/ui/button';
import Image from 'next/image';

export default function GetInTouch() {
  return (
    <section className='p-20 bg-gradient-to-r from-themeIndigo-dark to-themeIndigo-light rounded-2xl'>
      <h1 className='mb-4 -mt-10 text-4xl leading-normal text-center text-white font-grot '>
        Get In Touch
      </h1>
      <div className='flex items-center justify-between text-white'>
        {data.map((el) => (
          <div key={el.title} className='flex items-center gap-6'>
            <div className='p-5 rounded-2xl bg-white/20'>
              <Image src={el.icon} alt={el.title} width={28} height={32} />
            </div>
            <div>
              <p className='font-bold tracking-wider'>{el.title}</p>
              <p className='font-medium'>{el.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex items-stretch'>
        <input type='text' placeholder='yourname@mail.com' />
        <Button className='bg-themeText-dark'>Get Started</Button>
      </div>
    </section>
  );
}

const data = [
  {
    icon: '/assets/location.svg',
    title: 'Location',
    desc: 'Street 17, Block 3 New York',
  },
  {
    icon: '/assets/phone.svg',
    title: 'Contact Information',
    desc: '+1 (323) 323-7423',
  },
  {
    icon: '/assets/gmail.svg',
    title: 'Email',
    desc: 'helsia@gmail.com',
  },
];
