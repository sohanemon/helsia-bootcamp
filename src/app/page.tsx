import Cta from '@/components/cta';
import IntenseEffective from './intense-&-effective';
import Challenges from './challenges';
import TextImage from './text-&-image';

export default function Home() {
  return (
    <main className='mb-96'>
      <Cta />
      <IntenseEffective />
      <Challenges />
      <TextImage
        src='/assets/team.svg'
        heading='Passionate Team Dedicated to Your Health and Fitness'
        grayText='Meet our highly skilled trainers who have years of experience and expertise in military-inspired training. They are passionate about helping people achieve their health and fitness goals.'
      />
    </main>
  );
}
