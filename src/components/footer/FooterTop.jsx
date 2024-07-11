import React from "react";

const FooterTop = () => {
    return (
        <section className="bg-[#F3F3F3] px-6 py-6 md:px-10 md:py-8 xl:px-20 xl:py-10">
            <div className="flex flex-col gap-4 text-xs xl:px-28">
                <p>1. Accurate as of December 2023, includes free and paid users.</p>
                <p>
                    2. See the{" "}
                    <span className="font-semibold underline">
                        {" "}
                        2023 Gartner® Magic Quadrant™ for Collaborative Work Management
                        (CWM).
                    </span>{" "}
                    GARTNER is a registered trademark and service mark of Gartner, Inc.
                    and/or its affiliates in the U.S. and internationally, MAGIC QUADRANT
                    and PEER INSIGHTS are registered trademarks and The GARTNER PEER
                    INSIGHTS CUSTOMERS’ CHOICE badge is a trademark and service mark of
                    Gartner, Inc. and/or its affiliates and is used herein with
                    permission. All rights reserved.
                </p>
                <p>
                    3. See{" "}
                    <span className="font-semibold underline">
                        The Forrester Wave™: Collaborative Work Management Tools, Q4 2022
                        report.
                    </span>{" "}
                    The Forrester Wave: Collaborative Work Management Tools, Q4 2022. The
                    Forrester Wave is copyrighted by Forrester Research, Inc. Forrester
                    and Forrester Wave are trademarks of Forrester Research, Inc. The
                    Forrester Wave is a graphical representation of Forrester’s call on a
                    market and is plotted using a detailed spreadsheet with exposed
                    scores, weightings, and comments. Forrester does not endorse any
                    vendor, product, or service depicted in the Forrester Wave.
                    Information is based on best available resources. Opinions reflect
                    judgment at the time and are subject to change.
                </p>
                <p>
                    4. IDC MarketScape: Worldwide Collaborative Work Management 2023–2024
                    Vendor Assessment — Uniting Teams, Data, and AI for Flexible Work, Doc
                    #US49434923, December 2023
                </p>
            </div>
        </section>
    );
};

export default FooterTop;
