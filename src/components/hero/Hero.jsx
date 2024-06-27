import React from "react";
import HeroImg from "./HeroImg";
import Btn from "../../UI/buttons/Btn";

const Hero = () => {
  return (
    <div className="p-6 border border-black w-full bg-violet-600">
      <div className="mt-28 flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="max-w-[680px] px-10 text-4xl font-semibold tracking-tighter sm:p-0 md:text-7xl">
          The #1 AI work management platform
        </h1>
        <p className="max-w-[680px] px-10 text-base sm:p-0 md:text-xl">
          With Asana, you can drive clarity and impact at scale by connecting
          work and workflows to company-wide goals.
        </p>
        <div className="mt-6 flex gap-6">
          <Btn content={"Get started"} type={"black-btn"} />
          <Btn content={"See how it works"} type={"white-btn"} />
        </div>
        <HeroImg />
      </div>
    </div>
  );
};

export default Hero;
