import Social from './social';

export default function Footer() {
  return (
    <footer className='relative p-20 -mx-20 flex text-white -mt-14 gap-[20%] bg-themeBlue -z-20 [&_p]:tracking-wider'>
      <div>
        <p className='font-bold'>Logo</p>
        <p className='my-8 text-sm opacity-60'>
          We take care of your health with regular and fun exercise
        </p>
        <Social />
      </div>
      <div className='grid w-1/2 grid-cols-3'>
        {data.map((item) => (
          <div className='space-y-2' key={item.menu}>
            <p className='mb-6 font-bold'>{item.menu}</p>
            {item.subMenus.map((subItem) => (
              <p className='text-sm cursor-pointer opacity-60' key={subItem}>
                {subItem}
              </p>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

const data = [
  {
    menu: 'Program',
    subMenus: ['Workout', 'Gym', 'Cardio', 'Zumba'],
  },
  {
    menu: 'Blog',
    subMenus: ['Daily Stretch', 'Daily Workout'],
  },
  {
    menu: 'About Us',
    subMenus: ['Support', 'Contact', 'Address'],
  },
];
