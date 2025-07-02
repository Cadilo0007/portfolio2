import { FaMusic, FaGamepad, FaBook, FaCamera, FaFilm, FaLaptopCode } from 'react-icons/fa';
import Section from './Section';
import { FaPaintBrush } from 'react-icons/fa';


const HOBBIES_ICONS = {
  Music: { icon: FaMusic, hoverClass: 'text-pink-400' },
  Gaming: { icon: FaGamepad, hoverClass: 'text-purple-500' },
  Reading: { icon: FaBook, hoverClass: 'text-amber-600' },
  Photography: { icon: FaCamera, hoverClass: 'text-blue-400' },
  Watching: { icon: FaFilm, hoverClass: 'text-red-500' },
  Coding: { icon: FaLaptopCode, hoverClass: 'text-green-400' },
  Drawing: { icon: FaPaintBrush, hoverClass: 'text-rose-400' },
  Painting: { icon: FaPaintBrush, hoverClass: 'text-sky-400' },
};

const hobbies = [
  { name: 'Music' },
  { name: 'Gaming' },
  { name: 'Reading' },
  { name: 'Photography' },
  { name: 'Watching' },
  { name: 'Coding' },
  { name: 'Drawing' },
  { name: 'Painting' },
];


export default function Hobbies() {
  return (
    <div className='pt-5'>
      <Section title="Hobbies">
        <hr className='mt-1 mb-3 text-indigo-500' />
        <ul className="flex flex-wrap gap-2 justify-center">
          {hobbies.map(({ name }, index) => {
            const { icon: Icon, hoverClass } = HOBBIES_ICONS[name];

            return (
              <li
                key={name + index}
                title={name}
                className="flex items-center bg-indigo-950 hover:bg-indigo-50 text-white hover:text-indigo-500 rounded-lg px-4 py-2 text-sm font-medium gap-2 border border-indigo-500 z-50 transform hover:scale-105 transition-transform"
              >
                {Icon && (
                  <Icon className={`transition-colors duration-300 ${hoverClass} z-50`} />
                )}
                <span className='z-50'>{name}</span>
              </li>
            );
          })}
        </ul>
      </Section>
    </div>
  );
}

