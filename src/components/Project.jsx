import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import Project1Img from '../assets/project2.png';
import Project2Img from '../assets/project3.png';
import Project3Img from '../assets/project4.png';
import Project4Img from '../assets/project1.png';

const projects = [
  {
    name: 'Attendance Monitoring using RFID',
    url: 'https://yourproject1.com',
    github: 'https://github.com/yourproject1',
    description: 'A brief description of project one.',
    highlights: ['CSS', 'HTML', 'Responsive', 'PHP', 'JavaScript'],
    isActive: true,
    image: Project1Img,
  },
  {
    name: 'Home Automation',
    url: 'https://yourproject2.com',
    github: 'https://github.com/yourproject2',
    description: 'A brief description of project two.',
    highlights: ['CSS', 'HTML', 'Responsive', 'Arduino', 'JavaScript', 'C++'],
    isActive: true,
    image: Project2Img,
  },
  {
    name: 'Management OJT Information',
    url: 'https://yourproject3.com',
    github: 'https://github.com/yourproject3',
    description: 'A brief description of project three.',
    highlights: ['CSS', 'HTML', 'Responsive', 'PHP', 'JavaScript'],
    isActive: true,
    image: Project3Img,
  },
];

export default function Project() {
  return (
    <Section title="Projects">
      <hr  className='mt-1 mb-3 text-indigo-500'/>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
        {projects.map(({ url, github, description, highlights, name, isActive, image }, index) => (
          <li key={index}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group cursor-pointer"
              title={`View ${name}`}
            >
              <article className="relative flex flex-col gap-2 p-4 border border-indigo-500 rounded-md h-full shadow-xs transition-transform duration-300 group-hover:shadow-sm group-hover:scale-[1.02]">
                {/* Image shown on hover */}
                <div className="absolute inset-0 bg-indigo-950 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50 flex items-center justify-center p-4 rounded-md">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-auto max-h-48 object-contain rounded z-20"
                  />
                </div>

                {/* Main content */}
                <header className="flex-1 z-40">
                  <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                    {name}
                    {isActive && (
                      <span className="text-green-500 animate-pulse text-xs">●</span>
                    )}
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-white hover:text-black"
                        title={`View GitHub for ${name}`}
                        onClick={(e) => e.stopPropagation()} // Prevent click from triggering parent
                      >
                        <FaGithub />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm text-white mb-1">{description}</p>
                </header>

                <footer className="flex flex-wrap gap-2 text-xs z-20">
                  {highlights.map((highlight, i) => (
                    <span key={i} className="bg-gray-200 text-indigo-500 px-2 py-1 rounded-md">
                      {highlight}
                    </span>
                  ))}
                </footer>
              </article>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
