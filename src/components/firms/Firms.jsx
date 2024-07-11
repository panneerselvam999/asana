import React from "react";
import { firmData } from "../../data/firm";
import FirmsCard from "./FirmsCard";

const Firms = () => {
    return (
        <section className="w-full px-5 py-12 md:px-10 md:py-16 xl:px-20 xl:py-20">
            <div>
                <div className="pb-6 md:pb-8 xl:pb-10">
                    <h2 className="text-3xl font-semibold tracking-tighter md:text-6xl mdl:w-[820px]">
                        Recognized as a leader by top analyst firms
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 lgs:grid-cols-3 lgs:gap-5 ">
                    {
                        firmData.map(data => (
                            <FirmsCard firmData={data} key={data.id} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Firms;
