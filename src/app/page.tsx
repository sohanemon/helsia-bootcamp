import Cta from '@/components/cta';
import IntenseEffective from './intense-&-effective';
import Challenges from './challenges';
import TextImage from './text-&-image';
import Pricing from './pricing';
import Testimonial from './testimonial';
import GetInTouch from './get-in-touch';
import Footer from './footer';

export default function Home() {
  return (
    <main>
      <Cta />
      <IntenseEffective />
      <Challenges />
      <TextImage
        src='/assets/team.svg'
        heading='Passionate Team Dedicated to Your Health and Fitness'
        grayText='Meet our highly skilled trainers who have years of experience and expertise in military-inspired training. They are passionate about helping people achieve their health and fitness goals.'
      />
      <TextImage
        rtl
        src='/assets/girl.png'
        heading='Passionate Team Dedicated to Your Health and Fitness'
        grayText='Our training program focuses on high-intensity military-inspired exercises that improve both physical and mental well-being. Each participant receives personalized training schedules and diet plans tailored to their goals.'
      />
      <TextImage
        src='/assets/team.svg'
        heading='Providing Food and Accommodation for your Journey'
        grayText='During the training program, we provide healthy, delicious meals cooked from scratch. Enjoy a balanced diet that fuels your body for optimal performance.'
      />
      <Pricing />
      <Testimonial />
      <GetInTouch />
      <Footer />
    </main>
  );
}
