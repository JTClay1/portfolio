import { Link, useParams } from "react-router-dom";
import RetroPanel from "../components/RetroPanel";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <div className="retro-page">
        <div className="detail-shell container">
          <RetroPanel title="Project Not Found">
            <div className="message-page">
              <p>
                The requested project could not be found in Josh's project
                directory.
              </p>

              <Link
                className="retro-button retro-button--primary"
                to="/"
              >
                Return to Profile
              </Link>
            </div>
          </RetroPanel>
        </div>
      </div>
    );
  }

  return (
    <div className="retro-page">
      <div className="detail-shell container">
        <div className="breadcrumbs">
          <Link to="/">Josh's Profile</Link>
          <span>/</span>
          <span>{project.title}</span>
        </div>

        <RetroPanel title={`${project.title} — Project Case Study`}>
          <article className="project-detail">
            <div className="project-detail__heading">
              <div>
                <p className="project-detail__type">
                  {project.type} · {project.year}
                </p>

                <h1>{project.title}</h1>
              </div>

              <span className="project-card__status">
                <span aria-hidden="true" />
                {project.status}
              </span>
            </div>

            <p className="project-detail__summary">
              {project.summary}
            </p>

            <h2>Technology Stack</h2>

            <ul className="technology-tags">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <div className="project-detail__actions">
              {project.githubUrl && (
                <a
                  className="retro-button retro-button--primary"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code
                </a>
              )}

              <Link
                className="retro-button retro-button--secondary"
                to="/#projects"
              >
                Return to Projects
              </Link>
            </div>
          </article>
        </RetroPanel>
      </div>
    </div>
  );
}

export default ProjectPage;