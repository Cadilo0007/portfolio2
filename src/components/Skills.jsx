import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaGitAlt ,FaFigma} from 'react-icons/fa';
import { DiMysql } from 'react-icons/di';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import Section from './Section';

// Map each skill name to its corresponding icon component
const SKILLS_ICONS = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
  TypeScript: SiTypescript,
  React: FaReact,
  Node: FaNodeJs,
  MySQL: DiMysql,
  Git: FaGitAlt,
  GitHub: FaGithub,
  Tailwind: SiTailwindcss,
  Next: SiNextdotjs,
  Figma: FaFigma,
};

// Define the skills array with the technologies you're using
const skills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Node' },
  { name: 'MySQL' },
  { name: 'Git' },
  { name: 'GitHub' },
  { name: 'Tailwind' },
  { name: 'Next.js' },  // Handle Next.js specifically
  { name: 'Figma' },
];

export default function Skills() {

  return (
    <Section title="Skills">
      <hr  className='mt-1 mb-3 text-indigo-500'/>
      <ul className="flex flex-wrap gap-2 pb-5">
        {skills.map(({ name }) => {
          const iconName = name === "Next.js" ? "Next" : name;  // Special handling for "Next.js"
          const Icon = SKILLS_ICONS[iconName];

          return (
            <li key={name} className="flex items-center bg-gray-200 text-black rounded-lg p-2 text-sm font-medium gap-2">
              {Icon && <Icon />} {/* Render the icon */}
              <span>{name}</span>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
