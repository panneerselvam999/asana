// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const CarouselCard = ({ propData }) => {
//   return (
//     <div
//       key={propData.id}
//       className="h-[340px] w-72 overflow-y-hidden border p-0 cardMainDiv"
//     >
//       <div className="duration-300 hover:-translate-y-16 cardInnerDiv">
//         <div>
//           <img src={propData.img} />
//         </div>
//         <div className="flex flex-col h-52 p-3 justify-between bg-white gap-5 border">
//           <div className="">
//             <h5 className="text-2xl">{propData.title}</h5>
//             <p>{propData.des}</p>
//           </div>
//           <div className="cardLinkDiv">
//             <span className="flex items-center">
//               Read Case Studys <FaArrowRight className="text-sm" />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarouselCard;


///////////////////////////////////////////////
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CarouselCard = ({ propData }) => {
    return (
        <div
            className="h-[330px] w-72 overflow-y-hidden border p-0 cardMainDiv"
        >
            <div className="duration-300 hover:-translate-y-16 cardInnerDiv">
                <div>
                    <img src={propData.img} />
                </div>
                <div className="flex flex-col h-52 p-3 justify-between bg-white gap-5 border">
                    <div className="">
                        <h5 className="text-2xl">{propData.title}</h5>
                        <p>{propData.des}</p>
                    </div>
                    <div className="cardLinkDiv">
                        <span className="flex items-center text-sm ">
                            Read Case Studys <FaArrowRight className="text-sm" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard;
