import React from 'react'

const Experience = () => {
  return (
    <>
    
    <div className='text-center mt-20'>
          <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">Work Experience</h1>
    </div>

    <div className='mt-10 mx-5 md:mx-8 lg:mx-14 xl:mx-32 2xl:mx-44 flex flex-col gap-5 md:flex-row justify-between items-center'>

            <div className='flex gap-5 flex-col'>

                    <div className='mt-5'>
                    
                        <img className='h-[50px] w-[60px]' src="./Images/nexttech.jpg" alt="" />

                    </div>
                    

                    <div className='flex flex-col gap-2'>

                        <p className='text-white text-[20px] font-bold text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'> Jr. Web Developer</p>
                        <p className='text-white text-[17px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'> NextTech Limited Bangladesh</p>
                        <p className='text-white text-[17px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'>Nov 2023 - Feb 2024</p>
                        
                        <div className='flex items-center gap-2 text-white text-[14px] font-semibold mt-2'>
                     
                        <p className='bg-[#049dc8] py-1 px-4 rounded'>React.js</p>
                        <p className='bg-[tomato] py-1 px-4 rounded'>Tailwind</p>
                        <p className='bg-[#ba0985] py-1 px-4 rounded'>PHP</p>

                        </div>

                    </div>

                    <div className='text-white text-[20px] text-justify md:w-[400px] lg:w-[480px] xl:w-[700px]'>

                      <p>I work as a web developer, specializing in creating responsive websites that provide exceptional user experiences. I utilize React.js, Tailwind CSS, and PHP to develop functional and visually appealing web applications. My focus is on ensuring that the websites I build meet the specific needs and expectations of my clients.</p>
                    
                    </div>

                    


            </div>

<div>

   <img className='h-[200px] w-[300px] sm:h-[280px] sm:w-[380px] md:h-[250px] md:w-[350px] lg:h-[260px] lg:w-[360px] xl:h-[320px] xl:w-[420px]' src="./Images/experience.png" alt="" />

</div>

</div>
    
    </>
  )
}

export default Experience
