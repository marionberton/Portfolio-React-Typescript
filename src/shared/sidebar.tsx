import React from 'react';

import logo from '../assets/logo.svg';

export const Sidebar: React.FC = () => {
  return (
    <div className="h-full fixed top-0 left-0 overflow-x-hidden w-1/3 z-10 pt-5 bg-bgOrange">
      <div>
        <img src={logo} alt="logo" className="pl-5" />
      </div>
    </div>
  );
};
