import Heading from '@/components/ui/heading';

export default function Testimonial() {
  return (
    <section>
      <Heading className='text-center'>Testimonials</Heading>
    </section>
  );
}

const data = [
  {
    image: '/assets/suketi.svg',
    name: 'Suketi Mantapo',
    occupation: 'Designer Graphic',
    feedback:
      "It's great to be able to work out from home and be helped by the helsia. My day feels fresher when I regularly participate in this fun sport. Good luck to the coaches.",
  },
  {
    image: '/assets/ada.svg',
    name: 'Ada Apose',
    occupation: 'Designer Graphic',
    feedback:
      'exercise used to be a boring thing for me, but after following helsia I became fond of sports and sports became my new hobby. I participate in sports 5 times a week.',
  },
];
