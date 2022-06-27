import React from "react";
import { Card } from "react-bootstrap";
import { BiBath } from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import { BsTextareaResize } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
// import { CgHeart } from "react-icons/cg";
import "./property-card.css";

import { useNavigate } from "react-router-dom";

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
    image
  } = property;

  const navigate = useNavigate();
  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <>

      <Card
        variant="top"
        className="property-card"
        onClick={() => navigate(`/properties/${id}`)}
      >
        <div className="image-container">
          <Card.Img variant="top" src={imageSrc} />
          <span className="type">
            <span>{type}</span>
          </span>


          {/* <div class="bottom-features"> */}
          <div class="price">${price}</div>
          {/* <div class="like">
              {" "}
              <CgHeart />
            </div> */}
          {/* </div> */}
        </div>

        <Card.Body className="card-body ">

          <div className="card-items">
            <div className="title">{title}</div>
            <h2 className="desc">{description}</h2>
            <div className="location"><MdLocationOn />
              {location}</div>
          </div>
          <div className="props">
            <span> <RiHotelBedLine />
              {bedrooms}  beds</span>
            <span> <BiBath />
              {bathrooms}  baths</span>
            <span> <BsTextareaResize />
              {area}  m²</span>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PropertyCard;
