import React from "react";
import { Asana, AboutUS, Learn, Workflow, Resources } from "../../data/footer";

const FooterMain = () => {

    const footerHead = [Asana, AboutUS, Learn, Workflow, Resources];

    return (
        <section className="w-full bg-[#690031] px-6 pb-12 md:px-10 md:pb-16 xl:px-20 xl:pb-20">
            <div></div>
        </section>
    );
};

export default FooterMain;
