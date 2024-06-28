import React, { useState } from "react";
import FeaturesMenu from "./FeaturesMenu";
// import fData from "../../data/features.json";

const Features = () => {
    const [activeMenu, setActiveMenu] = useState("Marketing");
    const menuItems = [
        "Marketing",
        "Operations",
        "IT",
        "Product",
        "Company-wide",
    ];

    const renderContent = () => {
        switch (activeMenu) {
            case "Marketing":
                return <FeaturesMenu activeMenu={activeMenu} />;
                break;
            case "Operations":
                return <FeaturesMenu activeMenu={activeMenu} />;
                break;
            case "IT":
                return <FeaturesMenu activeMenu={activeMenu} />;
                break;
            case "Product":
                return <FeaturesMenu activeMenu={activeMenu} />;
                break;
            case "Company-wide":
                return <FeaturesMenu activeMenu={activeMenu} />;
                break;

            default:
                break;
        }
    };

    return (
        <section className="w-full bg-[#F3F3F3] px-6 pb-12 md:px-10 md:pb-16 xl:px-20 xl:pb-20">
            <div>
                <div>
                    <h1 className="pb-6 pt-12 text-3xl font-semibold tracking-tighter md:pb-8 md:pt-16 md:text-6xl mdl:w-[820px] xl:pb-10 xl:pt-20">
                        See how Asana connects work across different departments
                    </h1>
                    <div>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`mr-5 hidden cursor-pointer rounded-full border px-6 py-5 text-xl font-semibold text-gray-800 lgs:inline-block ${activeMenu === item ? "border-none bg-[#F7DEE3] text-[#690031]" : ""}`}
                                onClick={() => setActiveMenu(item)}
                            >
                                {item}
                            </div>
                        ))}

                        <select
                            className="custom-select w-full border py-3 pr-4 ps-4 md:w-3/4 lgs:hidden"
                            name="features-dropdown"
                            value={activeMenu}
                            id="features-dropdown"
                            onChange={(e) => setActiveMenu(e.target.value)}
                        >
                            {menuItems.map((item, index) => (
                                <option value={item} key={index} name="features-dropdown">
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>{renderContent()}</div>
                </div>
            </div>
        </section>
    );
};

export default Features;
