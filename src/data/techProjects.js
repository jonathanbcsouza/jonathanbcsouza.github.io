// Every project carries its own screenshot. Live third-party iframes were
// replaced with captures: CodePen refuses cross-origin framing outright, and
// the rest cost a page full of third-party requests to show a preview that was
// blurred until hover and therefore invisible on touch devices.
//
// fit: 'contain' is for portrait screenshots (phone apps, tall pages) that
// would lose their subject to a 16:9 crop.
export const techPage = {
  title: 'Tech',
  intro:
    'Things I have built, from AWS tooling and web apps to university coursework and data analysis.',
  projects: [
    {
      title: 'Lambda Concurrency Monitoring',
      tech: 'AWS CDK · Python · CloudWatch',
      src: '/images/projects/lambda-concurrency-monitoring.webp',
      href: 'https://github.com/jonathanbcsouza/lambda-concurrency-monitoring',
    },
    {
      title: 'World Cup 2026 Match Calendar',
      tech: 'Next.js · TypeScript · iCalendar',
      src: '/images/projects/world-cup-ical.webp',
      href: 'https://world-cup-ical.vercel.app/',
    },
    {
      title: 'Rejected By Society',
      tech: 'Rock band website and conceptualization',
      src: '/images/projects/rejected-by-society.webp',
      href: 'https://rejectedbysociety.com/',
    },
    {
      title: 'Todo List',
      tech: 'TypeScript · React',
      src: '/images/projects/todo-list.webp',
      href: 'https://todo-list-app-eight-bice.vercel.app',
    },
    {
      title: 'Caesar Cipher',
      tech: 'JavaScript · React',
      src: '/images/projects/caesar-cipher.webp',
      href: 'https://main.d12bj0lezqamk9.amplifyapp.com',
    },
    {
      title: 'Eliminate Covid 19',
      tech: 'Educational game · Scratch',
      src: '/images/projects/educational-game.webp',
      href: 'https://scratch.mit.edu/projects/385143391/',
    },
    {
      title: 'Encryption Decoder',
      tech: 'C programming',
      src: '/images/projects/encryption-decoder.webp',
      href: 'https://www.youtube.com/watch?v=XKU81C9e_5I',
    },
    {
      title: 'Mario Pyramid',
      tech: 'C programming',
      src: '/images/projects/mario-pyramid.webp',
      href: 'https://www.youtube.com/watch?v=QTI3PEhvXto',
    },
    {
      title: 'Medical Appointments In Brazil',
      tech: 'Data analysis · Python · Jupyter',
      src: '/images/projects/da-python.webp',
    },
    {
      title: 'QA Studies at Ecovix Shipyard',
      tech: 'Data analysis · Excel',
      src: '/images/projects/da-excel.webp',
    },
    {
      title: 'Documentation Page',
      tech: 'HTML · CSS · JavaScript',
      href: 'https://codepen.io/jonathanbcsouza/full/WqBpog',
    },
    {
      title: 'Engineering Company Website',
      tech: 'WordPress · CSS · Amazon Lightsail',
      src: '/images/projects/jetweld.co.nz.webp',
      fit: 'contain',
    },
    {
      title: 'Tour Guide NZ',
      tech: 'Android · Java',
      src: '/images/projects/android-app-visit-new-zealand.webp',
      fit: 'contain',
    },
    {
      title: 'Music Player',
      tech: 'Android · Java',
      src: '/images/projects/android-app-music-player.webp',
      fit: 'contain',
    },
  ],
};
