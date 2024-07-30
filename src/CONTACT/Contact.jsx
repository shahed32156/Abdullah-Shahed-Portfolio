import React, { useState, useRef } from 'react'

import emailjs from '@emailjs/browser'
import Swal from'sweetalert2';

const Contact = () => {

const form = useRef();

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [msg, setMsg] = useState("");


const handleName = (e) => {

    const value = e.target.value;
    const regex = /^[a-zA-Z\s]*$/;

    if (regex.test(value)) {
      setName(value);
    } else {
      Swal.fire({
        title: "Error",
        text: "Invalid name",
        icon: "error"
      });
    }

    console.log(value);

}

const handleEmail = (e) => {

    setEmail(e.target.value);

}

const handleMsg = (e) => {

    setMsg(e.target.value);

}

const handleSubmit = (e) => {
    e.preventDefault();
    
    if (name.length <= 3) {
        Swal.fire({
            title: "Error",
            text: "Name must be more than 3 characters",
            icon: "error"
        });
        return;
    }

    Swal.fire({
        title: "Success",
        text: "Successfully sent",
        icon: "success"
    });

    emailjs.sendForm('service_rtixv6y', 'template_qa4ablj', form.current, {
        publicKey: 'wG2TB6JzfeU6u3ZPq',
    })
    .then(
        () => {
            console.log('SUCCESS!');
        },
        (error) => {
            console.log('FAILED...', error.text);
        }
    );
}

const handleReset = () => {
    setName("");
    setEmail("");
    setMsg(""); 
}

  return (
    
      <>
      
      <div class="mt-20">

            <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">Contact Me</h1>

      </div>

      <div>

            <form ref={form} onSubmit={handleSubmit} action="" className='text-white mt-10'>

 
                  <div className='mx-3 sm:mx-[120px] md:mx-[150px] lg:mx-[220px] xl:mx-[280px] 2xl:mx-[300px] flex flex-col justify-center gap-2'>

                        <div className=''>
                            <label className='text-[18px] md:text-[20px]' htmlFor="">Name <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                            <input className='h-[50px] text-black pl-2 shadow-md focus:shadow-[0_0.144em_1.000em_#bb67bb] 
                            focus:outline-none w-full bg-white duration-500 border-[1px] text-[18px] rounded' placeholder='Enter your name' 
                            type="text" name="name" id="" onChange={handleName} value={name} />
                        
                        </div>

                  </div>

                  <div className='mx-3 mt-4 sm:mx-[120px] md:mx-[150px] lg:mx-[220px] xl:mx-[280px] 2xl:mx-[300px] flex flex-col justify-center gap-2'>

                        <div className=''>
                            <label className='text-[18px] md:text-[20px]' htmlFor="">Email <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                            <input className='h-[50px] text-black pl-2 shadow-md focus:shadow-[0_0.144em_1.000em_#bb67bb] 
                            focus:outline-none w-full bg-white duration-500 border-[1px] text-[18px] rounded' placeholder='Enter your email'
                            type="email" name="email" id="" onChange={handleEmail} value={email} />
                        
                        </div>

                  </div>

                  <div className='mx-3 mt-4 sm:mx-[120px] md:mx-[150px] lg:mx-[220px] xl:mx-[280px] 2xl:mx-[300px] flex flex-col justify-center gap-2'>

                        <div className=''>
                            <label className='text-[18px] md:text-[20px]' htmlFor="">Message <span className='text-[red]'>*</span></label>
                        </div>
                        
                        <div>

                             
                            <textarea className='h-[130px] text-black pl-2 shadow-md focus:shadow-[0_0.144em_1.000em_#bb67bb] 
                            focus:outline-none w-full bg-white duration-500 border-[1px] text-[18px] pt-2 rounded' placeholder='Type your message' 
                            type="text" name="message" id="" onChange={handleMsg} value={msg}> </textarea>
                        
                        </div>

                  </div>

                  <div className='flex gap-4 justify-center items-center mt-6'>

                        <button className="bg-[#8f049e]  text-white font-[Poppins] duration-500 w-[80px] h-[40px] shadow-lg hover:shadow-[#bc2bcc] rounded">Submit</button>
                        <p className="bg-[#8f049e] flex justify-center items-center  text-white font-[Poppins] duration-500 w-[80px] h-[40px] cursor-pointer shadow-lg hover:shadow-[#bc2bcc] rounded" onClick={handleReset}>Reset</p>

                  </div>

            </form>

      </div>
      
      </>

  )
}

export default Contact
