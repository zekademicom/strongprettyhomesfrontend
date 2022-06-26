import React from "react";
import Mission from "../../components/user/common/mission/mission";
import OurPartners from "../../components/user/common/OurPartners/ourpartners";
import PageHeader from "../../components/user/common/page-header/page-header";
import Spacer from "../../components/user/common/spacer/spacer";
import Testimonals from "../../components/user/home/testimonals/testimonals";
import WhyUs from "../../components/user/home/whyus/whyus";

const AboutPage = () => {
  return (

    <>
   
    <PageHeader title="About Us"/>
    <Spacer/>
    <Mission/>
    <Spacer/>
    <WhyUs/>
    <Spacer/>
    <Testimonals/>
    <Spacer/>
    <OurPartners/>
    <Spacer/>
    </>
  );
};

export default AboutPage;

