import React from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ToggleButton,
} from "react-bootstrap";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";


const SearchBar = () => {

  return (
    <Container className="search-bar">
      <Row className="search-form g-3">
        <Col lg={2}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Type something" />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-2">
            <Form.Select id="disabledSelect">
              <option>Category</option>
              <option>Villa</option>
              <option>House</option>
              <option>Land</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Min Price" />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Max Price" />
          </Form.Group>
        </Col>
        <Col lg={2}>
          <ToggleButton className="advance-search">
            <BsThreeDotsVertical />
          </ToggleButton>
          <span> Advanced</span>
        </Col>
        <Col lg={2}>
          <Button className="btn btn-lg" variant="primary" type="button">
            <AiOutlineSearch /> Search
          </Button>
        </Col>
      </Row>
    </Container>
    
  );
};

export default SearchBar;
