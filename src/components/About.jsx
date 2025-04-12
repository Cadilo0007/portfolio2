import Section from './Section'; // Ensure this is your custom Section wrapper

export default function About(){
  const summary = `I am currently a graduating student at Isabela Colleges Inc., living in Isabela, Philippines. I have gained experience working in different environments, including as an intern at DICT.`;

  return (
    <div className='text-white'>
      <Section title="About Me">
      <hr  className='mt-1 mb-3 text-indigo-500'/>
        <p className="text-sm">{summary}</p>
      </Section>
      
    </div>
  );   
};
