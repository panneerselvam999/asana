import React from "react";
import { FaArrowRight } from "react-icons/fa";

const GetStartedCard = ({ data }) => {
    return (
        <div>
            <div>
                <img src={data.img} alt="" className="w-full" />
            </div>
            <div className="mt-6">
                <p className="text-3xl font-semibold">{data.title}</p>
            </div>
            <div className="inline-flex items-center font-bold mt-8">
                <a href="" className="flex items-center ">
                    {data.link}
                    <FaArrowRight className="text-sm" />
                </a>
            </div>
        </div>
    );
};

export default GetStartedCard;
