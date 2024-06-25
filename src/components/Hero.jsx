import React from "react";

const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center gap-6 border border-black text-center mt-36">
      <h1 className="text-4xl md:text-7xl font-semibold tracking-tighter">
        The #1 AI work management platform
      </h1>
      <p className="text-base md:text-xl">
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
