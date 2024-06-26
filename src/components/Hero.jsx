import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto mt-28 flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="max-w-[680px] px-10 text-4xl font-semibold tracking-tighter sm:p-0 md:text-7xl">
        The #1 AI work management platform
      </h1>
      <p className="max-w-[680px] px-10 text-base sm:p-0 md:text-xl">
        With Asana, you can drive clarity and impact at scale by connecting work
        and workflows to company-wide goals.
      </p>
      <div className="mt-6">
        <button className="black-btn">Get started</button>
        <button className="white-btn">See how it works</button>
      </div>
    </div>
  );
};

export default Hero;
