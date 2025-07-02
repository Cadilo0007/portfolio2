import { useEffect, useState } from 'react';
import Section from './Section';
import GlowCard from './GlowCard';

export default function Testimonial() {
  const testimonials = [
    {
      message: `Congratulations on completing your internship at DICT Isabela Provincial Office, and advance congratulations on your graduation! 🎓 Your hard work and dedication have paid off. Wishing you all the best as you step into the next chapter of your career.
Fighting lang and stay grounded!`,
      name: '- Ma’am Sheryl',
      role: 'Project Development Officer II, ILCDB-A',
    },
    {
      message: `Working with Justine has been a great experience so far. As a Co-developer, he’s reliable, collaborative, and always brings fresh ideas to the table. He approaches every task with passion and a problem-solving mindset, making our ongoing project both productive and enjoyable. Looking forward to what we’ll accomplish together.`,
      name: '- Jeric',
      role: 'Co-Developer',
    },
    {
      message: `The student is quiet but dependable once given a task, he gets it done.
GoodLuck in your Future Work! GodBless!`,
      name: '- Sir Leo',
      role: 'Planning Officer II, DICT R2',
    },
    {
      message: `Keep nurturing your passion in tech, and never stop learning.
The journey ahead is exciting — we believe you'll go far! 🚀`,
      name: '- Anonymous',
      role: 'Unknown',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, testimonials.length]);

  return (
    <div className="pt-5">
      <Section title="Testimonials">
        <hr className="mt-1 mb-3 text-indigo-500" />
        <div
          className="max-w-4xl mx-auto px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative min-h-[400px] sm:min-h-[350px] text-center">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <GlowCard index={i}>
                  <div className="text-left">
                    <svg
                      className="w-8 h-8 text-indigo-400 mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6A5.001 5.001 0 002 11c0 2.21 1.79 4 4 4h1v3h3v-7a5 5 0 00-2.83-4.58zM17.17 6A5.001 5.001 0 0012 11c0 2.21 1.79 4 4 4h1v3h3v-7a5 5 0 00-2.83-4.58z" />
                    </svg>
                    <p className="text-sm sm:text-base text-indigo-100 whitespace-pre-line">
                      {testimonial.message}
                    </p>
                  </div>
                  <div className="mt-6 text-right">
                    <p className="font-semibold text-indigo-300">{testimonial.name}</p>
                    <p className="text-sm text-indigo-400">{testimonial.role}</p>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>

          {/* 🔘 DOT SLIDER */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, i) => (
              <li
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full cursor-pointer list-none transition-all duration-300 ${
                  i === index ? 'bg-indigo-500 scale-125' : 'bg-indigo-200'
                }`}
              ></li>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
