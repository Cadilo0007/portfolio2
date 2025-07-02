import { useState } from 'react';
import Section from './Section';
import dictLogo from '../assets/logo/DICT-Logo-Final.png';

export default function Experience() {
  const work = [
    {
      name: 'DICT Isabela Provincial Office (Cauayan)',
      logo: dictLogo,
      startDate: '2025-01-06',
      endDate: '2025-04-04',
      position: 'On the Job Training',
      summary:
        'As an intern at the Department of Information and Communications Technology (DICT), I gained valuable hands-on experience in various areas such as networking, cybersecurity, programming, and IT infrastructure. I participated in training sessions, worked on real-world projects, and collaborated with a team of professionals, all while learning new skills and applying my knowledge to industry-standard tasks. This internship provided an opportunity for professional growth, allowing me to develop both technical and soft skills in a supportive and structured environment.',
      url: 'https://dict.gov.ph',
    },
  ];

  return (
    <div className='pt-5'>
      <Section title="Experience">
        <hr className="mt-1 mb-3 text-indigo-900" />
        <ul className="flex flex-col gap-8">
          {work.map(
            ({ name, logo, startDate, endDate, position, summary, url }, index) => {
              const startYear = new Date(startDate).getFullYear();
              const endYear = endDate ? new Date(endDate).getFullYear() : 'Present';

              // State for toggling the visibility of the summary
              const [isOpen, setIsOpen] = useState(false);

              return (
                <li key={index}>
                  <article>
                    <header
                      className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 gap-2 cursor-pointer scale-z-200"
                      onClick={() => setIsOpen(!isOpen)} // Toggle the summary visibility
                    >
                      <div className="flex items-center gap-2">
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <img
                            src={logo}
                            alt={`${name} logo`}
                            className="w-6 h-6 object-contain shadow-md hover:shadow-indigo-500 transition duration-300 rounded-full bg-amber-50 mr-4"
                          />
                        </a>
                        <h3 className="text-sm font-semibold text-white">
                          <a
                            title={`Visit ${name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline"
                          >
                            {name}
                          </a>{' '}
                          <span className="font-normal text-white">| {position}</span>
                        </h3>
                      </div>
                      <div className="min-w-[102px] text-sm text-white">
                        <time>{startYear}</time> - <time>{endYear}</time>
                      </div>
                    </header>

                    {/* Conditionally add ellipsis and "Show more" if the summary is hidden */}
                    <footer>
                      {!isOpen && (
                        <p className="text-indigo-300 text-sm">
                          {summary.substring(0, 100)}...{' '}
                          <span className="text-indigo-500 cursor-pointer scale-z-200" onClick={() => setIsOpen(!isOpen)}>Show more</span>
                        </p>
                      )}

                      {/* Full summary if the section is expanded */}
                      {isOpen && (
                        <p className="text-indigo-300 text-sm">{summary}</p>
                      )}
                    </footer>
                  </article>
                </li>
              );
            }
          )}
        </ul>
      </Section>
    </div>
  );
}
