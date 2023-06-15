import Image from 'next/image';

export default function GetInTouch() {
  return (
    <section className='bg-gradient-to-r from-themeIndigo-dark to-themeIndigo-light'>
      <h1 className='text-4xl leading-normal text-center text-white '>
        Get In Touch
      </h1>
      <div>
        {data.map((el) => (
          <div key={el.title}>
            <div>
              <Image src={el.icon} alt={el.title} width={28} height={32} />
            </div>
          </div>
        ))}
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
