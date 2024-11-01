import React from 'react'

import { AiOutlineMail } from "react-icons/ai";

import { BsTelephone } from "react-icons/bs";

import { CiLinkedin } from "react-icons/ci";

import { VscGithub } from "react-icons/vsc";


const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl text-cyan-700' data-aos="zoom-in-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="zoom-in-up">
                Drop me a line, give me a call, or send me a message by submitting the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <AiOutlineMail size={30}/> <a href="/">xyz@gmail.com</a>
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <BsTelephone  size={30}/> (021) 000-0000
            </div>
            <div className='flex gap-3 items-center'  data-aos="zoom-in-up" > 
                <CiLinkedin size={30}/> <a href="/">Linkedin</a>
            </div>
            <div  className='flex gap-3 items-center' data-aos="zoom-in-up">
                <VscGithub size={30}/> <a href="/">GitHub</a>
            </div>
        </div>
         <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-cyan-700'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-cyan-700'
                id='email'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea 
                className='bg-black border border-cyan-700'
                id='msg' rows={8}>
                </textarea>
            </div>
            <button className=' bg-cyan-700 p-2 px-6 rounded-md ' data-aos="zoom-in-up">Send</button>
         </div>
      </div>
    </div>
  )
}

export default Contact
