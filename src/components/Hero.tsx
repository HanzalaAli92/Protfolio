
import Navbar from './Navbar'

const Hero = () => {
  return (
     <div id='hero' className='min-h-screen bg-no-repeat bg-[url(/abc.png)]  bg-cover ' 
     style={{backgroundSize: "25%", backgroundPosition: "left 850px top 170px"}} 
     data-aos="zoom-in-up">
      <Navbar />
    <div className='container text-left h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
      <div className='text-[50px] sm:text-[100px]  font-bold leading-tight flex justify-start items-start mx-6 sm:mx-12 md:mx-14 my-14'>
        <div>
          <p data-aos="zoom-in-up" className='text-cyan-700'>I&apos;M</p>
          <p data-aos="zoom-in-up" >Muhammad</p>
          <p data-aos="zoom-in-up" className='text-cyan-700'>Hanzala Ali</p>
        </div>
      </div>
    </div>
    </div>
  );
} 

export default Hero
