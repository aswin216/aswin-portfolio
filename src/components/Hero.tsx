"use client";

import { smoothScroll } from "@/utils/smoothscroll";
import "../styles/sections/hero.scss"

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero_container">
        <div className="hero_content">
          <span className="hero_greetings">
            HELLO, I'M ASWIN
          </span>

          <h1 className="hero_title">
            Frontend Developer <br />
            Building Modern & Interactive <br />
            Web Experiences.
          </h1>

          <p className="hero_description">
            I'm a passionate Frontend Developer who loves turning ideas
            into clean, responsive, and user-friendly web applications
            using modern technologies.
          </p>
          <div className="hero_actions">
            <a href="#projects" className="hero_primary" onClick={() => smoothScroll("projects")}>
              View My Work
            </a>
            <a href="#contact" className="hero_secondary" onClick={() => smoothScroll("contact")}>
              Let's Connect
            </a>
          </div>
        </div>
        <div className="hero_visual">
          <div className="hero_card">
            <span>Frontend Developer</span>
            <strong>React • TypeScript • SCSS</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;