import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SOCIAL_PROFILES = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: <FaGithub />,
    hotkey: 'g',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yourprofile',
    icon: <FaLinkedin />,
    hotkey: 'l',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/yourhandle',
    icon: <FaTwitter />,
    hotkey: 't',
  },
];

export default SOCIAL_PROFILES;
