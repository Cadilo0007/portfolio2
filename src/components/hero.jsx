import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
// import HeroPic from '../assets/profile1.jpg';
import Section from './Section';
import { FaDownload } from "react-icons/fa";
import {words} from '../constants/index.js';
import ImageStack from './ImageStack.jsx';


const SOCIAL_ICONS = {
  Email: FiMail,
  Facebook: BsFacebook,
  Instagram: BsInstagram,
  LinkedIn: BsLinkedin
};

const Hero = ({
  name = 'Justine Leymark',
  title = 'Shaping ',
  location = 'Philippines, Isabela',
  email = [{ network: 'Email', url: 'ju27ine@gmail.com' }],
  phone = '',
  profiles = [
    { network: 'Facebook', url: 'https://web.facebook.com/justine.cadilo.9' },
    { network: 'Instagram', url: 'https://www.instagram.com/jl_cadilo/' },
    { network: 'LinkedIn', url: 'https://www.linkedin.com/in/justine-leymark-b-cadilo-900806315/' }
  ]
}) => {
  const emailAddress = email?.[0]?.url || '';



  return (
    <Section title={null} id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 pt-24 animate-fadeIn">
        {/* Left Side - Text Info */}
        <div className="flex flex-col gap-2 md:pr-8 text-center md:text-left items-center md:items-start text-indigo-500">
          <h1 className="text-3xl font-bold text-amber-400">{name}</h1>
          <h3 className="text-indigo-100 font-medium text-lg">
            {title} 
            <span className="slide">
              <span className="slider-mask">
                <span className="wrapper">
                  {words.map((word) => (
                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2 underline decoration-amber-400">
                      {/* <img
                        src={word.imgPath}
                        alt={`Icon representing ${word.text}`}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      /> */}
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </span><br/> into Real Projects that Developer Results
          </h3>
          {/* location */}
          <span className="flex items-center gap-1 text-sm text-indigo-300">
            <FaMapMarkerAlt className='text-red-500 animate-pulse'/>
            {location}
          </span>
          {/* Print-only Footer */}
          <footer className="hidden print:flex flex-col gap-1 text-xs text-white mt-2">
            {emailAddress && (
              <span className="flex items-center gap-1">
                <FiMail className="w-4 h-4 " />
                {emailAddress}
              </span>
            )}

            {profiles.map(({ network, url }, idx) => {
              const Icon = SOCIAL_ICONS[network];
              return (
                Icon && (
                  <span key={idx} className="flex items-center gap-1">
                    <Icon className="w-4 h-4" />
                    {url}
                  </span>
                )
              );
            })}
          </footer>

          {/* Screen-only Footer */}
          <footer className="flex gap-2 mt-2">
            <a
              href="CV/Justine_Leymark_Cadilo.pdf"
              download
              className="inline-flex items-center gap-2 bg-indigo-950 border-1 border-indigo-500 hover:bg-indigo-900 text-white py-1 px-3 rounded-lg transition text-sm duration-300 z-50"
            >
              <FaDownload /> Download CV
            </a>
            {emailAddress && (
              <a
                href={`mailto:${emailAddress}`}
                title={`Email ${name}`}
                aria-label={`Email ${name}`}
                className="text-white border bg-indigo-950 border-indigo-500 hover:bg-gray-100 hover:text-indigo-500 p-2 w-8 h-8 rounded-md flex items-center justify-center transition z-50"
              >
                <FiMail className="w-4 h-4" />
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Call ${name}`}
                aria-label={`Call ${name}`}
                className="text-white border border-indigo-500 bg-indigo-950 hover:bg-gray-100 hover:text-indigo-500 p-2 w-8 h-8 rounded-md flex items-center justify-center transition z-50"
              >
                <FiPhone className="w-4 h-4" />
              </a>
            )}


            {profiles.map(({ network, url }, idx) => {
              const Icon = SOCIAL_ICONS[network];
              return (
                Icon && (
                  <a
                    key={idx}
                    href={url}
                    title={`${network} profile`}
                    aria-label={`Visit ${network} profile of ${name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border border-indigo-500 bg-indigo-950 hover:bg-gray-100 hover:text-indigo-500 p-2 w-8 h-8 rounded-md flex items-center justify-center transition z-50"
                  >
                    <Icon className="w-4 h-4" />
                  </a>

                )
              );
            })}
          </footer>
        </div>

        {/* Right Side - Profile Picture */}
        <ImageStack />
      </div>
    </Section>
  );
};

export default Hero;
