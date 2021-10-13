import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer: React.FC = () => {
  return (
    <footer className="bottom-0 block lg:hidden pt-5 bg-lightgrey">
      <div className="py-4 px-16 ">
        <a
          href="https://github.com/marionberton"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pr-4 py-2 my-2 mr-2"
        >
          <FontAwesomeIcon icon={["fab", "github"]} color="black" size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/marion-berton-b906b5b2"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 m-2"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} color="black" size="2x" />
        </a>
      </div>
    </footer>
  );
};
