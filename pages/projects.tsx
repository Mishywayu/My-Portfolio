/* eslint-disable @next/next/no-img-element */
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="project-title">PROJECTS</h1>

      {/* PROJECT ITEM -1 (MY PORTFOLIO) */}
      <div className="project-container">
        <div className="project-holder">
          <div className="project-left portfolio"></div>
          <div className="project-right">
            <h1>My Portfolio</h1>
            <p>
              This project has been developed using React.js and is currently
              live on Netlify. Throughout the process of building this
              portfolio, I have gained valuable insights into responsive design,
              fundamental web design principles, and the process of hosting
              applications with Netlify.
            </p>
            <div className="project-btn">
              <a
                href="https://github.com/Mishywayu/My-Portfolio"
                className="code-btn"
              >
                Code
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PROJECT ITEM - 2 (MAJIWE VISTA ACADEMY WEBSITE) */}
      <div className="project-container">
        <div className="project-holder">
          <div className="project-left majiwe"></div>
          <div className="project-right">
            <h1>Majiwe Vista Academy</h1>
            <p>
              This project utilized React.js and vanilla CSS, and it&rsquo;s now
              live on Netlify. During its development, I acquired valuable
              insights into responsive design, essential web design principles,
              and the deployment process on Netlify.
            </p>
            <div className="project-btn">
              <a
                href="https://github.com/Mishywayu/Majiwe-Vista-Academy"
                className="code-btn"
              >
                Code
              </a>
              <a
                href="https://majiwe-vista-academy.netlify.app/"
                className="live-btn"
              >
                Live
              </a>
              <a
                href="https://www.figma.com/file/BHROxIwf2TurF1LUCKzUD9/Majiwe-Vista-Academy?type=design&node-id=0%3A1&mode=dev&t=tLAChe1Z9EdtT4IA-1"
                className="design-btn"
              >
                Design
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
