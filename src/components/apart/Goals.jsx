import React from "react";
import Btn from "../../UI/buttons/Btn";

const Goals = () => {
    return (
        <section className="w-full px-6 md:px-10 xl:px-20">
            <div>
                <h1 className="py-12 text-3xl font-semibold tracking-tighter md:py-16 md:text-6xl xl:py-20">
                    What sets Asana apart
                </h1>
            </div>
            <div className="gap-12 pb-12 pt-6 md:pb-16 md:pt-8 lgs:flex lgs:py-16 xl:py-20">
                <div className="w-full lgs:w-1/2">
                    <h4 className="sub-heading">More clarity and accountability</h4>
                    <p className="mb-8 mt-2 text-base md:text-xl">
                        Connect strategic goals to the teams that help achieve them. See
                        progress in real time, update stakeholders, and keep the company on
                        track.
                    </p>
                    <Btn type={"white-btn"} content={"Learn about goals"} />
                </div>
                <div className="mt-10 w-full lgs:mt-0 lgs:w-1/2">
                    <img src="img/goals.webp" alt="" />
                </div>
            </div>
            <hr className="my-4 border-t border-gray-300" />
            <div className="gap-12 pb-12 pt-6 md:pb-16 md:pt-8 lgs:flex lgs:py-16 xl:py-20">
                <div className="w-full lgs:w-1/2">
                    <h4 className="sub-heading">Greater impact with AI</h4>
                    <p className="mb-8 mt-2 text-base md:text-xl">
                        AI has joined the team to help every organization work smarter.
                        Drive greater clarity, impact, and scale with Asana AI, powered by
                        the Work Graph®.
                    </p>
                    <Btn type={"white-btn"} content={"Learn about goals"} />
                </div>
                <div className="mt-10 w-full lgs:mt-0 lgs:w-1/2">
                    <img src="img/ai.webp" alt="" />
                </div>
            </div>
            <hr className="border-t border-gray-300" />
        </section>
    );
};

export default Goals;
