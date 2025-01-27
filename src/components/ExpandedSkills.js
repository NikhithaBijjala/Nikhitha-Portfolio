"use client";
import React from "react";
import { motion } from "framer-motion";

const ExpandedSkills = () => {
  const skills = {
    FrontendDevelopment: [
      {
        name: "HTML",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        link: "https://www.w3.org/Style/CSS/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        link: "https://www.javascript.com/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        link: "https://www.typescriptlang.org/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Angular",
        link: "https://angular.io/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "React",
        link: "https://react.dev/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      
    ],
    backendDevelopment: [
      {
        name: "Python",
        link: "https://www.python.org/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        link: "https://www.java.com/en/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Next.js",
        link: "https://nextjs.org/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Node.js",
        link: "https://nodejs.org/en/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        link: "https://expressjs.com/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Spring Boot",
        link: "https://spring.io/projects/spring-boot",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "Git",
        link: "https://git-scm.com/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
    ],
    TestDevelopment: [
      {
        name: "Jest",
        link: "https://jestjs.io/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
      },
      {
        name: "JUnit",
        link: "https://junit.org/junit5/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", // Use Java icon for JUnit
      },
      {
        name: "MySQL",
        link: "https://www.mysql.com/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "MongoDB",
        link: "https://www.mongodb.com/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        link: "https://www.postgresql.org/",
        img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
  };

  const renderSkills = (category) => {
    return skills[category].map((skill, index) => (
      <motion.a
        key={index}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="skillsDiv2">
          <img
            src={skill.img}
            alt={skill.name}
            title={skill.name}
            className="icon2"
          />
          <p>{skill.name}</p>
        </div>
      </motion.a>
    ));
  };

  return (
    <div>
      <motion.div
        className="grid grid-cols-8 sm:grid-cols-12 lg:grid-cols-14 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div>
          <h3>Frontend Technologies</h3>
          <div className="skillsDiv2">{renderSkills("FrontendDevelopment")}</div>
        </div>
        <div>
          <h3>Backend Development</h3>
          <div className="skillsDiv2">{renderSkills("backendDevelopment")}</div>
        </div>
        <div>
          <h3>Test Developement and Databases</h3>
          <div className="skillsDiv2">{renderSkills("TestDevelopment")}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpandedSkills;
