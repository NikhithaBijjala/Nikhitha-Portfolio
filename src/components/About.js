import React from "react";
import { useState } from "react";
import Profile from "../img/PhotoNikki.jpg";
import Testimonials from "./Testimonals";
import TechnicalSkills from "./TechnicalSkills.js";
import { FaAngleDown } from "react-icons/fa";
import ExpandedSkills from "./ExpandedSkills.js";

function About() {
  const [open, setOpen] = useState(false);
  const exampleTheme = {
    dark: [
      "rgb(234, 240, 240)", // Base color (#0ef)
      "rgba(108, 245, 245, 0.8)", // Lightest shade
      "rgba(14, 239, 239, 0.93)", // Lighter shade
      "rgba(14, 239, 239, 0.6)", // Medium shade
      "rgba(14, 239, 239, 0.8)", // Darker shade
    ],
    light: [
      "rgb(234, 240, 240)", // Base color (#0ef)
      "rgba(14, 239, 239, 0.2)", // Lightest shade
      "rgba(14, 239, 239, 0.4)", // Lighter shade
      "rgba(14, 239, 239, 0.6)", // Medium shade
      "rgba(14, 239, 239, 0.93)", // Darker shade
    ],
  };

  return (
    <div className="section.light-grey">
      <div id="serv">
        <div className="main-text">
          <h2>
            About <span>Me</span>
          </h2>
          <div className="about section.light-grey" id="About">
            <div className="about-img">
              <img src={Profile} className="abt-res" alt="Nikhitha" />
            </div>
            <div className="about-text">
              <p className="white">
                I am a recent graduate in Computer Science with 3 years of
                industry experience. I am passionate about{" "}
                <span>problem-solving</span> and
                <span> developing efficient solutions.</span> To hone my skills,
                I actively participate in competitive programming on platforms
                like <span>Leetcode. </span>I am currently seeking a full-time
                opportunity where I can enhance my expertise and apply my
                knowledge to make a meaningful impact. Throughout my previous
                roles, I have consistently{" "}
                <span>demonstrated exceptional performance</span>, earning
                accolades such as <span>"Best Employee" </span>
                awards and receiving continuous recognition for my ability to
                learn quickly and <span>communicate effectively</span>. If you
                have any relevant contacts or opportunities, I would greatly
                appreciate your support.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
        <div >
          {!open ? (
            <div >
              <TechnicalSkills />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="skills" onClick={() => setOpen(!open)}>
          <FaAngleDown />
          <p>{!open ? "View My TechnicalSkills" : "Close Expanded View"}</p>
        </div>
        <div className="aboutskills">{open ? <ExpandedSkills /> : ""}</div>

        <div className=" about-text leetcode">
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

export default About;
