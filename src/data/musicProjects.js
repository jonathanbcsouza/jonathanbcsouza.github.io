export const musicPage = {
  title: 'Music',
  intro:
    'Two artist projects: personal songwriting as Jonathan B. Souza, and electronic production as Harmonic Science.',
  featured: [
    {
      id: 'jonathan-b-souza',
      name: 'Jonathan B. Souza',
      tagline: 'Personal',
      description:
        'Self-taught multi-instrumentalist, composer, and producer exploring minimalistic classical, immersive melodies, and atmospheric post-rock.',
      embeds: [
        {
          type: 'youtube',
          id: '0qKL72EtwCI',
          title: 'Jonathan B. Souza - Darkness And Light',
        },
      ],
      links: [
        {
          kind: 'apple',
          label: 'Apple Music',
          href: 'https://music.apple.com/gh/artist/jonathan-b-souza/1614661225',
        },
        {
          kind: 'spotify',
          label: 'Spotify',
          href: 'https://open.spotify.com/artist/3AxDKUFfndRKbL2W0sxPZ0',
        },
        {
          kind: 'instagram',
          label: 'Instagram',
          href: 'https://www.instagram.com/jonosou.music/',
        },
        {
          kind: 'x',
          label: 'X',
          href: 'https://x.com/jonathanbcsouza',
        },
      ],
    },
    {
      id: 'harmonic-science',
      name: 'Harmonic Science',
      tagline: 'Electronic',
      description:
        'Electronic project focused on frequency-driven soundscapes, remixes, and experimental production.',
      embeds: [
        {
          type: 'youtube',
          id: 'sp_NYR4U8Oo',
          title:
            'Cat Dealers & Evokings feat. Magga - Gravity (Harmonic Science Remix)',
        },
      ],
      links: [
        {
          kind: 'x',
          label: 'X',
          href: 'https://x.com/HarmonicScience',
        },
      ],
    },
  ],
  other: [
    {
      id: 'other-projects',
      name: 'Other projects',
      tagline: 'Collaborations',
      description:
        'Selected collaborations and featured work outside the main artist projects.',
      embeds: [
        {
          type: 'youtube',
          id: 'p49Bl8Q5X18',
          title: 'Rejected By Society - Transmission Lost',
        },
      ],
      links: [],
    },
  ],
};
