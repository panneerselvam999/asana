import React from "react";
import { Asana, AboutUS, Learn, Workflow, Resources } from "../../data/footer";
import DisplayFooter from "./DisplayFooter";

const FooterMain = () => {
  const footerHead = [Asana, AboutUS, Learn, Workflow, Resources];

  return (
    <section className="w-full bg-[#690031] p-6 text-white md:px-10 md:py-20 xl:px-20">
      <div className="xl:flex">
        <div className="m-6">
          <img src="icons/asana-bg.png" alt="" className="h-14 w-16 xl:w-20" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <div className="px-4">
            <h4 className="mb-8">Asana</h4>
            <DisplayFooter data={Asana} />
          </div>
          <div className="px-4">
            <h4 className="mb-8">About Us</h4>
            <DisplayFooter data={AboutUS} />
          </div>
          <div className="px-4">
            <h4 className="mb-8">Workflow Solutions</h4>
            <DisplayFooter data={Workflow} />
          </div>
          <div className="px-4">
            <h4 className="mb-8">Resources</h4>
            <DisplayFooter data={Resources} />
          </div>
          <div className="px-4">
            <h4 className="mb-8">Learn</h4>
            <DisplayFooter data={Learn} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterMain;
