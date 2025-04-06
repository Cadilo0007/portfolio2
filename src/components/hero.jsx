import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import HeroPic from '../assets/profile2.jpg'
const hero = () => {

  return (
    <>
      <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
        <div className='lg:w-1/3 ssm:w-fit'>
          <p className='text-4xl mb-5 text-slate-300'>I'm</p>
          <h1 className='text-6xl'>Justine Leymark Cadilo</h1>
          <p className='mt-10 text-xl text-slate-300 font-sans'>I am an artist aspiring to become a web designer, driven by my passion for crafting visually stunning digital experiences. Currently, dedicated to refining my skills and enhancing creativity and technical through continuous practice</p>
        </div>
        <div className='w-1/3 items-center ssm:w-fit'>
          <img src={HeroPic} alt="" width={250} height={250} className='rounded-full border-8 border-white w-120 h-120'/>
        </div>
        <div className='w-/3 ssm:w-fit'>
          <p className='text-4xl mb-4'>About Me</p>
          <p className='text-slate-300'>Let's build quality in programming ad design with our services</p>
          <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white'>
            Show more...
          </button>
          <div className='flex mt-5 space-x-4 cursor-pointer'>
            <BsFacebook size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            <BsInstagram size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            <BsTwitter size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
            <BsLinkedin size={40} className='border-4 hover:border-indigo-800 rounded-full'/>
          </div>
        </div>
      </section>
    </> 
  )
}

export default hero;