import GrayText from '@/components/ui/gray-text';
import Heading from '@/components/ui/heading';
import Image from 'next/image';

export default function Testimonial() {
  return (
    <section>
      <Heading className='text-center'>Testimonials</Heading>
      <div className='grid grid-cols-2 gap-12'>
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
    <div className='rounded-lg shadow-md p-11'>
      <GrayText className='opacity-80'>{feedback}</GrayText>
      <div>
        <Image
          src={image}
          alt={name}
          width={64}
          height={69}
          className='rounded-[1.2rem] bg-themeBg-ellipse-pink/70'
        />
        <div>
          <p>{name}</p>
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
      'exercise used to be a boring thing for me, but after following helsia I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.',
  },
];
