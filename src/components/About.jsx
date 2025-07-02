import Section from './Section'; // Ensure this is your custom Section wrapper

export default function About(){
  const summary = `I'm a passionate programmer with a Bachelor of Science in Information Technology from Isabela Colleges, Inc. I enjoy coding, problem-solving, and building web projects. I continuously improve my skills through hands-on practice and collaboration. I'm eager to grow as a developer and contribute positively to the tech industry. I believe in the power of technology to make a difference and am excited about the future of programming.`;

  return (
    <div className='pt-5'>
      <Section title="About Me" id="about" >
        <hr  className='mt-1 mb-3 text-indigo-900'/>
        <p className="text-sm text-indigo-300">{summary}</p>
      </Section>
    </div>
  );   
};
