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
        <section className="w-full bg-[#F3F3F3] p-12 xl:px-20">
            <div>
                <div>
                    <h1 className="mdl:w-[820px] pb-10 pt-20 text-6xl font-semibold tracking-tighter">
                        See how Asana connects work across different departments
                    </h1>
                    <div>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={` mr-5 hidden lgs:inline-block cursor-pointer rounded-full border px-6 py-5 text-xl font-semibold text-gray-800 ${activeMenu === item ? "border-none bg-[#F7DEE3] text-[#690031]" : ""}`}
                                onClick={() => setActiveMenu(item)}
                            >
                                    {item}
                            </div>
                        ))}

                        
                        <select
                            className="lgs:hidden custom-select w-3/4 border py-3 pr-4 ps-4"
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
