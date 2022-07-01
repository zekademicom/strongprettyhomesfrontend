import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "../../common/property-card/PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useStore } from "../../../../store";
// import properties from "./property.json"
import "./popular-property.css";

const PopularProperties = () => {
  const { propertyState } = useStore();
  const { properties } = propertyState;
  console.log(properties);

  return (
    <>
      <section className="popular-property">
        <Container className="">
          <Swiper
            className="swiper-popular"
            breakpoints={{
              100: {
                slidesPerView: 1,
              },
              970: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination]}
            // spaceBetween={180}
            slidesPerView={3}
            // pagination={{ clickable: true }}
          >
            {properties.map((property, index) => (
              <SwiperSlide key={index} className="swipers">
                <PropertyCard property={property} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
};

export default PopularProperties;
