import { useState } from 'react';
import Section from './Section';
import Certificate1 from '../assets/IMAGE.png';
import Cisco from '../assets/exploring_networking_with_cisco_packet_tracer_25.png';
import Cisco2 from '../assets/getting_started_with_cisco_packet_tracer_24.png';
import Cisco3 from '../assets/exploring_iot_with_cisco_packet_tracer_26.png';

const certifications = [
  {
    title: 'Free Coding Bootcamp: JavaScript Game Development Workshop',
    image: Certificate1,
    issuer: 'ZUITT',
    date: 'August 2024',
  },
  {
    title: 'Computer Hardware Basics',
    image: Certificate1,
    issuer: 'CISCO',
    date: 'January 2025',
  },
  {
    title: 'Free Coding Bootcamp: Data Visualization Workshop',
    image: Certificate1,
    issuer: 'ZUITT',
    date: 'February 2025',
  },
  {
    title: 'Hardening SQL: Cybersecurity Strategies for Safer Databases',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'February 2025',
  },
  {
    title: 'DIGITAL DEFENSE: Building Strong Cyber Hygiene',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'February 2025',
  },
  {
    title: 'Exploring Networking with Cisco Packet Tracer',
    image: Cisco,
    issuer: 'CISCO',
    date: 'February 2025',
  },
  {
    title: 'Getting Started with Cisco Packet Tracer',
    image: Cisco2,
    issuer: 'CISCO',
    date: 'February 2025',
  },
  {
    title: 'Exploring IoT with Cisco Packet Tracer',
    image: Cisco3,
    issuer: 'CISCO',
    date: 'February 2025',
  },
  {
    title: 'Data Privacy Protection Awareness',
    image: Certificate1,
    issuer: 'DICT',
    date: 'March 2025',
  },
  {
    title: 'JUANAS ON THE RISE: Online Careers & AI',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'SPARK Advocacy',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'BEYOND CLICK AND CONSENT: Understanding Your Data Privacy Rights',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'Cyber Queens: Empowering Women in Cybersecurity and Digital Defense',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'Data Privacy for Women & Children',
    image: Certificate1,
    issuer: 'DICT Quirino',
    date: 'March 2025',
  },
  {
    title: 'Cyber Queens: Empowering Women in Cybersecurity and Digital Defense',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'Orientation on the National Cybersecurity Plan 2023-2028',
    image: Certificate1,
    issuer: 'DICT Nueva Vizcaya',
    date: 'March 2025',
  },
  {
    title: 'PC Troubleshooting and Repair Techniques',
    image: Certificate1,
    issuer: 'DICT',
    date: 'March 2025',
  },
];

export default function Certification() {
  const [showAll, setShowAll] = useState(false);
  const visibleCerts = showAll ? certifications : certifications.slice(0, 3);

  return (
    <div className="pt-5">
      <Section title="Certifications" id="certifications">
        <hr className="mt-1 mb-3 text-indigo-500" />
        <p className="text-indigo-300 text-sm text-center pb-5">
          These certifications and awards reflect my continuous learning and dedication to improving my skills in technology and development.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 z-50">
          {visibleCerts.map(({ title, image, issuer, date }, index) => (
            <li key={index} className="h-full">
              <div className="relative group cursor-pointer h-full">
                <article className="flex flex-col justify-between p-4 border border-indigo-500 rounded-md h-full shadow-xs transition-transform duration-300 group-hover:shadow-sm group-hover:scale-[1.02] bg-indigo-950/30 bg-opacity-15 backdrop-blur-2xl">
                  
                  {/* Certificate Info */}
                  <div className="flex flex-col flex-grow z-10">
                    <header className="mb-2">
                      <h3 className="text-sm font-semibold text-white mb-1">{title}</h3>
                      <p className="text-sm text-indigo-300">{issuer}</p>
                      <p className="text-xs text-indigo-400 mt-1">{date}</p>
                    </header>
                  </div>

                  {/* Hover Image Overlay */}
                  <div className="absolute inset-0 bg-indigo-950 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center rounded-md p-2 ">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-auto max-h-48 object-contain  shadow-md bg-slate-950 rounded-md border-2 z-40"
                    />
                  </div>
                </article>
              </div>
            </li>
          ))}
        </ul>

        {/* View More / View Less Button */}
        {certifications.length > 3 && (
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
