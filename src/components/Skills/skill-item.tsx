import React from "react";

export interface Props {
  image: string;
  alt: string;
}
export const SkillItem: React.FunctionComponent<Props> = ({ image, alt }) => (
  <div className="mr-8 py-2">
    <img src={image} alt={alt} style={{ height: "35px", width: "auto" }} />
  </div>
);
