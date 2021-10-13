import React from "react";

export const Intro = () => {
  //pb-6
  return (
    <section className="pb-24">
      <div>
        <h1 className="text-textBlue font-paragraph lg:text-3xl text-2xl font-bold mt-4">
          Welcome to my portfolio.
        </h1>
        {/* <p className="text-textBlue font-paragraph text-base lg:text-lg mt-4 xl:w-p649 md:w-p618 leading-relaxed">
          I’m an ambitious individual who’s looking for a
          <span className="text-pinkem font-extraboldfont-bold"> React </span>
          developer role. I am currently based in Brighton, spending most of my
          days learning the basics of several modern languages, tools and
          attending Codebar Brighton. 
        </p> */}
        <p className="text-textBlue font-paragraph text-base lg:text-lg mt-4 xl:w-p649 md:w-p618 leading-relaxed">
          Hi, my name is Marion a{" "}
          <span className="text-pinkem font-extraboldfont-bold"> React </span>{" "}
          developer who likes to take on new challenges to learn new skills as
          well as pay attention to the UI and UX when building websites.
        </p>
      </div>
    </section>
  );
};
