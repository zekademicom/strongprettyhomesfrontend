import React from "react";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

const SearchBar = () => {
  return (

    <Container className="container-fluid">
      <Row className="search-form g-5">
        <Col lg={3}>
        <input type="text" name="name" placeholder="Type something" size={30}/>
          {/* <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Type something"/>
          </Form.Group> */}
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-2">
            <Form.Select id="disabledSelect">
              <option>Property Category</option>
              <option>Villa</option>
              <option>House</option>
              <option>Land</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-2">
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>
        </Col>
        <Col lg={1}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Min Price"/>
          </Form.Group>
        </Col>
        <Col lg={1}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Max Price" />
          </Form.Group>
        </Col>
        <Col lg={1}><BsThreeDotsVertical/>Advanced</Col>
        <Col lg={2}>
          <Button
            className="btn btn-primary btn-lg"
            variant="primary"
            type="button"
          >
           <AiOutlineSearch/> Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
