import React, { useEffect, useState } from 'react';

import SyncLoader from "react-spinners/SyncLoader";
import Navbar from './NAVBAR/Navbar';
import RevealOnScroll from './HOOK/RevealOnScroll';
import Carousel from './CAROUSEL/Carousel';
import About from './ABOUT/About';
import Skills from './SKILLS/Skills';
import Projects from './PROJECTS/Projects';
import Experience from './EXPERIENCE/Experience';
import Cv from './CV/Cv';
import Contact from './CONTACT/Contact';
import Footer from './FOOTER/Footer';

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className='flex justify-center items-center h-[100vh] bg-black'>
          <SyncLoader color="#d84fe8" size="12px" />
        </div>
      ) : (
        <div>
          <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            <i className="fa-sharp text-[17px] fa-solid fa-arrow-up-from-bracket"></i>
          </div>

          <Navbar />

          <RevealOnScroll>
            <Carousel />
          </RevealOnScroll>

          <h1 id='about'></h1>
          <RevealOnScroll>
            <About />
          </RevealOnScroll>

          <h1 id='experience'></h1>
          <RevealOnScroll>
            <Experience />
          </RevealOnScroll>

          <h1 id='skills'></h1>
          <RevealOnScroll>
            <Skills />
          </RevealOnScroll>

          <h1 id='projects'></h1>
          <RevealOnScroll>
            <Projects />
          </RevealOnScroll>

          <h1 id='cv'></h1>
          <RevealOnScroll>
            <Cv />
          </RevealOnScroll>

          <h1 id='contact'></h1>
          <RevealOnScroll>
            <Contact />
          </RevealOnScroll>

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
