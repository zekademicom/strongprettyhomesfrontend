import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import testimonals from "./testimonals.json";
import "./testimonals.css";
import "swiper/css";
import "swiper/css/pagination";
import Testimonal from "./testimonal";
import SectionHeader from "../section-header/section-header";

const Testimonals = () => {
  return (
    <section className="testimonals">
      <Container>
        <Row>
          <Col>
          <SectionHeader title="Testimonals" desc="Here could be a nice sub title" />
            <Swiper
              modules={[Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {testimonals.map((testimonal, index) => (
                <SwiperSlide key={index}>
                  <Testimonal {...testimonal} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;
