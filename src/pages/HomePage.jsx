import { Link } from "react-router-dom";
import projects from "../data/projects";

function HomePage() {
  return (
    <>
      <section>
        <h1>Josh Clay</h1>
        <p>Full-Stack Software Engineer</p>
      </section>

      <section id="projects">
        <h2>Featured Projects</h2>

        {projects.map((project) => (
          <article key={project.slug}>
            <h3>{project.title}</h3>
            <p>{project.summary}</p>

            <Link to={`/projects/${project.slug}`}>
              View {project.title}
            </Link>
          </article>
        ))}
      </section>
    </>
  );
}

export default HomePage;