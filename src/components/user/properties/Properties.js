import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../../../store";
import PropertyCard from "../common/property-card/PropertyCard";

const Properties = () => {
  const { propertyState } = useStore();
  const { properties } = propertyState;
  return (
    <Container>
      <Row className="g-4">
        {properties.map((property, index) => (
          <Col key={index} md={6} lg={3}>
            <PropertyCard property={property} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Properties;
