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
              <p className="message-page__code">404</p>

              <h1>Project not found.</h1>

              <p>
                The requested project could not be found in Josh&apos;s project
                directory.
              </p>

              <Link className="retro-button retro-button--primary" to="/">
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
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Josh&apos;s Profile</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{project.title}</span>
        </nav>

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

            {project.image && (
              <div className="project-detail__image-frame">
                <img
                  className="project-detail__image"
                  src={project.image}
                  alt={project.imageAlt}
                />
              </div>
            )}

            <p className="project-detail__summary">{project.summary}</p>

            <section className="project-detail__section">
              <h2>Technology Stack</h2>

              <ul
                className="technology-tags"
                aria-label={`${project.title} technologies`}
              >
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </section>

            <div className="project-detail__actions">
              {project.liveUrl && (
                <a
                  className="retro-button retro-button--primary"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch Application
                </a>
              )}

              {project.githubUrl && (
                <a
                  className="retro-button retro-button--secondary"
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