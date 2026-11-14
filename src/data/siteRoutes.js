// Single source of truth for the site's real, linkable routes.
//
// Consumed by:
//   - the navbar (label),
//   - the route announcer in App.jsx (documentTitle, on client navigation),
//   - the build step in vite.config.js, which writes one static HTML file per
//     route with its own title, description and canonical URL, so GitHub Pages
//     answers deep links with a 200 and crawlers that do not run JavaScript
//     still see page-specific metadata,
//   - the generated sitemap.xml.
//
// Keep in sync with the route table in src/router.jsx. A test enforces it.
export const SITE_URL = 'https://jonathanbcsouza.github.io';
export const SITE_NAME = 'Jonathan Souza';

export const siteRoutes = [
  {
    path: '/',
    title: 'Home',
    documentTitle: 'Jonathan Souza | Software developer, AWS and music',
    description:
      'Jonathan Souza is a software developer with expertise in AWS who also makes music. Try the sketchpad, browse projects, listen to the music.',
  },
  {
    path: '/about',
    title: 'About',
    documentTitle: 'About | Jonathan Souza',
    description:
      'Cloud Support Engineer at AWS focused on serverless and event driven applications, with a background in shipbuilding quality engineering and a life in music.',
  },
  {
    path: '/tech',
    title: 'Tech',
    documentTitle: 'Tech projects | Jonathan Souza',
    description:
      'Things Jonathan Souza has built, from AWS tooling and web apps to university coursework and data analysis.',
  },
  {
    path: '/music',
    title: 'Music',
    documentTitle: 'Music | Jonathan Souza',
    description:
      'Artist projects by Jonathan Souza: experimental as Jonathan B. Souza, electronic as Harmonic Science, and alternative rock with Rejected By Society.',
  },
];

export const NOT_FOUND_TITLE = 'Page not found | Jonathan Souza';

export const titleForPath = (pathname) => {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return siteRoutes.find((route) => route.path === clean)?.documentTitle;
};
