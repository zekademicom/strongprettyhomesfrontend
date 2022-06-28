
import { Col, Container, Row } from "react-bootstrap";

import { BsTextareaResize } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import SwiperImageProperty from "./swiper-image-property";


// arabaya tiklayinca arabanin detayi hem popularcars d hem araba sayfasinda arabaya tiklayinca detay gelsin diyorsak bunu component vehicle-card da yapmaliyiz
const PropertyDetails = ({ property }) => {

  const {
    id,title,description,category,type,bedrooms,bathrooms,garages,area,price,location,address,country,city,district,createDate,status,image
  } = property;

  console.log(property);


  const imageSrc = `${process.env.REACT_APP_API_URL}/files/display/${image[0]}`;

  return (
    <>
  
    <Container className="property-details">
      <Row className="align-items-center">
        {/* araba bilgilerini ortala */} 

        <Col md={6}>
        <SwiperImageProperty images={imageSrc}/>
        </Col>
       
    
        {/* <Col md={6}>
           
       
          <img src={imageSrc} className="img-fluid" alt={type} />
           className="img-fluid"====responsive 
          <div className="price">
            ${price} 
          </div>
        </Col> */}
        <Col md={6}>
          <ul>
            <li>
              Title : {title}
            </li>
            
                Description : {description}
            
          
            <li>
            Category : {category} 
            </li>
            <li>
              Type : {type} 
            </li>
            <li>
             <MdOutlineBedroomParent/> Bedrooms : {bedrooms} beds
            </li>
            <li>
             <BiBath/> Bathrooms : {bathrooms} baths
            </li>
            <li>
             <GiHomeGarage/> Garages : {garages} 
            </li>
            <li>
            <BsTextareaResize/>Area : {area} m2
            </li>
            <li>
            <MdLocationOn /> Location : {location} 
            </li>
            <li>
               Address : {address} 
            </li>
            <li>
             Country :  {country} 
            </li>
            <li>
              District :  {district}
            </li>
            <li>
            <FaCity/> City : {city}
            </li>
            <li>
              {createDate}
            </li>
            <li>
              {status} 
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default PropertyDetails;
