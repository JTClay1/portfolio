# Josh Clay — Software Engineering Portfolio

A responsive React portfolio presenting my full-stack and frontend projects as detailed engineering case studies. The interface is inspired by early social-web profiles and desktop chat clients while using modern accessibility, routing, and deployment practices.

## Live Portfolio

[View the deployed portfolio](https://portfolio-jtclay1s-projects.vercel.app)

> The production deployment must have Vercel Deployment Protection disabled before the public URL can be shared with employers.

## Featured Projects

| Project | Focus | Live Application | Source |
| --- | --- | --- | --- |
| Build n' Buy | Full-stack savings and AI-assisted purchase planning | [Launch](https://build-n-buy.vercel.app) | [GitHub](https://github.com/JTClay1/build-n-buy) |
| PumpAI | Full-stack fitness tracking and AI coaching case study | Not currently deployed | [GitHub](https://github.com/JTClay1/pumpai) |
| Tokyo Travel | Responsive travel companion using external APIs | [Launch](https://tokyo-travel-app.vercel.app) | [GitHub](https://github.com/JTClay1/tokyo-travel-app) |

Each project route includes its problem statement, feature set, architecture, engineering challenge, solution, technology stack, and future improvements.

## Portfolio Features

- Responsive retro-inspired interface
- Reusable project cards and case-study pages
- Route-specific titles, descriptions, Open Graph data, and canonical URLs
- Downloadable software engineering resume
- Keyboard-accessible contact panel with Escape-to-close behavior
- Custom 404 and missing-project states
- Vercel SPA rewrites for direct navigation and route refreshes
- Sitemap, robots directives, favicon, and social-sharing preview
- Reduced-motion support and visible keyboard focus states

## Technology Stack

- React 19
- React Router
- JavaScript
- Vite
- Responsive CSS
- ESLint
- Vercel

## Local Development

Requirements:

- Node.js 20 or later
- npm

Install and start the development server:

```bash
git clone https://github.com/JTClay1/portfolio.git
cd portfolio
npm install
npm run dev
```

Open the local URL printed by Vite.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create the production build
npm run preview  # Preview the production build locally
```

## Routes

```text
/
 /projects/build-n-buy
 /projects/pumpai
 /projects/tokyo-travel
```

Invalid routes render the portfolio's custom 404 page. The root `vercel.json` sends production requests to `index.html` so React Router can handle direct visits.

## Project Structure

```text
public/
  resume/
src/
  assets/
  components/
  data/
  pages/
  styles/
```

Project information is centralized in `src/data/projects.js`, allowing the homepage cards and case-study routes to share the same content and links.

## Contact

- [GitHub](https://github.com/JTClay1)
- [LinkedIn](https://www.linkedin.com/in/josh-clay-a66656111/)
- [Email](mailto:josh.t.clay1995@gmail.com)

## License

This portfolio and its original content are © Josh Clay. Project source repositories are available individually through the links above.
