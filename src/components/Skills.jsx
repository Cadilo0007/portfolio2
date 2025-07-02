import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaFigma } from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import Section from './Section';
import { SiPhp } from 'react-icons/si';


// Map each skill name to its corresponding icon component and hover color class
const SKILLS_ICONS = {
  HTML: { icon: FaHtml5, hoverClass: 'text-orange-500' },
  CSS: { icon: FaCss3Alt, hoverClass: 'text-blue-500' },
  JavaScript: { icon: FaJs, hoverClass: 'text-yellow-500' },
  TypeScript: { icon: SiTypescript, hoverClass: 'text-blue-600' },
  React: { icon: FaReact, hoverClass: 'text-cyan-500' },
  Node: { icon: FaNodeJs, hoverClass: 'text-green-500' },
  MySQL: { icon: DiMysql, hoverClass: 'text-blue-700' },
  Git: { icon: FaGitAlt, hoverClass: 'text-red-500' },
  GitHub: { icon: FaGithub, hoverClass: 'text-gray-600' },
  Tailwind: { icon: SiTailwindcss, hoverClass: 'text-teal-400' },
  Next: { icon: SiNextdotjs, hoverClass: 'text-black' },
  Figma: { icon: FaFigma, hoverClass: 'text-pink-500' },
  PHP: { icon: SiPhp, hoverClass: 'text-indigo-400' },

};

// The skills array with the technologies using
const skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'PHP' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Node' },
  { name: 'MySQL' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Tailwind' },
  { name: 'Next.js' },
  { name: 'Figma' },
];

export default function Skills() {
  return (
    <div className='pt-5'>
    <Section title="Technologies">
      <hr className='mt-1 mb-3 text-indigo-500' />
      <ul className="flex flex-wrap gap-2 justify-center">
        {[...skills].map(({ name }, index) => {
          const { icon: Icon, hoverClass } = SKILLS_ICONS[name === "Next.js" ? "Next" : name];

          return (
            <li
              key={name + index}
              className="flex items-center  hover:bg-indigo-50 text-white hover:text-indigo-500 rounded-lg px-4 py-2 gap-2 border border-indigo-500 z-50 hover:scale-105 transform transition-transform text-base md:text-sm bg-indigo-900/30 bg-opacity-15 backdrop-blur-2xl"
            >
              {Icon && (
                <Icon className={`text-xl md:text-lg transition-colors duration-300 ${hoverClass} z-50`} />
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
