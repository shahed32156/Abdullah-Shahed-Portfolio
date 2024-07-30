import React, { useState } from 'react'

const About = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <>
    
    <div class="mt-20">

            <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">Let Me Introduce Myself</h1>

    </div>

    <div className='mt-10 mx-5 md:mx-8 xl:mx-24 flex flex-col gap-5 md:flex-row justify-between items-center'>

       <div className='flex flex-col gap-4'>

                <p className='text-white text-[20px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'>
          
          My name is Abdullah Shahed from Bangladesh. I have completed my graduation at Green university of Bangladesh with BSc in CSE. I am passionate Web Developer with experience in building modern and responsive websites. I specialize in Front-end development as well as Back-end development. I have also Web Designer (UI/UX Designer). I have developed 20+ projects. I am a punctual, dedicated on my work, Obey rule, Enthusiastic , Career minded and open minded, capable of solving comprehensive problems, talkative and having good communication skills.
          {

            toggle && <span> To be associated with an organization which provides challenging work environmental and proving my excellence at every step is my long term career goal. Highly efficient and passionate for learning new concept, ideas, techniques. To reach the heights in my career with proven expertise.</span>
          
          }  

          </p>

          <button onClick={() => setToggle(!toggle)} className="bg-[#bc2bcc]  text-white font-[Poppins] duration-500 w-[110px] h-[40px] shadow-lg hover:shadow-[#bc2bcc] rounded">
            {
              toggle ? "Read Less" : "Read More"
            }
          </button>


       </div>

       <div>

          <img className='h-[200px] w-[300px] sm:h-[280px] sm:w-[380px] md:h-[250px] md:w-[350px] lg:h-[260px] lg:w-[360px] xl:h-[320px] xl:w-[420px]' src="./Images/about.png" alt="" />

       </div>

    </div> 

    <div className='mt-8 flex flex-col justify-center items-center gap-2'>

       <h1 className='text-[28px] text-white font-semibold'>Find me on</h1>
       <p className='text-white'>Feel free to contact with me!</p>

    </div>

    <div class="pt-8 flex gap-3 sm:gap-4 md:gap-8 items-center justify-center">

        <a href="https://www.facebook.com/profile.php?id=100094014247740&mibextid=ZbWKwL" target="_blank"><i class="fa-brands fa-facebook text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
        <a href="https://instagram.com/abdullah__shahed?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank"><i class="fa-brands fa-instagram text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
        <a href="https://github.com/shahed32156" target="_blank"><i class="fa-brands fa-github text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
        <a href="https://linkedin.com/in/abdullahshahed24/" target="_blank"><i class="fa-brands fa-linkedin text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>    
        <a href="mailto:shahed32156@gmail.com" target='_blank'><i class="fa-sharp fa-solid fa-envelope text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
        <a href="https://wa.me/8801741987566?text=Hello%20there!%20I%20would%20like%20to%20contact%20you." target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-whatsapp text-[20px] bg-white rounded-full h-[40px] w-[40px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
    </div>  
    </>
  )
}

export default About
