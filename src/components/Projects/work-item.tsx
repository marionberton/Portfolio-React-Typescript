import React from 'react';

import { Card } from '../../shared/UIelement/Card';

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
  return (
    <Card className="xl:w-1/4 custom cursor-pointer">
      <div onClick={onClick} onKeyPress={onKeyPress} role="button" tabIndex={0}>
        <div>
          <img src={image} alt={alt} className="w-2/3 h-auto" />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-title text-textBlue my-4">{title}</h1>
          <p className="text-lg text-textBlue font-paragraph">{description}</p>
        </div>
      </div>
    </Card>
  );
};
