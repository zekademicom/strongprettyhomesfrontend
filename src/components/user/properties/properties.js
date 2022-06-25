import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useStore } from "../../../store";
import PropertyCard from "../common/property-card/PropertyCard";
import SearchBar from "../home/search/searchbar";
import "./inside-search.css";

const Properties = () => {
  const { propertyState } = useStore();
  const { properties } = propertyState;

  return (
    <Container className="property-bar">
      <Row className="g-3 d-flex ">
        <Col lg={3}>
          <SearchBar />
        </Col>
        <Col lg={9}>
            {properties.map((property, index) => (
              <Col key={index} md={6} lg={4}>
                <PropertyCard property={property} />
              </Col>
         ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Properties;
