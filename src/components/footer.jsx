import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import Section from './Section';

export default function Footer() {
  return (
    <Section >
      <footer
        id="normal-footer"
        className="bg-indigo-950 border-t border-indigo-900 bottom-0 w-full p-4 text-sm text-center animate-fadeIn z-50 mt-0 pb-20"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-white">
          <div className="text-center sm:text-left">
            <p className='text-xs'>&copy; 2025 <span className="text-indigo-400 font-semibold">Justine Leymark</span> | All rights reserved</p>
            <p className="text-xs text-gray-400">With love & focus.</p>
          </div>
          <div className="flex gap-4 justify-center z-50 ">
            <a
              href="https://web.facebook.com/justine.cadilo.9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors z-50"
              title="Justine Cadilo"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/jl_cadilo/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors z-50"
              title="jl_cadilo"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/justine-leymark-b-cadilo-900806315/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors z-50"
              title="Justine Leymark.."
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </Section>
  );
}
