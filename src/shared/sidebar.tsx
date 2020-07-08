import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.svg';

export const Sidebar: React.FC = () => {
  return (
    <div className="lg:h-full w-full lg:fixed top-0 lg:top-0 lg:left-0 overflow-x-hidden lg:w-1/4 z-10 p-5 bg-bgOrange">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="lg:mt-20 mt-8">
        <h1 className="font-title text-textBlue text-6xl">Hello</h1>
        <p className="font-title text-white lg:text-4xl text-3xl">
          I’m Marion - <br />A React Developer
        </p>
      </div>
      <div className="lg:fixed lg:bottom-0 lg:inline-block hidden">
        <a
          href="https://github.com/marionberton"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pr-4 py-2 my-2 mr-2"
        >
          <FontAwesomeIcon icon={['fab', 'github']} color="white" size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/marion-berton-b906b5b2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 m-2"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="2x" />
        </a>
      </div>
    </div>
  );
};
