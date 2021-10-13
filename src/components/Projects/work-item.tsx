import React from "react";

import { Card } from "../../shared/UIelement/Card";

export interface WorkProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLDivElement>) => void;
}

export const ProjectItem: React.FunctionComponent<WorkProps> = ({
  image,
  title,
  description,
  alt,
  onClick,
  onKeyPress,
}) => {
  //xl:w-1/4
  return (
    <Card className="lg:mb-0 mb-15 cursor-pointer sm:w-p360 md:w-p212 lg:w-100 xl:w-p245">
      <div
        className=" outline-none"
        onClick={onClick}
        onKeyPress={onKeyPress}
        role="button"
        tabIndex={0}
      >
        <div>
          <img src={image} alt={alt} className="w-2/3 h-auto" />
        </div>
        <div className="lg:p-11 p-16">
          <h1 className="xl:text-3xl text-xl font-title text-textBlue my-4">
            {title}
          </h1>
          <p className="xl:text-lg text-base text-textBlue font-paragraph">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
