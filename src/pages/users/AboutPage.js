import React from "react";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";
import Testimonals from "../../components/user/home/testimonals/testimonals";
import WhyUs from "../../components/user/home/whyus/whyus";

const AboutPage = () => {
  return (

    <>
    <PageHeader title=" About Us" />
    <Spacer/>
<WhyUs/>
<Spacer/>
<Testimonals/>
<Spacer/>
{/* <Team/> */}
<Spacer/>
    </>
  );
};

export default AboutPage;

