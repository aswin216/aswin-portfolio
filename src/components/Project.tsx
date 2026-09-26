import { Projects } from "@/data/data"
import "@/styles/sections/project.scss"

const Project = () => {
  return (
    <section className="project" id="projects">
      <div className="project_container">
        <div className="project_heading">
          <span className="project_label">MY PROJECTS</span>
          <h1 className="project_title">
            Some things I've
            <span> built.</span>
          </h1>
          <p className="project_description">
            Here are some of the projects I've worked on using
            modern frontend technologies and responsive design.
          </p>
        </div>

        <div className="project_grid">
          {Projects.map((project) => (
            <article className="project_card" key={project.number}>
              <div className="project_card_top">
                <span className="project_number">{project.number}</span>
                <a
                  href={project.link}
                  className="project_link"
                  aria-label={`View ${project.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  &#8599;
                </a>
              </div>

              <span className="project_category">{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>

              <div className="project_technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project;