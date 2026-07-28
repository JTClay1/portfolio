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

    overview:
      "Build n' Buy is a full-stack financial planning application designed to help users save toward specific purchases while making more informed buying decisions. Users can create goals, record contributions, monitor progress, and receive AI-generated recommendations based on their budget and priorities.",

    problem:
      "Saving for a purchase often involves several disconnected tasks: tracking progress, researching current prices, comparing alternatives, and determining whether the purchase fits within a broader budget. Build n' Buy brings those steps into one connected workflow.",

    features: [
      "Secure account creation and JWT-based authentication",
      "Purchasing-goal creation, editing, and deletion",
      "Contribution tracking with updated savings progress",
      "AI-generated purchasing and budgeting recommendations",
      "Budget and premium product alternatives",
      "Live product-price checking",
      "Protected dashboard routes and user-specific data",
    ],

    architecture: [
      "React and Vite provide the client-side interface",
      "Flask exposes RESTful API endpoints",
      "SQLAlchemy manages users, goals, and contributions",
      "JWT tokens protect authenticated application routes",
      "The backend communicates with external AI and product-data services",
    ],

    challenge:
      "The most difficult part of the project was moving from a fully functioning local application to a stable production deployment. The production environment introduced differences involving API URLs, environment variables, CORS behavior, and frontend-to-backend communication.",

    solution:
      "I isolated each deployment issue individually, moved configuration values into environment variables, corrected the production API base URL, updated CORS settings, and repeatedly tested the complete authentication and goal-management workflow after deployment.",

    improvements: [
      "Migrate the production database to PostgreSQL",
      "Add automated frontend and backend test coverage",
      "Add password reset and account recovery",
      "Cache product-price results to reduce external requests",
      "Add more structured validation for AI-generated responses",
    ],
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

    overview:
      "PumpAI is a full-stack fitness application that combines nutrition tracking, workout logging, profile-based goals, and personalized AI coaching. It was designed to give users one location for recording their daily activity and receiving feedback based on their own targets.",

    problem:
      "Fitness data is frequently spread across calorie trackers, workout notes, spreadsheets, and generic coaching tools. PumpAI connects those activities so the feedback is based on the user's actual profile, nutrition logs, and training history.",

    features: [
      "Account creation and session-based authentication",
      "Personalized calorie and macronutrient targets",
      "Daily food and nutrition logging",
      "Workout and exercise logging",
      "Historical food and workout records",
      "AI-generated fitness coaching",
      "User-specific profile and progress data",
    ],

    architecture: [
      "React provides the client-side dashboard and forms",
      "Flask handles authentication and application routes",
      "SQLAlchemy manages profiles, food logs, workout logs, and coaching responses",
      "Server-side sessions maintain authenticated users",
      "The backend sends structured user data to the OpenAI API",
    ],

    challenge:
      "The central engineering challenge was making the AI feedback meaningfully connected to the rest of the application. A generic chatbot would not provide much value unless it could understand the user's goals, daily nutrition, and workout history.",

    solution:
      "I structured the backend to combine profile information and logged activity before generating coaching requests. This allowed the AI feature to respond to the user's actual targets and recent behavior rather than operating as an isolated chat interface.",

    improvements: [
      "Add visual progress charts and trend reporting",
      "Add exercise templates and reusable routines",
      "Expand automated testing for authentication and logging",
      "Add image-based nutrition entry support",
      "Add configurable coaching styles and response preferences",
    ],
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

    overview:
      "Tokyo Travel is an interactive travel companion that brings together live weather, restaurant discovery, useful phrases, cultural information, and trip-planning tools in one responsive React application.",

    problem:
      "Travelers often move between separate weather, map, restaurant, translation, and cultural-reference applications while planning a trip. Tokyo Travel organizes several of those common needs into a single focused experience.",

    features: [
      "Current and hourly Tokyo weather information",
      "Celsius and Fahrenheit temperature controls",
      "Location-based restaurant discovery",
      "Restaurant sorting and distance information",
      "Japanese phrase-learning quiz",
      "Tokyo local-time display",
      "Light and dark themes",
      "Responsive navigation and custom 404 handling",
    ],

    architecture: [
      "React components manage the application interface",
      "React Router handles page navigation",
      "External REST APIs provide weather and restaurant data",
      "Reusable components display live data and cultural tools",
      "Responsive CSS supports desktop and mobile layouts",
    ],

    challenge:
      "The primary challenge was combining multiple external data sources while keeping the interface consistent and easy to use. Weather and restaurant responses required different loading, error, filtering, and presentation logic.",

    solution:
      "I separated the external-data features into focused components, normalized the information needed by the interface, and added clear loading and error states. Sorting and filtering were handled after the data was transformed into a predictable format.",

    improvements: [
      "Add saved restaurants and itinerary planning",
      "Add map-based restaurant visualization",
      "Add additional Japanese phrase categories",
      "Add offline support for saved travel information",
      "Expand accessibility and automated component testing",
    ],
  },
];

export default projects;