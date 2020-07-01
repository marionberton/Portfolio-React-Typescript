import React from 'react';

import { Intro } from '../components/intro';
import { Projects } from '../components/Projects/works';
import { Skills } from '../components/Skills/skills';

export const Main = () => {
  return (
    <>
      <Intro />
      <Projects />
      <Skills />
    </>
  );
};
