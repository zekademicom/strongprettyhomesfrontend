import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./properties-details.css";
import { RiGasStationFill, RiCarLine, RiCaravanLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiJoystick, GiCalendarHalfYear } from "react-icons/gi";

// arabaya tiklayinca arabanin detayi hem popularcars d hem araba sayfasinda arabaya tiklayinca detay gelsin diyorsak bunu component vehicle-card da yapmaliyiz
const PropertiesDetails = ({ property }) => {
  const {
    id,
    image,
    pricePerHour,
    model,
    fuelType,
    airConditioning,
    doors,
    luggage,
    seats,
    transmission,
    age
  } = property;

  console.log(property);

  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <Container className="property-details">
      {/* ??????? */}
      <Row className="align-items-center">
        {/* araba bilgilerini ortala */}
        <Col md={6}>
          <img src={imageSrc} className="img-fluid" alt={model} />
          {/* className="img-fluid"====responsive */}
          <div className="price">
            ${pricePerHour} <span> per hour</span>
          </div>
        </Col>
        <Col md={6}>
          <ul>
            <li>
              <RiGasStationFill /> {fuelType}
            </li>
            {airConditioning && (
              <li>
                <IoIosSnow /> Air Conditioning
              </li>
            )}
            <li>
              <RiCarLine /> {doors} doors
            </li>
            <li>
              <RiCaravanLine /> {luggage} lt
            </li>
            <li>
              <MdOutlineAirlineSeatReclineExtra /> {seats} seats
            </li>
            <li>
              <GiJoystick /> {transmission} transmission
            </li>
            <li>
              <GiCalendarHalfYear /> Age {age}
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default PropertiesDetails;
