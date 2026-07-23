import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";
import projects from "../data/projects";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__content container">
          <div className="hero__copy">
            <p className="hero__eyebrow">Full-Stack Software Engineer</p>

            <h1>
              Building practical software that solves
              <span> real problems.</span>
            </h1>

            <p className="hero__description">
              I’m Josh Clay, a full-stack developer specializing in React,
              Python, Flask, relational databases, REST APIs, and AI-powered
              applications.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#projects">
                View My Work
              </a>

              <a
                className="button button--secondary"
                href="https://github.com/JTClay1"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <ul className="hero__technologies" aria-label="Core technologies">
              <li>React</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Flask</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="hero__image-wrapper">
            <div className="hero__image-glow" />

            <img
              className="hero__image"
              src={heroImage}
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section className="projects-section container" id="projects">
        <div className="section-heading">
          <p className="section-heading__eyebrow">Selected Work</p>
          <h2>Featured Projects</h2>
          <p>
            Full-stack applications built around practical problems, complete
            user workflows, and real-world integrations.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-placeholder" key={project.slug}>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>

              <Link to={`/projects/${project.slug}`}>
                View {project.title}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default HomePage;