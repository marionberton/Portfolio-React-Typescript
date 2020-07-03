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
  };
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const Content: React.FC<Props> = ({ data, onClick, onKeyPress }) => {
  return (
    <>
      <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex={0}>
        <img className="ml-auto cursor-pointer" src={close} alt="close" />
      </div>

      <div className="flex flex-row ">
        <div>
          <img src={data.image} alt={data.alt} />
        </div>
        <div className="flex-col pl-8 text-textBlue">
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
            <p className="inline-block mr-3"> {data.website}</p>
            <p className="inline-block">{data.github}</p>
          </div>
        </div>
      </div>
    </>
  );
};
