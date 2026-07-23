import ProfileSidebar from "../components/ProfileSidebar";
import ProjectCard from "../components/ProjectCard";
import RetroPanel from "../components/RetroPanel";
import projects from "../data/projects";

function HomePage() {
  return (
    <div className="retro-page" id="home">
      <div className="retro-shell container">
        <section className="profile-heading">
          <div className="profile-heading__titlebar">
            <span>Josh Clay&apos;s Developer Profile</span>

            <span
              className="profile-heading__window-controls"
              aria-hidden="true"
            >
              _ □ ×
            </span>
          </div>

          <div className="profile-heading__body">
            <div>
              <p className="profile-heading__eyebrow">Current profile</p>

              <h1>Josh Clay</h1>

              <p className="profile-heading__role">
                Full-Stack Software Engineer
              </p>

              <p className="profile-heading__description">
                I build practical, user-focused applications with React,
                Python, Flask, relational databases, REST APIs, and AI-powered
                features.
              </p>

              <div className="profile-heading__actions">
                <a
                  className="retro-button retro-button--primary"
                  href="https://github.com/JTClay1"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit GitHub
                </a>
              </div>
            </div>

            <div className="buddy-status">
              <div className="buddy-status__heading">
                <span className="online-status__dot" aria-hidden="true" />
                Josh is online
              </div>

              <p>
                Open to junior full-stack, frontend, backend, and AI-integrated
                software engineering opportunities.
              </p>

              <span className="buddy-status__away-message">
                Away message: probably debugging something that worked locally.
              </span>
            </div>
          </div>
        </section>

        <div className="profile-layout">
          <aside>
            <ProfileSidebar />
          </aside>

          <div className="profile-feed">
            <RetroPanel
              className="status-update-panel"
              title="Josh's Latest Status"
            >
              <div className="status-update">
                <div className="status-update__avatar" aria-hidden="true">
                  JC
                </div>

                <div>
                  <p>
                    <strong>Josh</strong> is building software that solves
                    actual problems instead of another weather-app tutorial.
                  </p>

                  <small>Updated recently · Phoenix, Arizona</small>
                </div>
              </div>
            </RetroPanel>

            <RetroPanel title="Featured Projects" id="projects">
              <div className="projects-list">
                {projects.map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </RetroPanel>

            <RetroPanel title="About Josh" id="about">
              <div className="about-copy">
                <p>
                  I completed an intensive full-stack software engineering
                  program covering JavaScript, React, Python, Flask, SQL,
                  authentication, REST APIs, data structures, testing, and
                  deployment.
                </p>

                <p>
                  My work focuses on connected applications with complete user
                  workflows, thoughtful interfaces, useful data, and features
                  that could survive outside a classroom assignment.
                </p>

                <p>
                  This portfolio pays tribute to the internet era that first
                  made computers feel exciting: profile pages, buddy lists,
                  online worlds, game interfaces, and unapologetically blue
                  navigation bars.
                </p>
              </div>
            </RetroPanel>

            <RetroPanel title="Current Technology Inventory">
              <ul className="technology-shelf">
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
                <li>Flask</li>
                <li>SQL</li>
                <li>SQLAlchemy</li>
                <li>REST APIs</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Vite</li>
                <li>OpenAI API</li>
                <li>Responsive CSS</li>
              </ul>
            </RetroPanel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;