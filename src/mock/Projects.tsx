import hami from '../assets/hamiPreview.png';
import music from '../assets/musicPreview.png';
import ux from '../assets/uxPreview.png';

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
    title: 'Apalaa',
    description: ' music discovery',
  },
  {
    image: ux,
    alt: ' ',
    title: 'uxAnalytic',
    description: 'SaaS ux analysis',
  },
];
