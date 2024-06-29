import React from "react";
import Btn from "../../UI/buttons/Btn";

const Security = () => {
    return (
        <section className="w-full px-5 md:px-10 xl:px-20">
            <div>
                <h2 className="pt-12 text-3xl font-semibold tracking-tighter md:pt-16 md:text-6xl xl:pt-20">
                    A smarter way to scale
                </h2>
            </div>
            <div className="mt-6 gap-20 rounded-2xl bg-blue-900 p-10 md:mt-8 lgs:flex xl:mt-10">
                <div className="mb-6 flex flex-col gap-5 text-white lgs:mb-0 lgs:w-1/2">
                    <h4 className="sub-heading">Enterprise-grade security</h4>
                    <p className="text-base md:text-xl">
                        Ensure your company's data is completely secure and that you're in
                        compliance with the latest standards.
                    </p>
                    <div>
                        <Btn content={"Explore security"} type={"red-btn"} />
                    </div>
                </div>
                <div className="lgs:w-1/2">
                    <img src="img/security.webp" alt="" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Security;
