"use client";

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <>
      <div className="flex navbar top-0 justify-between py-5 px-3 lg:px-10 fixed w-full z-10">
        <div>
          <h1 className="text-white text-xl font-semibold">𝓐.<span className='text-[#bc2bcc]'>𝓢𝓱𝓪𝓱𝓮𝓭</span></h1>
        </div>
        <div className="text-white flex justify-center items-center gap-8 hidden md:flex">
          <a href='#' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
                 <a href="#"><i class="fa-solid fa-house"></i></a>
                 <a href="#" className="cursor-pointer">Home</a>
            
            
          </a>
          <a href='#about' className='flex items-center gap-1 hover:text-[#bc2bcc] duration-500'>
            
                 <a href="#about"><MdManageAccounts className='text-[20px]' /></a>
                 <a href="#about" className="cursor-pointer">About</a>
            
            
          </a>

          <a href='#experience' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
                 <a href="#experience"><BsFillBriefcaseFill /></a>
                 <a href="#experience" className="cursor-pointer">Experience</a>
            
            
          </a>

          <a href='#skills' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
                 <a href="#skills"><i class="fa-solid fa-crown"></i></a>
                 <a href="#skills" className="cursor-pointer">Skills</a>
            
            
          </a>

          <a href='#projects' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
            <a href="#projects"><i class="fa-duotone fa-solid fa-laptop-code"></i></a>
            <a href="#projects" className="cursor-pointer">Projects</a>
       
       
         </a>
          
         <a href='#cv' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
            <a href="#cv"><i class="fa-solid fa-file"></i></a>
            <a href="#cv" className="cursor-pointer">CV</a>
       
       
         </a>

         <a href='#contact' className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
            <a href="#contact"><i class="fa-solid fa-address-book"></i></a>
            <a href="#contact" className="cursor-pointer">Contact</a>
       
       
         </a>
        
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav}>
            {navOpen ? <FiX className="text-[#bc2bcc] text-2xl" /> : <AiOutlineMenuUnfold className="text-[#bc2bcc] text-2xl" />}
          </button>
        </div>
      </div>
      <div
        className={`fixed top-[70px] bg-[#232121] bg-opacity-50 navbar1 left-0 h-[300px] w-full z-10 text-white flex flex-col items-center justify-center gap-4 px-3 transform ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
         <a href='#' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
            
            <a href="#"><i class="fa-solid fa-house"></i></a>
            <a href="#" className="cursor-pointer">Home</a>
       
       
     </a>
     <a href='#about' onClick={toggleNav} className='flex items-center gap-1 hover:text-[#bc2bcc] duration-500'>
       
            <a href="#about"><MdManageAccounts className='text-[20px]' /></a>
            <a href="#about" className="cursor-pointer">About</a>
       
       
     </a>

     <a href='#experience' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
       
            <a href="#experience"><BsFillBriefcaseFill /></a>
            <a href="#experience" className="cursor-pointer">Experience</a>
       
       
     </a>

     <a href='#skills' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
       
            <a href="#skills"><i class="fa-solid fa-crown"></i></a>
            <a href="#skills" className="cursor-pointer">Skills</a>
       
       
     </a>

     <a href='#projects' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
       
       <a href="#projects"><i class="fa-duotone fa-solid fa-laptop-code"></i></a>
       <a href="#projects" className="cursor-pointer">Projects</a>
  
  
    </a>
     
    <a href='#cv' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
       
       <a href="#cv"><i class="fa-solid fa-file"></i></a>
       <a href="#cv" className="cursor-pointer">CV</a>
  
  
    </a>

    <a href='#contact' onClick={toggleNav} className='flex items-center gap-2 hover:text-[#bc2bcc] duration-500'>
       
       <a href="#contact"><i class="fa-solid fa-address-book"></i></a>
       <a href="#contact" className="cursor-pointer">Contact</a>
  
  
    </a>
      </div>

     
    
    </>
  );
};

export default Navbar;
