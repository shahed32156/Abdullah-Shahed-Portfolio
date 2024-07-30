import React, { useState } from 'react';

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const projects = [
    { id: 1, title: 'Travel Website', image: './Images/p1.png', github: "https://github.com/shahed32156/travel-website" },
    { id: 2, title: 'Phone Shop Website', image: './Images/p2.png', github: "https://github.com/shahed32156/phone-shop" },
    { id: 3, title: 'Flight Booking Website', image: './Images/p3.png', github: "https://github.com/shahed32156/flight-booking-website" },
    { id: 4, title: 'E-commerce Website', image: './Images/p4.png', github: "https://github.com/shahed32156/ecommerce-website" },
    { id: 5, title: 'Google Classroom Website', image: './Images/p5.png', github: "https://github.com/shahed32156/google_classroom_website" },
    { id: 6, title: 'Food Delivery Website', image: './Images/p6.png', github: "https://github.com/shahed32156/PROMIXCO-Task-2-Home-page-" },
    { id: 7, title: 'Bongo Website', image: './Images/p7.png', github: "https://github.com/shahed32156/Bongo-website" },
    { id: 8, title: 'Grocery Shop Website', image: './Images/p8.png', github: "https://github.com/shahed32156/Online-grocery-shop-home-page" },
    { id: 9, title: 'Music Website', image: './Images/p9.png', github: "https://github.com/shahed32156/Music-website" }
  ];

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProjects = projects.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="holder mt-20">
        <div className="container">
          <div className='text-center'>
          <h1 class="text-3xl text-center text-[#bc2bcc] font-mono font-semibold">Some of My Projects</h1>
          </div>

          <div className="pagination mt-10 flex justify-center gap-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handleClick(index + 1)}
                className={`py-2 px-4 border-2 border-[#e193e8ceh] font-bold rounded-full ${currentPage === index + 1 ? 'bg-[#e193e8ceh] text-white' : 'bg-white text-purple-700'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="scroll-list grid grid-cols-1 mt-10 gap-10 md:gap-20 sm:grid-cols-2 md:grid-cols-3">
            {selectedProjects.map((project) => (
              <div
                key={project.id}
                style={{ backgroundImage: `url(${project.image})` }}
                className="scroll-item"
              >
                <div className="icons opacity-85">
                  <button type="button">
                    <h1 className='text-[16px] font-extrabold'>{project.title}</h1>
                    
                  </button>
                  
                  <a href={project.github} target="_blank"><i class="fa-brands fa-github text-[20px] bg-white rounded-full h-[25px] w-[25px] flex justify-center items-center text-[#bc2bcc] shadow-lg hover:shadow-[#bc2bcc] duration-500"></i></a>
                
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Projects;
