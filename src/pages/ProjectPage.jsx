import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectPage() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section>
        <h1>Project Not Found</h1>
        <p>The requested project does not exist.</p>
        <Link to="/">Return Home</Link>
      </section>
    );
  }

  return (
    <section>
      <p>Project Case Study</p>
      <h1>{project.title}</h1>
      <p>{project.summary}</p>

      <Link to="/">Return Home</Link>
    </section>
  );
}

export default ProjectPage;