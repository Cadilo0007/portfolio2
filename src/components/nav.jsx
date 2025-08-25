import Dock from './react-bits/Dock';
import { VscHome } from 'react-icons/vsc';
import { FaGithub, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi';


const Nav = () => {
const items = [
  {
    id: 'home',
    icon: <VscHome size={18} />,
    label: 'Home',
    onClick: () => {
      const el = document.getElementById('hero');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
  },
  {
      id: 'github',
      icon: <FaGithub size={18} />,
      label: 'GitHub',
      onClick: () => window.open('https://github.com/Cadilo0007', '_blank'),
  },
    {
      id: 'facebook',
      icon: <FaFacebookF size={18} />,
      label: 'Facebook',
      onClick: () => window.open('https://web.facebook.com/justine.cadilo.9', '_blank'),
  },
    {
      id: 'instagram',
      icon: <FaInstagram size={18} />,
      label: 'Instagram',
      onClick: () => window.open('https://www.instagram.com/jl_cadilo/', '_blank'),
  },
    {
      id: 'linkedin',
      icon: <FaLinkedinIn size={18} />,
      label: 'LinkedIn',
      onClick: () => window.open('https://www.linkedin.com/in/justine-leymark-b-cadilo-900806315/', '_blank'),
  },
  {
    id: 'email',
    icon: <FiMail size={18} />,
    label: 'Email',
    onClick: () => window.open('mailto: ju27ine@gmail.com', '_blank'),
  },
];


  return (
    <>
    <div className='fixed bottom-0 left-0 right-0 z-50 text-white flex justify-center items-center h-16'>
      <Dock 
      items={items}
      panelHeight={60}
      baseItemSize={40}
      magnification={60}
    />    
    </div>
    </>
  );
};

export default Nav;
