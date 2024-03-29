import React from "react";

import { SkillItem } from "./skill-item";
import { SKILLS } from "../../mock/logos";

export const Skills = () => {
  return (
    <section className="">
      <div className="">
        <h1 className="text-titleMauve font-title text-3xl md:my-4 lg:mt-0 lg:mb-10">
          Skills & Tools
        </h1>
        <div className="flex flex-wrap">
          {SKILLS.map((item) => {
            const { image, alt } = item;
            return <SkillItem key={alt} image={image} alt={alt} />;
          })}
        </div>
      </div>
    </section>
  );
};
