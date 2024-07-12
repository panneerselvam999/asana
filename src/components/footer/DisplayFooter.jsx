import React from "react";

const DisplayFooter = ({ data }) => {
  return (
    <div className="mb-10 flex flex-col gap-4 text-xs xl:text-base">
      {data.map((getData) => (
        <div key={getData.id} className="inline-block">
          <a href="" className="hover:underline">
            {getData.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default DisplayFooter;
