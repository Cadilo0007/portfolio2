import Section from './Section';
import icLogo from '../assets/logo/ICLOGO.png';
import nhsLogo from '../assets/logo/CCNHS.jpeg';

export default function Education({
  education = [
    {
      institution: 'Isabela Colleges, Inc.',
      logo: icLogo,
      startDate: '2021',
      endDate: '2025',
      area: 'Course - Bachelor of Science in Information Technology',
    },
    {
      institution: 'Cauayan City National High School',
      logo: nhsLogo,
      startDate: '2019',
      endDate: '2021',
      area: 'Strand - Arts and Design',
    },
  ],
}) {
  return (
    <div className='pt-5'>  
    <Section title="Education">
      <hr className="mt-1 mb-3 text-indigo-900" />
      <ul className="flex flex-col gap-8">
        {education.map(({ institution, logo, startDate, endDate, area }, index) => {
          const years = `${new Date(startDate).getFullYear()} - ${endDate ? new Date(endDate).getFullYear() : 'Present'}`;

          return (
            <li key={index}>
              <article>
                <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <img
                      src={logo}
                      alt={`${institution} logo`}
                      className="w-6 h-6 object-contain shadow-md hover:shadow-indigo-500 transition duration-300 rounded-full mr-4"
                    />
                    <h3 className="font-semibold text-white text-sm">{institution}</h3>
                  </div>
                  <time className="text-sm text-white min-w-[102px]">
                    {years}
                  </time>
                </header>
                <footer>
                  <p className="text-sm text-indigo-300">{area}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
    </div>
  );
}
