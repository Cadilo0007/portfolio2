import { useEffect, useState } from "react";
import Nav from "./nav";
import Hero from "./hero";  
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./Project";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Lanyard from "./Lanyard/Lanyard";
import ContactSection from "./ContactSection";
import Footer from "./footer";
import Certifications from "./Certifications";
import Testimonial from "./testimonial";
import Loader from "./Loader";

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [gradientPos, setGradientPos] = useState({ x: 375, y: 446 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // simulate loading delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGradientPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const gradientStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    background: `radial-gradient(600px at ${gradientPos.x}px ${gradientPos.y}px, rgba(29, 78, 216, 0.15), transparent 70%)`,
    zIndex: 0,
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="relative bg-slate-950">
          <div style={gradientStyle}></div>

          <div>
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />              
            <Nav />
            <Hero />
            <About />
            <Experience />
            <Education />
            <Project />
            <Skills />
            <Certifications />
            <Testimonial />
            <Hobbies />
            <ContactSection />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
