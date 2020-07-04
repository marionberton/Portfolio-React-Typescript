import React from 'react';

export const Intro = () => {
  return (
    <section className="pb-6">
      <div className="">
        <h1 className="text-textBlue font-paragraph text-2xl font-bold mt-4">
          Welcome to my portfolio.
        </h1>
        <p className="text-textBlue font-paragraph text-base mt-4 md:w-2/3 leading-relaxed">
          I am a developer with the focus on building websites with
          <span className="text-pinkem font-extraboldfont-bold"> React</span>. I
          am currently based in Brighton, spending most of my days on learned
          the basics of several modern languages and tools.
        </p>
      </div>
    </section>
  );
};
