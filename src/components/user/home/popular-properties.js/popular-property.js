import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PropertyCard from "../../common/property-card/PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useStore } from "../../../../store";
// import properties from "./property.json"




const PopularProperties = () => {

  const { propertyState } = useStore();
  const { properties } = propertyState;

  return (
    <>
    <section className="popular-property">
    <Container>
      <Row className="m-0">
      <Col className="d-mg-block" > 
        <Swiper 
        modules={[Pagination]}
        // spaceBetween={25}
        slidesPerView={3}
        // pagination={{ clickable: true }}
        >
        {properties.map((property, index) => (
          
          <SwiperSlide key={index}>
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