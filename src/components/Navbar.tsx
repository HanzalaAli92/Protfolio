// import React from 'react'
// import { AiOutlineMenu } from "react-icons/ai";
// import Image from 'next/image';

// const Navbar = () => {
//   return (
//     <div className='container pt-8'>
//       <div className='flex justify-between items-center'>
//         <div className='flex gap-3'>
//        <Image src={"/design.png"} alt='logo' width={50} height={50}/>
//           <div className='text-2xl font-medium content-center '>Portfolio</div>
//           </div> 
//           <ul className='gap-10 lg:gap-16 hidden md:flex'>

//             <li className='menuLink'><a href="#hero">Home</a></li>

//             <li className='menuLink'><a href="#about">About</a></li>

//             <li className='menuLink'><a href="#project">Project</a></li>

//             <li className='menuLink'><a href="#skills">Skils</a></li>

//             <li className='menuLink'><a href="#contact">Contact</a></li>
//           </ul>
//           <AiOutlineMenu className='md:hidden' size={30} />
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { FaHome, FaInfo, FaProjectDiagram, FaTools, FaEnvelope } from "react-icons/fa"; // Font Awesome icons
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track navbar visibility

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar visibility
  };

  return (
    <div className='container pt-8 '>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-48 items-center'>
        <div className='flex items-center  gap-3'>
          <Image src={"/design.png"} alt='logo' width={50} height={50}/>
          {/* <div className='text-2xl font-medium'>Portfolio</div> */}
          <div><a href="https://hanzala-responsive.vercel.app/" className='border-2 px-2 py-1 border-[#0e7490] bg-[#0e7490] rounded-full font-semibold'>Resume</a></div>
        </div>
        <AiOutlineMenu className='md:hidden cursor-pointer' size={30} onClick={toggleNavbar} />
      </div>
      <ul className={`gap-10 lg:gap-12 hidden md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row `}>
        <li className='menuLink flex items-center'>
          <FaHome className='mr-2' /> <a href="#hero">Home</a>
        </li>
        <li className='menuLink flex items-center'>
          <FaInfo className='mr-2' /> <a href="#about">About</a>
        </li>
        <li className='menuLink flex items-center'>
          <FaProjectDiagram className='mr-2' /> <a href="#project">Project</a>
        </li>
        <li className='menuLink flex items-center'>
          <FaTools className='mr-2' /> <a href="#skills">Skills</a>
        </li>
        <li className='menuLink flex items-center'>
          <FaEnvelope className='mr-2' /> <a href="#contact">Contact</a>
        </li>
      </ul>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <ul className="flex mt-5 flex-col md:hidden text-white">
          <li className='menuLink flex items-center p-2'>
            <FaHome className='mr-2' /> <a href="#hero">Home</a>
          </li>
          <li className='menuLink flex items-center p-2'>
            <FaInfo className='mr-2' /> <a href="#about">About</a>
          </li>
          <li className='menuLink flex items-center p-2'>
            <FaProjectDiagram className='mr-2' /> <a href="#project">Project</a>
          </li>
          <li className='menuLink flex items-center p-2'>
            <FaTools className='mr-2' /> <a href="#skills">Skills</a>
          </li>
          <li className='menuLink flex items-center p-2'>
            <FaEnvelope className='mr-2' /> <a href="#contact">Contact</a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
