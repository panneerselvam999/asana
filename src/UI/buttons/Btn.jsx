import React from "react";

const Btn = ({ content, type }) => {
    return (
        <>
            {/* <button className="black-btn">{content}</button> */}
            <button className={type}>{content}</button>
        </>
    );
};

export default Btn;
