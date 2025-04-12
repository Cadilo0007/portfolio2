import Section from './Section';

export default function Education({
  education = [
    {
      institution: 'Isabela Colleges, Inc.',
      startDate: '2021',
      endDate: '2025',
      area: 'Bachelor of Science in Information Technology',
    },
    {
      institution: 'Cauayan National High School',
      startDate: '2020',
      endDate: '2021',
      area: 'Arts and Design',
    },
  ],
}) {
  return (
    <Section title="Education">
      <hr  className='mt-1 mb-3 text-indigo-500'/>
      <ul className="flex flex-col gap-8">
        {education.map(({ institution, startDate, endDate, area }, index) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear = endDate ? new Date(endDate).getFullYear() : 'Actual';
          const years = `${startYear} - ${endYear}`;

          return (
            <li key={index}>
              <article>
                <header className="flex justify-between items-start mb-1">
                  <h3 className="font-medium text-white text-sm">{institution}</h3>
                  <time className="text-sm text-white min-w-[102px] text-right">
                    {years}
                  </time>
                </header>
                <footer>
                  <p className="text-sm text-white">{area}</p>
                </footer>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
