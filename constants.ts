import { Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'locum',
    title: 'Locum Dashboard',
    description: 'An invoicing platform for locums.',
    url: 'https://locum.typa.me',
    thumbnailUrl: `https://s.wordpress.com/mshots/v1/${encodeURIComponent('https://locum.typa.me')}?w=800&h=600`,
  },
  {
    id: 'rem',
    title: "'Remier League",
    description: "The 'remier 'rinking game for 'edical students around the world.",
    url: 'https://rem.typa.me',
    thumbnailUrl: `https://s.wordpress.com/mshots/v1/${encodeURIComponent('https://rem.typa.me')}?w=800&h=600`,
  },
  {
    id: 'checklist',
    title: 'Checklist',
    description: "Girly pop checklist to ensure you're not just surviving but thriving!",
    url: 'https://checklist.typa.me',
    thumbnailUrl: `https://s.wordpress.com/mshots/v1/${encodeURIComponent('https://checklist.typa.me')}?w=800&h=600`,
  },
];