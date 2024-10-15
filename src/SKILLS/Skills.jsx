import React from 'react'

import Data from './data.json'
import Skills_data_set from './Skills_data_set';

const Skills = () => {

  let items = [];

    items = Data.map((item,index) => <Skills_data_set key={index} img={item.img} title={item.title} />);


  return (
    
    <>

<div class="mt-20">

        <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">Professional Skillset</h1>

</div>

<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6 lg:gap-8 mt-10 mx-3 sm:mx-3 md:mx-14 lg:mx-10 xl:mx-24 2xl:mx-24'>
          
          {items}

</div>

    </>
  
)
}

export default Skills
