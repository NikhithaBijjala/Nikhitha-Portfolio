import React from "react";
import WhatsApp from "../img/araslot-whatsapp.gif"

function Projects() {
  return (
    <section id="Projects">
      <div id="portfolio" className="services">
        <div className="main-text" id="serv">
          <h2>
            My <span>Projects</span>
          </h2>

          <div className="projects-sec">
            <div className="card">
              <h3>What's app clone</h3>
              {/* <img
                src={WhatsApp}
                alt="WhatsApp Clone Demo"
                style={{
                  // width: "30%",
                  maxWidth: "100px",
                  borderRadius: "10px",
                }}
              /> */}
              <p>
                Designed and implemented a user-friendly interface reminiscent
                of WhatsApp, including functionalities such as real-time
                peer-to-peer messaging and profile image uploads. Utilized Redux
                and various libraries to enhance state management, resulting in
                an efficient and captivating user experience.
              </p>
              <a
                href="https://github.com/NikhithaBijjala/Whats-App-Clone"
                className="pro-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Code
              </a>
            </div>
            <div className="card">
              <h3>Invengory Managemnt</h3>
              <p>
                The project incorporates all CRUD (Create, Read, Update, Delete)
                operations using MongoDB for efficient data management on the
                backend powered by Node.js. React Router is employed to
                facilitate seamless navigation between different pages,
                enhancing the overall user experience. To elevate the visual
                appeal and user interface, Bootstrap and other relevant
                libraries are utilized.
              </p>
              <a
                href="https://github.com/NikhithaBijjala/Inventory-Management"
                className="pro-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Code
              </a>
            </div>
            <div className="card">
              <h3>File Flow Manager</h3>
              <p>
                The project incorporated three core components: a client, a
                server, and a cache. The system employed a cache to optimize
                file retrieval, first checking locally for requested files. If
                the file was unavailable in the cache, it would be retrieved
                from the server. For file uploads, the system efficiently stored
                files directly on the server, bypassing the cache.
              </p>
              <a
                href="https://github.com/NikhithaBijjala/File-Flow-Manager"
                className="pro-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Code
              </a>
            </div>
            <div className="card">
              <h3>My Portfolio</h3>
              <p>
                Welcome to my dynamic portfolio, crafted with HTML, CSS, and
                JavaScript. This page serves as your gateway to explore my
                projects, work experience, education, and contact details. With
                CSS Flexbox ensuring seamless responsiveness and captivating
                keyframe animations, navigate through a wealth of information
                about my professional journey and expertise.
              </p>
              <a
                href="https://github.com/NikhithaBijjala/Nikhitha-Portfolio"
                className="pro-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
