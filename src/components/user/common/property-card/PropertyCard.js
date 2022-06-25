import React from "react";
import { Card } from "react-bootstrap";
import { BiBath } from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import { BsTextareaResize } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { CgHeart } from "react-icons/cg";
import "./property-card.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { useNavigate } from "react-router-dom";
import { useStore } from "../../../../store";

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    type,
    price,
    description,
    bathrooms,
    bedrooms,
    location,
    area,
    image,
  } = property;
  // let imagesrc = require(`../../../../assets/img/properties/${image}`);
  const navigate = useNavigate();
  // const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  const { propertyState } = useStore();
  const { properties } = propertyState;
  return (
    <>
      <Card
        variant="top"
        className="property-card"
        onClick={() => navigate(`/properties/${id}`)}
      >
        <div className="image-container">
          <Swiper
            modules={[Pagination]}
            // spaceBetween={25}
            slidesPerView={3}
            // pagination={{ clickable: true }}
          >
            {properties.map((item, index) => (
              <SwiperSlide key={index}>
                <Card.Img variant="top" src={item.image} />
                console.log(item);
                console.log(item.image);

              </SwiperSlide>
            ))}

            <span className="type">
              <span>{type}</span>
            </span>

            <div class="bottom-features">
              <div class="price">${price}</div>
              <div class="like">
                {" "}
                <CgHeart />
              </div>
            </div>
          </Swiper>
        </div>

        <Card.Body className="card-body ">
          <Card.Title className="title">{title}</Card.Title>
          <Card.Title className="desc">{description}</Card.Title>
          <Card.Title className="location">
            <MdLocationOn />
            {location}
          </Card.Title>
          <div>
            <ul className="row g-3">
              <li className="col-4">
                <RiHotelBedLine /> {bedrooms} beds
              </li>
              <li className="col-4">
                <BiBath /> {bathrooms} baths
              </li>
              <li className="col-4">
                <BsTextareaResize /> {area} m²
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PropertyCard;
