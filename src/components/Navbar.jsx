import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen border border-black text-black bg-gray-500">
            <nav className="container mx-auto flex items-center justify-between p-2">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-white">
                        <img src="icons/asana-logo-name.svg" alt="asana-logo-name.svg" />
                    </div>
                    <div className="hidden xl:block">
                        <ul className="flex space-x-4 ">
                            <li>
                                <a href="#" className="text-white">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Solutions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Resources
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Enterprise
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white">
                                    Pricing
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center space-x-4 justify-center"> 
                    <div>
                        <img src="icons/internet.svg " alt="internet" className="h-7 w-7" />
                    </div>
                    <div>
                        <a href="#" className="text-white">
                            <img
                                src="icons/user.svg"
                                alt="Internet svg"
                                className="xlAbove:hidden hidden h-7 w-7 stroke-[6px] xl:block"
                            />
                            <span className="xlAbove:block xl:hidden">Login</span>
                        </a>
                    </div>
                    <span className=" opacity-45">|</span>
                    <div>
                        <a href="#" className="text-white">
                            <img
                                src="icons/mail.svg"
                                alt="Internet svg"
                                className="xlAbove:hidden hidden h-7 w-7 xl:block"
                            />
                            <span className="xlAbove:block xl:hidden">Contact sales</span>
                        </a>
                    </div>
                    <button className="rounded bg-black px-4 py-2 text-sm font-bold text-white">
                        Get Started
                    </button>
                    <div>
                        <img
                            src="icons/menu.svg"
                            alt="menu.svg"
                            className="h-7 w-7 xl:hidden"
                        />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
