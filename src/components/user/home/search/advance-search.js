import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import './searchbar.css'

const AdvanceSearch = () => {
  return (
    <Container className="search-bar active">
    <Row className="search-form g-3">
      <Col lg={2}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Bedrooms" />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Form.Group className="mb-2">
          <Form.Control type="text" placeholder="Bathrooms" />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
      </Col>
      <Col lg={2}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="District" />
        </Form.Group>
      </Col>
    </Row>
  </Container>
  )
}

export default AdvanceSearch