import React from 'react';

import close from '../assets/cancel.svg';

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

export const Content: React.FC<Props> = ({ data, onClick, onKeyPress }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="ml-auto cursor-pointer outline-none relative"
        style={{ left: '95%' }}
        type="button"
      >
        <img src={close} alt="close" className="ml-auto" />
      </button>

      <div className="flex flex-row">
        <div className="self-center sm:block hidden">
          <img src={data.image} alt={data.alt} className="" />
        </div>
        <div className="flex-col sm:pl-8 text-textBlue ">
          <div className="mb-6">
            <h1 className="mb-4 font-title text-xl">Product</h1>
            <p>{data.product}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-xl">
              Step 1: Research and Discovery
            </h1>
            <p>{data.step1}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-xl">
              Step 2: Coding and User Testing
            </h1>
            <p>{data.step2}</p>
          </div>
          <div className="mb-6">
            <h1 className="mb-4 font-title text-xl">Challenge</h1>
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
    </>
  );
};
