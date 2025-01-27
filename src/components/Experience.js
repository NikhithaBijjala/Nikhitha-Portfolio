import React, { useState } from "react";
import Projects from "./Projects";

// Modal Component
const Modal = ({ isOpen, onClose, experience }) => {
  if (!isOpen) return null; // Don't render if not open
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{experience.title}</h2>
        <h3>{experience.company}</h3>
        <h4>{experience.duration}</h4>
        <p>{experience.details}</p>
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function Experience() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExperience(null);
  };

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Site Service Software, Remote",
      duration: "September 2024 - December 2024",
      details:
        "As a Full Stack Developer intern, I worked with React for the frontend and Spring Boot for the backend. I designed and implemented RESTful APIs and helped improve the performance and efficiency of the application.",
    },
    {
      title: "Web Developer",
      company: "University At Albany, Albany",
      duration: "August 2023 - December 2024",
      details:
        "As a Web Developer, I contributed to maintaining and updating web applications, focusing on the frontend using HTML, CSS, JavaScript, and React. I collaborated with teams to implement new features and enhancements.",
    },
    {
      title: "Java Full Stack Developer",
      company: "Techigai, India",
      duration: "September 2021 - December 2022",
      details:
        "Worked as a Java Full Stack Developer, using Spring Boot for backend services and Angular for the frontend. I focused on developing REST APIs and integrating them with the user interface for seamless communication.",
    },
    {
      title: "Mobile Application Developer, Intern",
      company: "Creatist, India",
      duration: "October 2020 - November 2021",
      details:
        "During my internship at Creatist, I developed mobile applications using React Native. I worked on various projects, focusing on UI/UX improvements and app performance enhancements.",
    },
  ];

  return (
    <div className="project">
      <div className="container">
        <div className="heading-ex">
          <div>
        <h1 className="sub-title">
          Work <span>Experience</span>
        </h1>
        </div>
        </div>
        <div className="prj-list2">
          {experiences.map((experience, index) => (
            <div key={index} className="exCard">
              <i className="bx bx-cube" style={{ color: "#00eeff" }}></i>
              <div className="expdes">
                <div>
                  <h2>{experience.title}</h2>
                  <h3>{experience.company}</h3>
                </div>
                <div>
                  <h3>{experience.duration}</h3>
                  <button
                    onClick={() => openModal(experience)}
                    className="read-more-btn"
                  >
                    Read More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Projects></Projects>
      </div>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        experience={selectedExperience}
      />
    </div>
  );
}

export default Experience;
