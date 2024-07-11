import React from "react";
import Btn from "../../UI/buttons/Btn";

const GetStartedDown = () => {
  return (
    <div className="mt-6 md:mt-8 xl:mt-10">
      <div>
        <h2 className="mx-auto w-full text-center text-3xl font-semibold tracking-tighter md:text-6xl lgs:min-w-[760px]">
          The only platform that can support your company at any scale
        </h2>
      </div>
      <div className="text-center mt-12">
        <Btn type={"black-btn"} content={"Get Started"} />
      </div>
    </div>
  );
};

export default GetStartedDown;
