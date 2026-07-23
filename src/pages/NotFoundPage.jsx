import { Link } from "react-router-dom";
import RetroPanel from "../components/RetroPanel";

function NotFoundPage() {
  return (
    <div className="retro-page">
      <div className="detail-shell container">
        <RetroPanel title="404 — Page Not Found">
          <div className="message-page">
            <p className="message-page__code">404</p>

            <h1>This page has signed off.</h1>

            <p>
              The requested page could not be found. It may have moved, been
              deleted, or returned to the dial-up era.
            </p>

            <Link
              className="retro-button retro-button--primary"
              to="/"
            >
              Return to Josh's Profile
            </Link>
          </div>
        </RetroPanel>
      </div>
    </div>
  );
}

export default NotFoundPage;