import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { TbSquareRoundedLetterXFilled } from "react-icons/tb";



const FooterBottom = () => {
    return (
        <section className="bg-[#710C3A] px-6 md:px-10 xl:px-20 py-10">
            <div className="text-white  flex flex-col xlAbove:flex-row justify-center items-center gap-8">
                <div><p className="hover:underline">© 2024 Asana, Inc.</p></div>
                <div><p className="flex items-center hover:underline"><TfiWorld /> English</p></div>
                <div><span className="hover:underline">Terms</span> <span>&</span> <span className="hover:underline">Privacy</span></div>
                <div className="flex gap-4" >
                    <div className="p-3 bg-black rounded-full hover:bg-white hover:text-black "><TbSquareRoundedLetterXFilled /></div>
                    <div className="p-3 bg-black rounded-full hover:bg-white hover:text-black "><FaLinkedinIn /></div>
                    <div className="p-3 bg-black rounded-full hover:bg-white hover:text-black "><FaInstagram /></div>
                    <div className="p-3 bg-black rounded-full hover:bg-white hover:text-black "><FaFacebookF /></div>
                    <div className="p-3 bg-black rounded-full hover:bg-white hover:text-black "><FaYoutube /></div>
                </div>
                <div className="flex gap-5">
                    <img className="h-10" src="img/App_Store.svg" alt="" />
                    <img className="h-10" src="img/Google_Play.svg" alt="" />
                </div>
            </div>
        </section>
    );
};

export default FooterBottom;
