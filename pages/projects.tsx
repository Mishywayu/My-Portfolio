import React from "react";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="project-title">PROJECTS</h1>
      <div className="project-container">
        <div className="project-holder">
          <div className="project-left">
            <img src="/portfolio.PNG" alt="portfolio" />
          </div>
          <div className="project-right">
            <h1>My Portfolio</h1>
            <p>
              This project has been developed using React.js and is currently
              live on Netlify.
              Throughout the process of building this
              portfolio, I have gained valuable insights into responsive design,
              fundamental web design principles, and the process of hosting
              applications with Netlify.
            </p>
            <div className="project-btn">
              <a className="live-btn">See Live</a>
              <a className="code-btn">See Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
