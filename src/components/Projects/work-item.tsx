import React from 'react';
import { Card } from '../../shared/UIelement/Card';

export interface Props {
  image: string;
  alt: string;
  title: string;
  description: string;
}

export const ProjectItem: React.FunctionComponent<Props> = ({
  image,
  title,
  description,
  alt,
}) => {
  return (
    <Card className="w-1/4">
      <div>
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
