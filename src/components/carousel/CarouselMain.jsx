// import { FaArrowRight } from "react-icons/fa";
// import React, { useRef } from "react";
// import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import card from "../../data/card.json";
// import CarouselCard from "./CarouselCard";

// import { GrLinkNext } from "react-icons/gr";
// import { GrLinkPrevious } from "react-icons/gr";

// const CarouselMain = () => {
//     const showCount = card.cardData.length;
//     const slideRef = useRef(null);

//     function SampleNextArrow(props) {
//         const { className, style, onClick } = props;
//         console.log("next");
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "red" }}
//                 onClick={onClick}
//             />
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, style, onClick } = props;
//         console.log("prev");
//         return (
//             <div
//                 className={className}
//                 style={{ ...style, display: "block", background: "green" }}
//                 onClick={onClick}
//             />
//         );
//     }
//     const settings = {
//         className: "slider variable-width",
//         dots: false,
//         infinite: false,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         variableWidth: true,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,

//     };

//     return (
//         <section className="w-full bg-[#F3F3F3] px-6 py-6 md:px-10 md:py-8 xl:px-20 xl:py-10 relative">
//             <div className="absolute right-20 top-8 flex gap-6">
//                 <button
//                     onClick={() => slideRef.current.slickPrev()}
//                     className="rounded-lg border border-slate-300 p-4 duration-300 hover:bg-slate-300"
//                 >
//                     <GrLinkPrevious />
//                 </button>
//                 <button
//                     onClick={() => slideRef.current.slickNext()}
//                     className="rounded-lg border border-slate-300 p-4 duration-300 hover:bg-slate-300"
//                 >
//                     <GrLinkNext />
//                 </button>
//             </div>
//             <div>
//                 <h1 className="text-3xl font-semibold tracking-tighter md:text-6xl">
//                     The world’s top companies trust Asana
//                 </h1>
//                 <p>
//                     <a href="#" className="inline-flex items-center">
//                         See all case studies <FaArrowRight className="text-sm" />
//                     </a>
//                 </p>
//             </div>

//             <div>
//                 <div className="slider-container">
//                     <Slider {...settings}>
//                         {card.cardData.map((data) => (
//                             <CarouselCard propData={data} key={data.id} />
//                         ))}
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default CarouselMain;

////////////////////////////////////////////////////////////////////////////////

import { FaArrowRight } from "react-icons/fa";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import card from "../../data/card.json";
import CarouselCard from "./CarouselCard";

import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";

const CarouselMain = () => {
    const showCount = card.cardData.length;
    const slideRef = useRef(null);

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        console.log("next");
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}
            />
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        console.log("prev");
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green" }}
                onClick={onClick}
            />
        );
    }

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <section className="w-full bg-[#F3F3F3] px-6 py-6 pt-12 md:pt-16 xl:pt-20  md:px-10 md:py-8 xl:px-20 xl:py-10">
            <div>
                <h1 className="max-w-[800px] text-3xl font-semibold tracking-tighter md:text-6xl">
                    The world’s top companies trust Asana
                </h1>
                <p>
                    <a href="#" className="mt-16 inline-flex items-center font-bold">
                        See all case studies <FaArrowRight className="text-sm" />
                    </a>
                </p>
            </div>

            <div>
                <div className="slider-container">
                    <Slider ref={slideRef} {...settings}>
                        {" "}
                        {/* Changed line */}
                        {card.cardData.map((data) => (
                            <CarouselCard propData={data} key={data.id} />
                        ))}
                    </Slider>
                </div>
                <div className="flex gap-4">
                    <button
                        onClick={() => slideRef.current.slickPrev()}
                        className="rounded-full border border-slate-300 p-2 duration-300 hover:bg-slate-300"
                    >
                        <GrLinkPrevious />
                    </button>
                    <button
                        onClick={() => slideRef.current.slickNext()}
                        className="rounded-full border border-slate-300 p-2 duration-300 hover:bg-slate-300"
                    >
                        <GrLinkNext />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CarouselMain;
