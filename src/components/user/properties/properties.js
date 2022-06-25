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
      <Row className="g-4">
        <Col>
          <SearchBar />
        </Col>
        <Col>
          {properties.map((property, index) => (
            <Col key={index}>
              <PropertyCard property={property} />
            </Col>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Properties;
