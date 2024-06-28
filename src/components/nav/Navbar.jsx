import React from "react";

const Navbar = () => {
    return (
        <section className="sticky top-0 w-full bg-white text-black drop-shadow-md xl:px-20">
            <nav
                className="mx-auto flex h-14 w-full items-center justify-between px-4 xl:px-0"
                id="nav-bar "
            >
                <div className="flex items-center space-x-4">
                    <div className="text-xl font-bold">
                        <img src="icons/asana-logo-name.svg" alt="asana-logo-name.svg" />
                    </div>
                    <div className="hidden xl:block">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#">Features</a>
                            </li>
                            <li>
                                <a href="#">Solutions</a>
                            </li>
                            <li>
                                <a href="#">Resources</a>
                            </li>
                            <li>
                                <a href="#">Enterprise</a>
                            </li>
                            <li>
                                <a href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-center space-x-4">
                    <div>
                        <img
                            src="icons/internet.svg "
                            alt="internet"
                            className="hidden h-5 w-5 sm560:block"
                        />
                    </div>
                    <div>
                        <a href="#">
                            <img
                                src="icons/user.svg"
                                alt="user svg"
                                className="hidden h-7 w-7 stroke-[6px] sm560:block sm640:hidden xl:block xlAbove:hidden"
                            />
                            <span className="hidden sm640:block xl:hidden xlAbove:block">
                                Login
                            </span>
                        </a>
                    </div>
                    <span className="hidden opacity-45 sm560:block">|</span>
                    <div>
                        <a href="#">
                            <img
                                src="icons/mail.svg"
                                alt="Internet svg"
                                className="hidden h-7 w-7 sm560:block sm640:hidden xl:block xlAbove:hidden"
                            />
                            <span className="hidden sm640:block xl:hidden xlAbove:block">
                                Contact sales
                            </span>
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
        </section>
    );
};

export default Navbar;
