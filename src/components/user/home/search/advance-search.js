import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "./searchbar.css";

const AdvanceSearch = () => {

  const location = useLocation();

  const currentPath = location.pathname;

  console.log(currentPath);
  return (
    <div className="transparent">
      <div className="search-bar">
        <Row className="search-form g-3">
          <Col className="lg-2">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Bedrooms" />
            </Form.Group>
          </Col>
          <Col  className="lg-2">
            <Form.Group className="mb-2">
              <Form.Control type="text" placeholder="Bathrooms" />
            </Form.Group>
          </Col>
          <Col className="lg-2">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Location" />
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="District" />
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdvanceSearch;
