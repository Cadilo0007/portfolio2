import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import HeroPic from '../assets/profile2.jpg';
import Section from './Section';

const SOCIAL_ICONS = {
  Facebook: BsFacebook,
  Twitter: BsTwitter,
  Instagram: BsInstagram,
  LinkedIn: BsLinkedin
};

const Hero = ({
  name = 'Justine Leymark',
  title = 'Web Developer with 4 years programming experience',
  location = 'Cauayan City, Region II',
  email,
  phone,
  profiles = [{ network: 'Facebook', url: 'https://facebook.com/justine' },
    { network: 'Instagram', url: 'https://instagram.com/justine' },
    { network: 'LinkedIn', url: 'https://linkedin.com/in/justine' }]
}) => {
  return (
    <Section title={null}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 pt-24">
        {/* Left Side - Text Info */}
        <div className="flex flex-col gap-2 md:pr-8 text-center md:text-left items-center md:items-start text-indigo-500">
          <h1 className="text-3xl font-bold">{name}</h1>
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <span className="flex items-center gap-1 text-sm text-white">
            <FaMapMarkerAlt />
            {location}
          </span>

          {/* Print-only Footer */}
          <footer className="hidden print:flex flex-col gap-1 text-xs text-white mt-2">
            {email && (
              <span className="flex items-center gap-1">
                <FiMail className="w-4 h-4" />
                {email}
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
            {email && (
              <a
                href={`mailto:${email}`}
                title={`Email ${name}`}
                className="text-white border border-indigo-400 hover:bg-gray-100 p-2 w-8 h-8 rounded-md flex items-center justify-center transition"
              >
                <FiMail className="w-4 h-4" />
              </a>
            )}

            {phone && (
              <a
                href={`tel:${phone}`}
                title={`Call ${name}`}
                className="text-white border border-gray-200 hover:bg-gray-100 p-2 w-8 h-8 rounded-md flex items-center justify-center transition"
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
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white border border-indigo-500 hover:bg-gray-100 hover:text-indigo-500 p-2 w-8 h-8 rounded-md flex items-center justify-center transition"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              );
            })}
          </footer>
        </div>

        {/* Right Side - Profile Picture */}
        <figure className="flex justify-center items-center">
          <img
            src={HeroPic}
            alt={name}
            className="w-32 h-32 object-cover rounded-xl"
            loading="lazy"
          />
        </figure>
      </div>
    </Section>
  );
};

export default Hero;
