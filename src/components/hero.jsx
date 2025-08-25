import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import Section from './Section';
import { FaDownload } from "react-icons/fa";
import Stack from './react-bits/Stack';
import ShinyText from './react-bits/ShinyText';
import RotatingText from './react-bits/RotatingText'
import HeroPic from '../assets/profile1.jpg';
import HeroPic1 from '../assets/profile2.jpg';
import HeroPic2 from '../assets/profile3.jpg';
import HeroPic3 from '../assets/profile4.jpg';
import HeroPic4 from '../assets/profile5.jpg';
import StarBorder from './react-bits/StarBorder';
import FadeContent from './react-bits/FadeContent'

const images = [
{ id: 1, img: HeroPic },
{ id: 2, img: HeroPic1 },
{ id: 3, img: HeroPic2 },
{ id: 4, img: HeroPic3 },
{ id: 5, img: HeroPic4 },
]
const Hero = ({
  name = 'Justine Leymark',
  title = 'Shaping ',
  location = 'Philippines, Isabela',

})=> {
  return (
    <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
    <Section title={null} id="hero">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 pt-24 animate-fadeIn">
        {/* Left Side - Text Info */}
        <div className="flex flex-col gap-2 md:pr-8 text-center md:text-left items-center md:items-start text-indigo-500">
          <h1 className="text-5xl font-bold">
          <ShinyText text={name} disabled={false} speed={5} className='custom-class' /></h1>
          <h3 className="text-indigo-100 font-medium text-lg flex flex-wrap items-center justify-center md:justify-start gap-2">
            {title}
            <RotatingText
              texts={['Ideas', 'Concepts', 'Designs', 'Code']}
              mainClassName="text-lg text-indigo-100 overflow-hidden justify-center rounded-lg relative"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0 sm:pb-0 md:pb-0"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </h3>

          <h3 className="text-indigo-100 font-medium text-lg">
            into Real Projects that Deliver Results
          </h3>
          {/* location */}
          <span className="flex items-center gap-1 text-sm text-indigo-300">
            <FaMapMarkerAlt className='text-red-500 animate-pulse'/>
            {location}
          </span>

          {/* Screen-only Footer */}
          <footer className="flex gap-2 mt-2 ">
            <StarBorder
              as="button"
              className="custom-class inline-flex items-center gap-2 text-white py-1 px-3 rounded-lg transition text-sm duration-300 z-50"
              color="cyan"
              speed="5s"
              href="CV/Justine_Leymark_Cadilo.pdf"
              download
            >
              <FaDownload /> Download CV
            </StarBorder>
          </footer>
        </div>

        {/* Right Side - Profile Picture */}
        <Stack
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={false}
          cardDimensions={{ width: 150, height: 150 }}
          cardsData={images}
        />
      </div>
    </Section>
    </FadeContent>
  );
};

export default Hero;
