import React from "react";

const Navbar = () => {
    return (
        <div className="w-screen border border-black bg-gray-500 text-black">
            <nav className="container mx-auto flex items-center justify-between p-2">
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold text-white">
                        <img src="icons/asana-logo-name.svg" alt="asana-logo-name.svg" />
                    </div>
                    <div className="hidden xl:block">
                        <ul className="flex space-x-4">
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

                <div className="flex items-center justify-center space-x-4">
                    <div>
                        <img
                            src="icons/internet.svg "
                            alt="internet"
                            className="sm560:block hidden h-5 w-5"
                        />
                    </div>
                    <div>
                        <a href="#" className="text-white">
                            <img
                                src="icons/user.svg"
                                alt="user svg"
                                className="hidden sm560:block h-7 w-7 stroke-[6px] xl:block sm640:hidden xlAbove:hidden"
                            />
                            <span className="hidden sm640:block xl:hidden xlAbove:block">Login</span>
                        </a>
                    </div>
                    <span className="opacity-45 hidden sm560:block">|</span>
                    <div>
                        <a href="#" className="text-white">
                            <img
                                src="icons/mail.svg"
                                alt="Internet svg"
                                className="hidden  sm640:hidden sm560:block h-7 w-7 xl:block xlAbove:hidden"
                            />
                            <span className="hidden sm640:block xl:hidden xlAbove:block">Contact sales</span>
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
