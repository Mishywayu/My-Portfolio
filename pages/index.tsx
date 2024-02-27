import React from "react";
import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";

export default function Navbar() {
  //Page leads to it's respective section (responsiveness)
  const myFunction = () => {
    const x = document.getElementById("myTopnav");
    if (x && x.className === "topnav") {
      x.className += " responsive";
    } else if (x) {
      x.className = "topnav";
    }
  };

  return (
    <div>
      <nav className="topnav" id="myTopnav">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="https://drive.google.com/file/d/11J20QSnBhZ258Har7KahPDil08FtJZgv/view?usp=drive_link">
          Resume
        </a>
        <a href="#contact">Contact</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
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
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
