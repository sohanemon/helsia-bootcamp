import Image from 'next/image';
import Button from './ui/button';
import GrayText from './ui/gray-text';
import Heading from './ui/heading';

export default function Cta() {
  return (
    <section className='grid items-center grid-cols-2 max-sm:grid-cols-1 max-sm:justify-items-center'>
      <div className='sm:pr-20'>
        {/* #todo:left */}
        <Heading cta>
          Where Intense and Fun Training meets{' '}
          <span className='text-themeIndigo-light'>Motivation!</span>
          <Image
            src={'/assets/motivation.svg'}
            alt='icon'
            className='inline-block mb-4 ml-2'
            width={50}
            height={50}
          />
        </Heading>
        <GrayText className='pt-6 pb-7'>
          Experience a transformative journey towards improving your health and
          fitness. Explore our website to discover the incredible opportunities
          that await you.
        </GrayText>
        <div className='flex items-center gap-9'>
          <Button>
            Get Started Today
            <Image
              src={'/assets/arrow-right.svg'}
              alt='icon'
              width={26}
              height={26}
            />
          </Button>
          <Button white>
            {' '}
            <Image
              src={'/assets/video.svg'}
              alt='icon'
              width={26}
              height={26}
            />
            Watch Bootcamp Video
          </Button>
        </div>
      </div>
      <div className='max-sm:order-first'>
        {/* #todo:right */}
        <Image
          src={'/assets/hero.svg'}
          alt='man with dumbbell'
          width={580}
          height={580}
          className='inline-block w-full'
        />
      </div>
    </section>
  );
}
