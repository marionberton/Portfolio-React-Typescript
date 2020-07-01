import React from 'react';

import { ProjectItem } from './work-item';
import { PROJECTS } from '../../mock/Projects';

export const Projects = () => {
  return (
    <section className="pb-6">
      <div className="">
        <h1 className="text-titleMauve font-title text-3xl my-4">Work</h1>

        <div className="flex flex-row justify-between">
          {PROJECTS.map((item) => {
            const { image, title, description, alt } = item;
            return (
              <ProjectItem
                key={title}
                image={image}
                title={title}
                description={description}
                alt={alt}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
