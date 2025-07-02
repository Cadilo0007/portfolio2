import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import Section from './Section';
import Project1Img from '../assets/project2.png';
import Project2Img from '../assets/project3.png';
import Project3Img from '../assets/project4.png';
import Project5Img from '../assets/project5.png'
import ProjectX from '../assets/IMAGE.png';

const allProjects = [
  {
    name: 'Attendance System',
    url: 'https://github.com/Cadilo0007/AMS-usingRFID.git',
    github: 'https://github.com/Cadilo0007/AMS-usingRFID.git',
    description: 'Capstone project: Designed to streamline processes for faculty and staff of IC,Inc.',
    highlights: ['CSS', 'HTML', 'PHP', 'JavaScript'],
    isActive: true,
    image: Project1Img,
  },
  {
    name: 'Home Automation',
    url: 'https://github.com/Cadilo0007/Home-automation.git',
    github: 'https://github.com/Cadilo0007/Home-automation.git',
    description: "I built this as part of my Arduino subject—it's a fun way to explore how microcontrollers work in real projects.",
    highlights: ['CSS', 'HTML', 'Arduino', 'JavaScript', 'C++'],
    isActive: true,
    image: Project2Img,
  },
  {
    name: 'OJT Information',
    url: 'https://yourproject3.com',
    github: 'https://github.com/yourproject3',
    description: 'Designed to manage the OJT information for DICT, keeping track of all the interns entering the department.',
    highlights: ['CSS', 'HTML', 'PHP', 'JavaScript'],
    isActive: true,
    image: Project3Img,
  },
  {
    name: 'E-commerce',
    url: 'https://github.com/eiirikr/Ecommerce-Web-App-Client.git',
    github: 'https://github.com/eiirikr/Ecommerce-Web-App-Client.git',
    description: 'Ongoing development of a user-friendly e-commerce website designed to provide a seamless online shopping experience.',
    highlights: ['CSS', 'HTML', 'JavaScript', 'React js', 'Tailwind CSS', ],
    isActive: true,
    image: ProjectX,
  },
  {
    name: 'Minimalist Portfolio',
    url: 'https://github.com/Cadilo0007/portfolio2.git',
    github: 'https://github.com/Cadilo0007/portfolio2.git',
    description: 'A minimalist designed for my personal portfolio website.',
    highlights: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Node.js', 'TypeScript'],
    isActive: true,
    image: Project5Img,
  },
];

export default function Project() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);
  return (
    <div className='pt-5'>
    <Section title="Projects" id="projects">
      <hr className="mt-1 mb-3 text-indigo-500" />
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
        {visibleProjects.map(
          ({ url, github, description, highlights, name, isActive, image }, index) => (
            <li key={index} className="h-full">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group cursor-pointer h-full"
                title={`View ${name}`}
              >
                <article className="relative flex flex-col justify-between p-4 border border-indigo-500 rounded-md h-full shadow-xs transition-transform duration-300 group-hover:shadow-sm group-hover:scale-[1.02] bg-indigo-950/30 bg-opacity-15 backdrop-blur-2xl">
                  {/* Hover image */}
                  <div
                    className="
                      relative w-full
                      md:absolute md:inset-0 md:bg-indigo-950 md:bg-opacity-90
                      md:opacity-0 md:group-hover:opacity-100
                      transition-opacity duration-300 z-50
                      flex items-center justify-center p-4 rounded-md
                    "
                  >
                    <img
                      src={image || 'fallback.png'}
                      alt={name}
                      className="w-full h-auto max-h-48 object-contain rounded z-20"
                    />

                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow z-40">
                    <header className="mb-2">
                      <h3 className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                        {name}
                        {isActive && (
                          <span className="text-[#64ffda] animate-pulse text-xs">●</span>
                        )}
                        {github && (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-white hover:text-black"
                            title={`View GitHub for ${name}`}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Open ${name} project in new tab`}
                          >
                            <FaGithub />
                          </a>
                        )}
                      </h3>
                      <p className="text-sm text-indigo-300">{description}</p>
                    </header>

                    <footer className="mt-auto flex flex-wrap gap-2 text-xs z-20 pt-2">
                      {highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="bg-gray-200 text-indigo-500 px-2 py-1 rounded-md"
                        >
                          {highlight}
                        </span>
                      ))}
                    </footer>
                  </div>
                </article>
              </a>
            </li>
          )
        )}
      </ul>
          {/* View More / View Less Button */}
          {allProjects.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-indigo-400 hover:text-white border border-indigo-400 hover:border-white px-4 py-1 rounded transition duration-300 text-sm scale-z-200" 
            >
              {showAll ? 'View Less' : 'View More'}
            </button>
          </div>
        )}
    </Section>
    </div>
  );
}
