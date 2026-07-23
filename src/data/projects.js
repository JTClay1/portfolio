import buildNBuyImage from "../assets/projects/build-n-buy/dashboard.png";
import pumpAIImage from "../assets/projects/pumpai/dashboard.png";
import tokyoTravelImage from "../assets/projects/tokyo-travel/homepage.png";

const projects = [
  {
    slug: "build-n-buy",
    title: "Build n' Buy",
    type: "Full-Stack Capstone",
    year: "2026",
    status: "Deployed",
    image: buildNBuyImage,
    imageAlt: "Build n' Buy savings-goal dashboard",
    summary:
      "An AI-powered savings platform that helps users create purchasing goals, track contributions, compare alternatives, and make smarter buying decisions.",
    technologies: [
      "React",
      "Flask",
      "SQLAlchemy",
      "JWT",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/JTClay1/build-n-buy",
    liveUrl: "",
  },
  {
    slug: "pumpai",
    title: "PumpAI",
    type: "Full-Stack Capstone",
    year: "2026",
    status: "Deployed",
    image: pumpAIImage,
    imageAlt: "PumpAI fitness tracking dashboard",
    summary:
      "A fitness coaching application combining food and workout tracking with personalized goals, progress history, and AI-generated feedback.",
    technologies: [
      "React",
      "Flask",
      "SQLAlchemy",
      "Session Authentication",
      "OpenAI API",
    ],
    githubUrl: "https://github.com/JTClay1/pumpai",
    liveUrl: "",
  },
  {
    slug: "tokyo-travel",
    title: "Tokyo Travel",
    type: "Frontend Capstone",
    year: "2026",
    status: "Deployed",
    image: tokyoTravelImage,
    imageAlt: "Tokyo Travel application homepage",
    summary:
      "An interactive Tokyo travel companion featuring live weather, restaurant discovery, cultural tools, phrase practice, and responsive trip-planning features.",
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "Vite",
      "Responsive CSS",
    ],
    githubUrl: "",
    liveUrl: "",
  },
];

export default projects;