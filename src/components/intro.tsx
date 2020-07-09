import React from 'react';

export const Intro = () => {
  return (
    <section className="pb-6">
      <div className="">
        <h1 className="text-textBlue font-paragraph text-2xl font-bold mt-4">
          Welcome to my portfolio.
        </h1>
        <p className="text-textBlue font-paragraph text-base mt-4 md:w-2/3 leading-relaxed">
          I’m an ambitious individual who’s looking for her first
          <span className="text-pinkem font-extraboldfont-bold"> React </span>
          developer role. I am currently based in Brighton, spending most of my
          days learning the basics of several modern languages, tools and
          attending Codebar Brighton.
        </p>
      </div>
    </section>
  );
};
