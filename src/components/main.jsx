import Hero from "./Hero";  
import About from "./About";
import Experience from "./Experience";
import Education from "./Education";
import Project from "./project";
import Skills from "./Skills";
import Lanyard from "./Lanyard/Lanyard";
import Footer from "./footer";
const Main = () => {  

  return (
    <>      
      <div className="bg-[#14063d]" style={{
    padding: "0 1rem 0 1rem"
}}>
        <Lanyard position={[0, 0, 20]}gravity={[0, -40, 0]}/>
        <div style={{
            background: "radial-gradient(600px at 375px 446px, rgba(29, 78, 216, 0.15), transparent 80%)",
          }}>
          <Hero />
          <About />
          <Experience />
          <Education />
            <Project />
          <Skills />
          <Footer />
        </div> 
      </div>
    </>

  )
}

export default Main;
