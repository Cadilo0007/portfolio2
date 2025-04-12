import Section from './Section'; // Ensure this is your custom Section wrapper

export default function Experience() {
  const work = [
    {
      name: 'DICT',
      startDate: '2025-01-06',
      endDate: '2025-04-04',
      position: 'On the Job Training',
      summary: 'As an intern at the Department of Information and Communications Technology (DICT), I gained valuable hands-on experience in various areas such as networking, cybersecurity, programming, and IT infrastructure. I participated in training sessions, worked on real-world projects, and collaborated with a team of professionals, all while learning new skills and applying my knowledge to industry-standard tasks. This internship provided an opportunity for professional growth, allowing me to develop both technical and soft skills in a supportive and structured environment.',
      highlights: [],
      url: 'https://dict.gov.ph'
    },
    // Add more work entries as needed...
  ];

  return (
    <Section title="Experience">
      <hr  className='mt-1 mb-3 text-indigo-500'/>
      <ul className="flex flex-col gap-8">
        {work.map(
          ({ name, startDate, endDate, position, summary, url }, index) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear = endDate ? new Date(endDate).getFullYear() : 'Present';

            return (
              <li key={index}>
                <article>
                  <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 gap-2">
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        <a
                          href={url}
                          title={`Visit ${name}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:underline"
                        >
                          {name}
                        </a>
                      </h3>
                      <h4 className="text-white font-normal text-sm">{position}</h4>
                    </div>

                    <div className="min-w-[102px] text-sm text-white relative" data-title={startDate}>
                      <time>{startYear}</time> -{' '}
                      <time data-title={endDate}>{endYear}</time>
                    </div>
                  </header>

                  <footer>
                    <p className="text-white text-sm">{summary}</p>
                  </footer>
                </article>
              </li>
            );
          }
        )}
      </ul>
    </Section>
  );
}
