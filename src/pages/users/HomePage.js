import React from "react";
import PopularProperties from "../../components/user/home/popular-properties.js/popular-property";
import Slider from "../../components/user/home/slider/slider";
import Testimonals from "../../components/user/home/testimonals/testimonals";
import WhyUs from "../../components/user/home/whyus/whyus";
import Spacer from "../../components/user/common/spacer/spacer";
import OurPartners from "../../components/user/common/ourpartners/ourpartners";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Spacer />
      <PopularProperties />
      <Spacer />
      <WhyUs />
      <Spacer />
      <Testimonals />
      <Spacer />
      <OurPartners />
      <Spacer />
    </>
  );
};

export default HomePage;
