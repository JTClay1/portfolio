import { Link } from "react-router-dom";

function ProjectCard({ project, index }) {
  return (
    <article className="project-card">
      <div className="project-card__topline">
        <span className="project-card__number">
          Project {String(index + 1).padStart(2, "0")}
        </span>

        <span className="project-card__status">
          <span aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <h3>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h3>

      <p className="project-card__type">
        {project.type} · {project.year}
      </p>

      <p className="project-card__summary">{project.summary}</p>

      <ul
        className="technology-tags"
        aria-label={`${project.title} technologies`}
      >
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <div className="project-card__actions">
        <Link
          className="retro-button retro-button--primary"
          to={`/projects/${project.slug}`}
        >
          View Case Study
        </Link>

        {project.githubUrl && (
          <a
            className="retro-button retro-button--secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;