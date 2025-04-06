import Project1Img from '../assets/project2.png';
import Project2Img from '../assets/project3.png';
import Project3Img from '../assets/project4.png';
import Project4Img from '../assets/project1.png';

export default function Project() {
  return (
    <>
      <div className='bg-indigo-800 m-20 max-w-full'>
        <div className='grid justify-items-center m-10'>
          <h1 className='text-3xl text-white mt-10'>Project</h1>
        </div>

        <div>
          <div className='grid grid-cols-2 gap-4 p-5'>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Attendance Monitoring System 
                  </div>
                  <a href="#">P1</a>
                  <p className='mt-2 text-slate-500'>This system utilizes RFID (Radio Frequency Identification) technology for attendance monitoring.
                  </p>
                </div>
                <div className='md:shrink-0 p-5'>
                  <img src={Project1Img} alt="Project1" height={150} width={150}/>
                </div>
              </div>
            </div>

            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

              <div className='md:flex'>
                <div className='p-8'>
                  <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                    Home Automation System 
                  </div>
                  <a href="#">P2</a>
                  <p className='mt-2 text-slate-500'>This Home automation project that allows you to control your home appliances using your phone or laptop .
                  </p>
                </div>
                <div className='md:shrink-0 p-5'>
                  <img src={Project2Img} alt="Project2" height={150} width={150}/>
                </div>
              </div>
            </div>
          </div>
          <hr class="border-white"/>
          <div className='grid grid-cols-2 gap-4 p-5'>
          <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                  Ojts Information System 
                </div>
                <a href="#">P3</a>
                <p className='mt-2 text-slate-500'>This System is a web-based platform designed to streamline the management and monitoring of students undergoing OJT in various departments or partner institutions.
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={Project3Img} alt="Project3" height={150} width={150}/>
              </div>
            </div>
            </div>
            <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse'>

            <div className='md:flex'>
              <div className='p-8'>
                <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                  My first Portfolio
                </div>
                <a href="#">P4</a>
                <p className='mt-2 text-slate-500'>This portfolio is a reflection of my journey as a budding web designer and developer. It is dedicated to refining both my creative and technical skills through continuous practice.
                </p>
              </div>
              <div className='md:shrink-0 p-5'>
                <img src={Project4Img} alt="Project1" height={150} width={150}/>
              </div>
            </div>
            </div>

          </div>
          
        </div>
      </div>
    </>
  )
}