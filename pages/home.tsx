import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <h1>
          Hello, My name is{" "}
          <span className="special-text home-special">Michelle Wayua</span> ,{" "}
          <br />I am a Front-End Developer.
        </h1>
        <div className="box">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <button className="home-btn">
          <a href="#projects">View my work</a>
        </button>
      </div>
    </section>
  );
}
