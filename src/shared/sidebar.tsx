import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../assets/logo.svg';

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full fixed top-0 left-0 overflow-x-hidden w-1/4 z-10 p-5  bg-bgOrange">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="mt-20">
        <h1 className="font-title text-textBlue text-6xl">Hello</h1>
        <p className="font-title text-white text-4xl">
          I’m Marion - <br />A React Developer
        </p>
      </div>
      <div className="fixed bottom-0">
        <div className="inline-block pr-4 py-2 my-2 mr-2">
          <FontAwesomeIcon icon={['fab', 'github']} color="white" size="2x" />
        </div>
        <div className="inline-block px-4 py-2 m-2">
          <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" size="2x" />
        </div>
      </div>
    </div>
  );
};
