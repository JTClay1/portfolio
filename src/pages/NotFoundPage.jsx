import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section>
      <h1>404</h1>
      <p>The page you requested could not be found.</p>
      <Link to="/">Return Home</Link>
    </section>
  );
}

export default NotFoundPage;