import heroImage from "../assets/hero.png";
import RetroPanel from "./RetroPanel";

function ProfileSidebar() {
  return (
    <div className="profile-sidebar">
      <RetroPanel title="Profile">
        <div className="profile-card">
          <div className="profile-card__image-frame">
            <img
              className="profile-card__image"
              src={heroImage}
              alt="Josh Clay"
            />
          </div>

          <h3>Josh Clay</h3>
          <p className="profile-card__handle">@JTClay1</p>

          <div className="online-status">
            <span className="online-status__dot" aria-hidden="true" />
            Online — Open to Work
          </div>

          <dl className="profile-facts">
            <div>
              <dt>Location</dt>
              <dd>Phoenix, Arizona</dd>
            </div>

            <div>
              <dt>Role</dt>
              <dd>Full-Stack Software Engineer</dd>
            </div>

            <div>
              <dt>Focus</dt>
              <dd>Practical web applications</dd>
            </div>
          </dl>
        </div>
      </RetroPanel>

      <RetroPanel title="Developer Stats">
        <ul className="stats-list">
          <li>
            <span>Frontend</span>
            <strong>React + JavaScript</strong>
          </li>

          <li>
            <span>Backend</span>
            <strong>Python + Flask</strong>
          </li>

          <li>
            <span>Data</span>
            <strong>SQL + SQLAlchemy</strong>
          </li>

          <li>
            <span>Integrations</span>
            <strong>REST APIs + OpenAI</strong>
          </li>
        </ul>
      </RetroPanel>

      <RetroPanel title="Quick Links">
        <nav className="quick-links" aria-label="Profile links">
          <a href="#projects">› Featured Projects</a>
          <a href="#about">› About Me</a>
          <a
            href="https://github.com/JTClay1"
            target="_blank"
            rel="noreferrer"
          >
            › GitHub Profile
          </a>
        </nav>
      </RetroPanel>
    </div>
  );
}

export default ProfileSidebar;