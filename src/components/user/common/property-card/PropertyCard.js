import React from "react";
import { Card } from "react-bootstrap";
import { BiBath } from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import { BsTextareaResize } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { CgHeart } from "react-icons/cg";
import "./property-card.css";
// import { useNavigate } from "react-router-dom";

const PropertyCard = () => {
  // const { id, title, price, description, bathrooms, bedrooms, location,area } = property;
  let image = require(`../../../../assets/img/properties/fp1.jpg`);
  // const navigate = useNavigate();

  return (
    <Card variant="top" className="property-card">
      {/* onClick={()=> navigate(`/properties/${id}`)} */}
      <div className="image-container">
        <Card.Img variant="top" src={image} />
        <span className="type">
          <span>For rent</span>
        </span>

        <div class="bottom-features">
          <div class="price">$78000</div>
          <div class="like">
            {" "}
            <CgHeart />
          </div>
        </div>
      </div>

      <Card.Body className="card-body">
        <Card.Title className="title">Apartement</Card.Title>
        <Card.Title className="desc">Renovated Apartement</Card.Title>
        <Card.Title className="location">
          <MdLocationOn />
          location
        </Card.Title>
        <div>
          <ul className="row g-4">
            <li className="col-4">
              <RiHotelBedLine /> beds
            </li>
            <li className="col-4">
              <BiBath /> baths
            </li>
            <li className="col-4">
              <BsTextareaResize /> m²
            </li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
