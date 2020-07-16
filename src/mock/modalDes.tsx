import hami from '../assets/hami-landing-page-final-2.png';
import music from '../assets/apala-page-final-2.png';
import ux from '../assets/Uxanalytic-landing.png';

export const MODAL = [
  {
    title: 'Hamisea',
    image: hami,
    alt: 'hami',
    product:
      'Hami helps sailers find a harbour with mooring spaces close to them. I have been working with a web developer, to build the web app.',
    step1:
      'Sketching and planning the app, list of harbors, API endpoints and what user interface.',
    step2:
      'Built and designed the landing page. In this project I learned how to use typescript, and for the web app I picked up the basics of node.js, express, and MongoDB to create a backend which are still in process. ',

    challenge:
      'The process of learning always comes with challenges, Typescript was sometimes time consuming, spending a lot of hours searching for the erros and types. ',

    website: 'website',
    linkweb: 'https://hamisea.com/',
    github: '',
    linkgit: '',
  },
  {
    title: 'Apala',
    image: music,
    alt: 'music',
    product:
      'Music disover platform for Spotify users. It helps you discover music by clicking on a country based on spotify catalogues.',
    step1:
      'Sketching out IA and researching the best API for the project (spotify, Soundcloud etc).',
    step2:
      'The kick of the project included me using React Hooks. Starting off by finding the right vector map to connect with the search, and then look for the best API to connect with the map. The design is still in process as I am not totally satisfied with the map',

    challenge:
      'Fetching the right music API, that can work with the search by country. Also, understanding the logic behind the useState, useEffect whith the API.',

    website: '',
    linkweb: '',
    github: 'github',
    linkgit: 'https://github.com/marionberton/music-project',
  },
  {
    title: 'uxAnalytic',
    image: ux,
    alt: 'ux',
    product:
      'UX Analaytic helps designers create an excellent user experience, by analyzing design patterns of your direct competitors.',
    step1: 'Worked closely with the client for the visual of the demo project.',
    step2: 'This project was built with React Hooks, Tailwind and Typescript.',

    challenge:
      'Making the table dynamic, and the research around the OAuth using firebase took most of the time in developing the demo.',
    website: 'website',
    linkweb: 'https://www.uxanalytic.com/',
    github: '',
    linkgit: '',
  },
];
