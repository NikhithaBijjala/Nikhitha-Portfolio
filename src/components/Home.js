// Home.js
import React from 'react';
import TypingEffect from './TypingEffect';
import { FaLinkedinIn, FaGithub} from 'react-icons/fa'; // Import TypingEffect Component
import About from './About';
import "./Home.css"


function Home() {
  return (
    <div>
      <div className="home" id="Home">
        <div className="home-content">
          
          <h4>
            Hi, I'm  a graduate student who is passionate in <TypingEffect />
          </h4>

          <div className="home-sci">
            <a
              href="https://www.linkedin.com/in/nikhitha-bijjala-54874618b/"
              target="_blank"
              rel="noopener noreferrer"
            >
               <span className="icon-container">
                <FaLinkedinIn size={20}  />
              </span>
            </a>
            <a
              href="https://github.com/NIkhitha07"
              target="_blank"
              rel="noopener noreferrer"
            >
               <span className="icon-container">
                <FaGithub size={20} />
              </span>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1toc1eLunr7VJnZ46R1kHlWRQCqRP3Vtw/view?usp=sharing"
            className="btn-box"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </div>
       
      </div>
      <About></About>
    </div>
  );
}

export default Home;
