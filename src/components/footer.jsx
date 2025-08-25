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
        </div>
      </footer>
    </Section>
  );
}
