/* eslint-disable @next/next/no-img-element */
import React from "react";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills">
        <h1 className="skills-title">
          Tech <span className="special-text">Skills</span>
        </h1>
        <div className="parent">
          <div className="div1"></div>
          <div className="div2"></div>
          <div className="div3"></div>
          <div className="div4"></div>
          <div className="div5"></div>
          <div className="div6"></div>
          <div className="div7"></div>
          <div className="div8"></div>
          <div className="div9"></div>
          <div className="div10"></div>
          <div className="div11"></div>
          <div className="div12"></div>
          <div className="div13"></div>
          <div className="div14"></div>
          <div className="div15"></div>
          <div className="div16"></div>
          <div className="div17"></div>
          <div className="div18"></div>
        </div>
      </div>

      {/* ----------for small screen size */}
      <div className="skills-section">
        <h1 className="skills-title">
          Tech <span className="special-text">Skills</span>
        </h1>
        <div className="grid-container_skills">
          <div className="grid-item">
            <h1>Frontend</h1>
            <hr />
            <div className="skills-icons">
              <div className="icon-holder">
                <img src="html.png" alt="HTML" className="icon" />
                {/* <h4 className="icon-label">HTML5</h4> */}
              </div>
              <div className="icon-holder">
                <img src="css.png" alt="CSS3" className="icon" />
                {/* <h4 className="icon-label">CSS3</h4> */}
              </div>
              <div className="icon-holder">
                <img src="javascript.png" alt="JavaScript" className="icon" />
                {/* <h4 className="icon-label">JavaScript</h4> */}
              </div>
              <div className="icon-holder">
                <img src="react.png" alt="react" className="icon" />
                {/* <h4 className="icon-label">React</h4> */}
              </div>
              <div className="icon-holder">
                <img src="next.png" alt="next" className="icon" />
                {/* <h4 className="icon-label">NextJs</h4> */}
              </div>
              <div className="icon-holder">
                <img src="MUI.png" alt="MUI" className="icon" />
                {/* <h4 className="icon-label">Material UI</h4> */}
              </div>
              <div className="icon-holder">
                <img src="tailwind.png" alt="tailwind" className="icon" />
                {/* <h4 className="icon-label">Tailwind CSS</h4> */}
              </div>
              <div className="icon-holder">
                <img src="bootstrap.png" alt="bootstrap" className="icon" />
                {/* <h4 className="icon-label">Bootstrap</h4> */}
              </div>
              <div className="icon-holder">
                <img src="reactB.png" alt="reactB" className="icon" />
                {/* <h4 className="icon-label">React Bootstrap</h4> */}
              </div>
            </div>
          </div>
          <div className="grid-item">
            <h1>Backend</h1>
            <hr />
            <div className="skills-icons">
              <div className="icon-holder">
                <img src="node-js.png" alt="node" className="icon" />
                {/* <h4 className="icon-label">Node</h4> */}
              </div>
              <div className="icon-holder">
                <img src="/express.png" alt="express" className="icon" />
                {/* <h4 className="icon-label">Express</h4> */}
              </div>
            </div>
          </div>
          <div className="grid-item">
            <h1>Database</h1>
            <hr />
            <div className="skills-icons">
              <div className="icon-holder">
                <img src="mysql.png" alt="mysql" className="icon" />
                {/* <h4 className="icon-label">MySQL</h4> */}
              </div>
              <div className="icon-holder">
                <img src="postgre.png" alt="postgress" className="icon" />
                {/* <h4 className="icon-label">Postgress</h4> */}
              </div>
              <div className="icon-holder">
                <img src="mongo.png" alt="mongo" className="icon" />
                {/* <h4 className="icon-label">MongoDB</h4> */}
              </div>
            </div>
          </div>
          <div className="grid-item">
            <h1>Hosting Platforms</h1>
            <hr />
            <div className="skills-icons">
              <div className="icon-holder">
                <img src="heroku.png" alt="heroku" className="icon" />
                {/* <h4 className="icon-label">Heroku</h4> */}
              </div>
              <div className="icon-holder">
                <img src="github-pages.png" alt="pages" className="icon" />
                {/* <h4 className="icon-label">GitHub Pages</h4> */}
              </div>
              <div className="icon-holder">
                <img src="netlify.png" alt="netlify" className="icon" />
                {/* <h4 className="icon-label">Netlify</h4> */}
              </div>
            </div>
          </div>
          <div className="grid-item">
            <h1>Version Control</h1>
            <hr />
            <div className="skills-icons">
              <div className="icon-holder">
                <img src="git.png" alt="git" className="icon" />
                {/* <h4 className="icon-label">Git</h4> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
