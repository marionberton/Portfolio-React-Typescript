import hami from '../assets/hamiPreview-1-2.png';
import music from '../assets/musicPreview-1-2.png';
import ux from '../assets/uxPreview-1-2.png';

export interface Work {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const PROJECTS = [
  {
    image: hami,
    alt: ' ',
    title: 'Hamisea',
    description: 'landing page',
  },
  {
    image: music,
    alt: ' ',
    title: 'Apala',
    description: ' music discovery',
  },
  {
    image: ux,
    alt: ' ',
    title: 'uxAnalytic',
    description: 'SaaS ux analysis',
  },
];
