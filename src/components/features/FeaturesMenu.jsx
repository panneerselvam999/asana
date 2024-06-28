import React from "react";
import fData from "../../data/features.json";
import Btn from "../../UI/buttons/Btn";

const FeaturesMenu = ({ activeMenu }) => {
    const getFeatureDataByName = (name) => {
        return fData.featureData.find((feature) => feature.name === name);
    };

    const featureData = getFeatureDataByName(activeMenu);

    if (!featureData) {
        return <div className="border border-black">Feature not found</div>;
    }

    return (
        <div className="lgs:flex w-full gap-10 p-4">
            <div className="lgs:w-1/2 w-full">
                <img src={featureData.img} alt={featureData.name} className="" />
            </div>
            <div className="lgs:w-1/2 lgs:pt-0 flex w-full flex-col justify-start gap-6 pt-10">
                <h2 className="text-3xl font-semibold">{featureData.title}</h2>
                <ul className="list-disc pl-6 text-xl">
                    {featureData.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
                <div>
                    <Btn content={featureData.btn} type={"black-btn"} />
                </div>
            </div>
        </div>
    );
};

export default FeaturesMenu;
