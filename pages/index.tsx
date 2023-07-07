import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Resume from "./resume";
import Contact from "./contact";
import Footer from "./footer";
import { useState } from "react";

export default function Navbar() {
  //Page leads to it's respective section
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth"});
    }
  };

//responsive navbar functionality
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div>
      <nav className="topnav" id="myTopnav">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
          Home
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#resume">Resume</a>
        <a href="#contact">Contact</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </a>
      </nav>

      <main>
        <Home />
        <About />
        {/* <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact /> */}
      </main>

      {/* <footer>
        <Footer />
      </footer> */}
    </div>
  );
}
