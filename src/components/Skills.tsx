import "@/styles/sections/skills.scss"

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills_container">
        <div className="skills_heading">
          <span className="skills_label">MY SKILLS</span>
          <h1 className="skills_title">
            Technologies I use to
            <span> build better experiences.</span>
          </h1>
          <p className="skills_description">
            I work with modern frontend technologies to create
            responsive, accessible, and user-friendly web applications.
          </p>
        </div>
        <div className="skills_grid">
          <div className="skills_card">
            <span className="skills_number">01</span>
            <h2>Frontend</h2>
            <p>
              Building responsive and interactive user interfaces.
            </p>

            <div className="skills_list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>TypeScript</span>
            </div>
          </div>

          <div className="skills_card">
            <span className="skills_number">02</span>
            <h2>Styling</h2>
            <p>
              Creating clean and responsive designs with modern CSS.
            </p>

            <div className="skills_list">
              <span>SCSS</span>
              <span>Responsive Design</span>
              <span>CSS3</span>
              <span>Material UI</span>
            </div>
          </div>

          <div className="skills_card">
            <span className="skills_number">03</span>
            <h2>Tools</h2>
            <p>
              Tools I use for development and project management.
            </p>

            <div className="skills_list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>REST API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;