import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "../../common/property-card/PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { useStore } from "../../../../store";
// import properties from "./property.json"
// import "./popular-propert.css";


const PopularProperties = () => {

  const { propertyState } = useStore();
  const { properties } = propertyState;

  return (
    <>
    <section className="popular-property">
    <Container>
      <Row >
      <Col > 
        <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        spaceBetween={-80}
        // slidesPerView={3}
        // pagination={{ clickable: true }}
        >
        {properties.map((property, index) => (
          
          <SwiperSlide key={index} md={6} lg={4} >
          <PropertyCard property={property} />
          </SwiperSlide>
        ))}
        </Swiper>
      </Col>
      </Row>
    </Container>
    </section>
   </>

  );
};

export default PopularProperties;
