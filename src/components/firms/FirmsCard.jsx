import React from "react";

const FirmsCard = ({ firmData }) => {
    return (
        <div>
            <div>
                <img src={firmData.img} alt="" className="w-full" />
            </div>
            <div>
                <p>{firmData.des}</p>
            </div>
        </div>
    );
};

export default FirmsCard;
