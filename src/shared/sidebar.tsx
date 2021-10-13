import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/logo.svg";

export const Sidebar: React.FC = () => {
  return (
    <div className="lg:h-full lg:fixed top-0 lg:left-0 overflow-x-hidden  p-12 bg-bgOrange xl:w-p390 lg:w-p342 w-full">
      <div>
        <img src={logo} alt="logo" className="w-28 h-28" />
      </div>
      <div className="lg:mt-20 mt-8">
        <h1 className="font-title text-textBlue text-8xl">Hello</h1>
        <p className="font-title text-white lg:text-5xl text-4xl">
          I’m Marion - <br />A React Developer
        </p>
      </div>
      <div className="lg:fixed lg:bottom-0 lg:inline-block hidden lg:mb-12">
        <a
          href="https://github.com/marionberton"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pr-4 py-2 my-2 mr-2"
        >
          <FontAwesomeIcon icon={["fab", "github"]} color="white" size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/marion-berton-b906b5b2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 m-2"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} color="white" size="2x" />
        </a>
      </div>
    </div>
  );
};
