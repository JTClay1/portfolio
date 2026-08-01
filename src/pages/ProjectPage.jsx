import { Link, useParams } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import RetroPanel from "../components/RetroPanel";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return (
      <div className="retro-page">
        <PageMeta
          title="Project Not Found | Josh Clay"
          description="The requested project could not be found in Josh Clay's software engineering portfolio."
        />

        <div className="detail-shell container">
          <RetroPanel title="Project Not Found" titleAs="div">
            <div className="message-page">
              <p className="message-page__code">
                404
              </p>

              <h1>Project not found.</h1>

              <p>
                The requested project could not be found in Josh&apos;s project
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

  const statusClassName = project.status === "Deployed"
    ? "project-card__status--deployed"
    : "project-card__status--case-study";

  return (
    <div className="retro-page">
      <PageMeta
        title={`${project.title} Case Study | Josh Clay`}
        description={project.summary}
      />

      <div className="detail-shell container">
        <nav
          className="breadcrumbs"
          aria-label="Breadcrumb"
        >
          <Link to="/">
            Josh&apos;s Profile
          </Link>

          <span aria-hidden="true">
            /
          </span>

          <span aria-current="page">
            {project.title}
          </span>
        </nav>

        <RetroPanel
          title={`${project.title} — Project Case Study`}
          titleAs="div"
        >
          <article className="project-detail">
            <header className="project-detail__heading">
              <div>
                <p className="project-detail__type">
                  {project.type} · {project.year}
                </p>

                <h1>{project.title}</h1>
              </div>

              <span className={`project-card__status ${statusClassName}`}>
                <span aria-hidden="true" />
                {project.status}
              </span>
            </header>

            {project.image && (
              <div className="project-detail__image-frame">
                <img
                  className="project-detail__image"
                  src={project.image}
                  alt={project.imageAlt}
                  decoding="async"
                />
              </div>
            )}

            <p className="project-detail__summary">
              {project.summary}
            </p>

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

            <div className="case-study-grid">
              <section className="case-study-section case-study-section--wide">
                <h2>Project Overview</h2>
                <p>{project.overview}</p>
              </section>

              <section className="case-study-section">
                <h2>The Problem</h2>
                <p>{project.problem}</p>
              </section>

              <section className="case-study-section">
                <h2>Technology Stack</h2>

                <ul
                  className="technology-tags"
                  aria-label={`${project.title} technologies`}
                >
                  {project.technologies.map((technology) => (
                    <li key={technology}>
                      {technology}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="case-study-section">
                <h2>Key Features</h2>

                <ul className="case-study-list">
                  {project.features.map((feature) => (
                    <li key={feature}>
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="case-study-section">
                <h2>Application Architecture</h2>

                <ol className="architecture-list">
                  {project.architecture.map((item, index) => (
                    <li key={item}>
                      <span>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p>{item}</p>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="case-study-section">
                <h2>Engineering Challenge</h2>
                <p>{project.challenge}</p>
              </section>

              <section className="case-study-section">
                <h2>My Solution</h2>
                <p>{project.solution}</p>
              </section>

              <section className="case-study-section case-study-section--wide">
                <h2>Future Improvements</h2>

                <ul className="case-study-list case-study-list--columns">
                  {project.improvements.map((improvement) => (
                    <li key={improvement}>
                      {improvement}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="project-detail__footer-actions">
              <Link
                className="retro-button retro-button--primary"
                to="/#projects"
              >
                Return to Featured Projects
              </Link>
            </div>
          </article>
        </RetroPanel>
      </div>
    </div>
  );
}

export default ProjectPage;