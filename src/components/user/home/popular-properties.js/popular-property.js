import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import { useStore } from "../../../../store";
import PropertyCard from "../../common/property-card/PropertyCard";

const PopularProperties = () => {
  // const { propertyState } = useStore();
  // const { properties } = propertyState;

  return (
    <section>
      <Container>
        <Row className="g-4">
          <Col>
            <PropertyCard />
          </Col>
          <Col>
            <PropertyCard />
          </Col>
          <Col>
            <PropertyCard />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PopularProperties;
