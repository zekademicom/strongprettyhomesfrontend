import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const PropertyDetails = ({property}) => {

  const {id,type, price,bedrooms,bathrooms,category,district,city,country,description,location,area,image} = property;

  const imageSrc = `${process.env.REACT_APP_API_URL}/agentImg/display/${image[0]}`;

  return (
      <Container className="property-details">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={imageSrc} className="img-fluid" alt={description} />
          <div className="price">
            ${price} <span> per hour</span>
          </div>
        </Col>
        <Col md={6}>
          <ul>
            <li>
               {country}
            </li>
          
                {city}
         
            <li>
              {type} 
            </li>
            <li>
               {category} 
            </li>
            <li>
              {bedrooms} bedrooms  
            </li>
            <li>
           {bathrooms} bathrooms
            </li>
            <li>
              {area} m<sup>2</sup>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default PropertyDetails