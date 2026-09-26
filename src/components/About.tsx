import "@/styles/sections/about.scss"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about_container">
        <div className="about_heading">
          <span className="about_label">
            ABOUT ME
          </span>
          <h1 className="about_title">
            Building digital experiences
            <span> with clean code & creative ideas.</span>
          </h1>
        </div>
        <div className="about_content">
          <div className="about_text">
            <p>
              I'm Aswin Joseraj, a passionate Frontend Developer
              focused on creating modern, responsive, and
              user-friendly web applications.
            </p>

            <p>
              I enjoy turning ideas into meaningful digital
              experiences using modern frontend technologies.
              I continuously learn new technologies and improve
              my development skills.
            </p>

            <a href="" className="about_button">
              Download CV
            </a>
          </div>

          <div className="about_card">
            <span className="about_card_label">
              MY EXPERTISE
            </span>

            <h2>Frontend Developer</h2>

            <div className="about_skills">
              <span>React</span>
              <span>TypeScript</span>
              <span>SCSS</span>
              <span>Responsive Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;