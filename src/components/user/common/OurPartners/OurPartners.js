import React from "react";
import SectionHeader from "../../home/section-header/section-header";
import "./OurPartners.css";

const OurPartners = () => {
  return (
    <>
      <SectionHeader
        title="Our Partners"
        desc="We only work with the best companies around the globe"
      />

      <div className="Partners">
        <img src="img/partners/partner-01.png" />
        <img src="img/partners/partner-02.png" />
        <img src="img/partners/partner-03.png" />
        <img src="img/partners/partner-04.png" />
        <img src="img/partners/partner-05.png" />
      </div>
    </>
  );
};

export default OurPartners;
