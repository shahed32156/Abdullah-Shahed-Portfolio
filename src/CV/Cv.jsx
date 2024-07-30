import React from 'react'
import { FaDownload } from 'react-icons/fa'
const Cv = () => {
  return (
    <>
    
    <div className='text-center mt-20'>
          <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">My CV</h1>
    </div>
    
    <div className='mt-10 mx-3 flex flex-col gap-4 justify-center items-center'>

        <div>
        <img className='mx-auto h-[400px] w-[300px]' src="./Images/cv.png" alt="" />
        </div>
        <div>
        <a href="./Images/Abdullah Shahed (CV).pdf" download="Abdullah Shahed (CV)" target="_blank"><button class="bg-[#bc2bcc] flex justify-center items-center gap-2 text-white font-[Poppins] duration-500 w-[150px] h-[40px] shadow-lg hover:shadow-[#bc2bcc] rounded"><FaDownload className='text-white text-[16px]' /> Download CV</button></a>
        </div>
    </div>

    </>
  )
}

export default Cv
