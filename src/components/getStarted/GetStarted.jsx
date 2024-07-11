import React from "react";
import GetStartedUp from "./GetStartedUp";
import GetStartedDown from "./GetStartedDown";

const GetStarted = () => {
    return (
        <section className="w-full px-5 py-12 md:px-10 md:py-16 xl:px-20 xl:py-20">
            <GetStartedUp />
            <GetStartedDown />
        </section>
    );
};

export default GetStarted;
