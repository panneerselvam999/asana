import React from "react";
import Btn from "../../UI/buttons/Btn";

const Integrations = () => {
    return (
        <section className="w-full px-5 py-12 md:px-10 md:py-16 xl:px-20 xl:py-20">
            <div className="w-full gap-10 rounded-2xl bg-[#CBEFFF] p-6 md:flex md:flex-row-reverse md:p-10 xl:p-20">
                <div className="flex w-full flex-col justify-center gap-5 md:w-1/2">
                    <h4 className="sub-heading">Connect over 300 integrations</h4>
                    <p className="text-base md:text-xl">
                        Asana connects with the enterprise tools your organization already
                        uses, right out of the box.
                    </p>
                    <div>
                        <Btn content={"See all integrations"} type={"gray-btn"} />
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="img/integrations.webp" alt="" className="" />
                </div>
            </div>
        </section>
    );
};

export default Integrations;
