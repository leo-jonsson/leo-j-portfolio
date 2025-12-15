export type Project = {
  id: string
  title: string
  tech: string[]
  images: { url: string; alt: string }[]
  links: { label: string; url: string }[]
  period: string
  content: string
  highlights: string[]
  jobTitle: string
}

export const PROJECTS: Project[] = [
  {
    id: 'seagrid',
    title: 'Seagrid',
    jobTitle: 'Fullstack Developer',
    tech: [
      'React Native',
      'Payload',
      'MongoDB',
      'NestJS',
      'Firebase',
      'React Query',
      'TypeScript',
      'AWS',
    ],
    images: [
      { url: '/assets/sigge.png', alt: 'Seagrid logo' },
      { url: '/assets/Seagrid.webp', alt: "image of Seagrid's website" },
      { url: '/assets/Seagrid2.png', alt: 'Wireframes' },
    ],
    links: [
      { label: 'Website', url: 'https://www.seagrid.se/' },
      {
        label: 'Download the app',
        url: 'https://apps.apple.com/eg/app/seagrid/id6479172067',
      },
    ],
    period: 'April 2025 - Ongoing',
    content:
      'Boat alarm connected to a mobile app that notifies users in real-time during incidents.',
    highlights: [
      'Designed and implemented a new navigation structure in the app',
      'Led the Seagrid V2 redesign including full Figma re-design',
      'Introduced a new concept for boat clubs with dedicated screens and flows',
      'Migrated MongoDB data to Payload CMS including scripts and updated typings',
    ],
  },

  {
    id: 'feelgood',
    title: 'Feelgood App',
    jobTitle: 'Frontend Developer',
    tech: [
      'React Native',
      'React Query',
      'Firebase',
      'Styled components',
      'TypeScript',
      'Redux Toolkit',
    ],
    images: [{ url: '/assets/Feelgood.png', alt: 'feelgood print' }],
    links: [
      { label: 'Website', url: 'https://feelgood.se/' },
      {
        label: 'Download the app',
        url: 'https://apps.apple.com/se/app/feelgood/id1454287441',
      },
    ],
    period: 'March 2025 - Ongoing',
    content:
      'Health and wellness app with over 8,000 business customers and around one million employees.',
    highlights: [
      'Refactored components for improved structure and performance',
      'Built a keyboard wrapper to improve input UX',
      'Developed a new feedback flow in the app',
      'Implemented favorite clinic functionality',
    ],
  },

  {
    id: 'MAI',
    title: 'MAI',
    jobTitle: 'Fullstack Developer',

    tech: ['Vite', 'React', 'TypeScript', 'OPENAI', 'AWS Rekognition', 'TailwindCSS'],
    images: [
      { url: '/assets/redmind.jpeg', alt: 'image of Mai project' },
      { url: '/assets/Mai2.jpg', alt: 'alt' },
    ],
    links: [
      {
        label: 'Article',
        url: 'https://scienceparkskovde.se/sv/aktuellt/ai-skapar-nya-mojligheter-temamanaden-mai-ger-dig-verktygen/',
      },
    ],
    period: 'April 2025 - May 2025',
    content: 'AI event in Skövde including a hands-on workshop.',
    highlights: [
      'Integrated face recognition using AWS Rekognition',
      'Built object generation flow using Vercel AI SDK',
      'Wrote scripts to migrate user data from JSON',
    ],
  },
]

export default PROJECTS
