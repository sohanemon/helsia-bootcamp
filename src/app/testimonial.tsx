import GrayText from '@/components/ui/gray-text';
import Heading from '@/components/ui/heading';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section className='my-20'>
      <Heading className='text-center'>Testimonials</Heading>
      <div className='grid grid-cols-1 gap-12 sm:grid-cols-2'>
        {data.map((el) => (
          <TestimonialCard key={el.feedback} {...el} />
        ))}
      </div>{' '}
    </section>
  );
}

const TestimonialCard = ({
  feedback,
  image,
  name,
  occupation,
}: (typeof data)[0]) => {
  return (
    <div className='shadow-2xl rounded-xl shadow-gray-200 p-11'>
      <GrayText className='flex mb-12 opacity-80 '>
        <Image
          src={'/assets/qoute.svg'}
          alt='icon'
          width={22}
          height={22}
          className='self-start mr-0.5 '
        />
        <span> {feedback}</span>
      </GrayText>
      <div className='flex items-center gap-4'>
        <Image
          src={image}
          alt={name}
          width={64}
          height={69}
          className='rounded-[1.2rem] bg-themeBg-ellipse-pink/70'
        />
        <div className='space-y-2'>
          <p className='font-semibold tracking-wider'>{name}</p>
          <GrayText>{occupation}</GrayText>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    image: '/assets/suketi.svg',
    name: 'Suketi Mantapo',
    occupation: 'Designer Graphic',
    feedback:
      "It's great to be able to work out from home and be helped by the helsia. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
  },
  {
    image: '/assets/ada.png',
    name: 'Ada Apose',
    occupation: 'Designer Graphic',
    feedback:
      'Exercise used to be a boring thing for me, but after following helsia I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.',
  },
];
