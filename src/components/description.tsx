import React from "react";

import close from "../assets/cancel.svg";

interface Props {
  data: {
    title: string;
    image: string;
    alt: string;
    product: string;
    step1: string;
    step2: string;
    challenge: string;
    website: string;
    github: string;
    linkweb: string;
    linkgit: string;
  };
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Content = ({ data, onClick, onKeyPress }: Props) => {
  return (
    <div className="mx-15 my-27 ">
      <button
        onClick={onClick}
        className=" cursor-pointer outline-none absolute top-0 right-0 mt-5 mr-5"
        type="button"
      >
        <img src={close} alt="close" className="" />
      </button>

      <div className="flex flex-row">
        <div className="self-center sm:block hidden">
          <img src={data.image} alt={data.alt} className="w-p254 h-auto" />
        </div>
        <div className="flex-col sm:pl-20 text-textBlue ">
          <div className="mb-6">
            <h1 className="mb-4 font-title text-3lg">Product</h1>
            <p>{data.product}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-3lg">
              {data.title === "Mindiply"
                ? "Experience"
                : "Step 1: Research and Discovery"}
            </h1>
            <p>{data.step1}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-3lg">
              {data.title === "Mindiply"
                ? "Tasks"
                : "Step 2: Coding and User Testing"}
            </h1>
            <p>{data.step2}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-3lg">
              {data.title === "Mindiply" ? "" : "Challenge"}
            </h1>
            <p>{data.challenge}</p>
          </div>
          <div>
            <a
              href={data.linkweb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mr-3 text-linkBlue underline uppercase"
            >
              {data.website}
            </a>
            <a
              href={data.linkgit}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-linkBlue underline uppercase"
            >
              {data.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
