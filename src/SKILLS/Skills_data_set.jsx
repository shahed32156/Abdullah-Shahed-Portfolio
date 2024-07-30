
import React from 'react'

const Skills_data_set = (props) => {

const {img, title} = props;

  return (

    <a className='cursor-default'>

            <div className='w-full sm:px-0 sm:h-[152px] sm:w-[230px] pt-2 justify-center shadow-[#bc2bcc] items-center border-[1px] rounded-lg shadow-md md:hover:transition duration-500 md:hover:duration-500 md:hover:scale-110 border-[#e473f0] mx-auto'>
                    
                    

                    <div className=''>
                        <img className='mx-auto h-[100px] w-[100px] rounded-md' src={img} alt="" />
                    </div>
                    <h2 className='text-center pb-3 font-bold text-white text-[18px]'>{title}</h2>
                    

                

            </div>

    </a>

  )
}

export default Skills_data_set

