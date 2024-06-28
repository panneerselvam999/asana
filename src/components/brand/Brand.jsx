import React from "react";

const Brand = () => {
    return (
        <section className="w-full p-12 xl:px-20">

            <div className="w-full p-6 pb-10 xl:px-24 ">
                <p className="text-center text-xl font-normal md:text-3xl">
                    85% of Fortune 100 companies choose Asana¹
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center">
                    <div className="brand-style">
                        <img src="logos/Amazon.svg" alt="Amazon.svg" className="h-10 w-36" />
                    </div>
                    <div className="brand-style">
                        <img
                            src="logos/McKesson.svg"
                            alt="McKesson.svg"
                            className="h-10 w-36"
                        />
                    </div>
                    <div className="brand-style">
                        <img
                            src="logos/Johnson&Johnson.svg"
                            alt="Johnson&Johnson.svg"
                            className="h-10 w-36"
                        />
                    </div>
                    <div className="brand-style">
                        <img src="logos/Dell.svg" alt="Dell.svg" className="h-10 w-36" />
                    </div>
                    <div className="brand-style">
                        <img src="logos/merck.webp" alt="merck.webp" className="h-10 w-36" />
                    </div>
                    <div className="brand-style">
                        <img
                            src="logos/TOTO_black.webp"
                            alt="TOTO_black.webp"
                            className="h-10 w-36"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
