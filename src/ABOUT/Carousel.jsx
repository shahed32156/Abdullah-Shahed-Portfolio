import React, { useEffect, useState } from 'react'

const Carousel = () => {

  const skills = ["Frontend Developer", "Backend Developer", "React.js Developer", "Next.js Developer", "PHP Developer", "Web Designer"];
  const [displayedText, setDisplayedText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const currentSkill = skills[skillIndex];
      if (isDeleting) {
        setDisplayedText(currentSkill.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(75);
      } else {
        setDisplayedText(currentSkill.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(150);
      }

      if (!isDeleting && charIndex === currentSkill.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 2) {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }
    };

    const typingTimeout = setTimeout(handleType, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, skillIndex, typingSpeed, skills]);

  const maxLength = Math.max(...skills.map(skill => skill.length));
  return (
    <>
    
    <div className="pt-[120px]">

        <img src="./Images/Shahed.jpg" alt="" className="h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] mx-auto img1 rounded-full" />
    
    </div>

    <div className="mt-10 flex justify-center items-center gap-1">

        <h1 className="text-white text-2xl sm:text-3xl font-semibold px-2">Hi There !</h1>
        <img className='hand h-[35px] w-[35px] sm:h-[40px] sm:w-[40px] rotate-12' src="./Images/hi.png" alt="" />
    
    </div>

    <div className='mt-5'>

         <h1 className="text-white text-[28px] sm:text-3xl md:text-4xl text-center font-semibold px-2">I am Abdullah Shahed</h1>          

    </div>

    <div className='text-white font-semibold text-[20px] text-center mt-4'>
      {displayedText}
    </div>

    <div class="mt-8 flex items-center justify-center">

        <a href="mailto:shahed32156@gmail.com" target="_blank"><button class="text-white font-semibold text-center hover:bg-[#bc2bcc] hover:transition hover:duration-500 border-[1px] border-[#bc2bcc] py-2 px-4 rounded-md">Hire me</button></a>
    
    </div>

    
    
    </>
  )
}

export default Carousel
