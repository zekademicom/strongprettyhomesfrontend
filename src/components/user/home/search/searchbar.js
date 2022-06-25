import React, { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  ToggleButton,
  Collapse,
} from "react-bootstrap";
import "./searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import AdvanceSearch from "./advance-search";
import StatusBar from "./status-bar";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const currentPath = location.pathname;

  console.log(currentPath);


  return (
    <>
      <div>
        <StatusBar />
        <div className="search-bar transparent">
          <Row className="search-form g-3">
            <Col   className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Type something" />
              </Form.Group>
            </Col>
            <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <Form.Group className="mb-2">
                <Form.Select id="disabledSelect">
                  <option>Category</option>
                  <option value="VILLA">Villa</option>
                  <option>House</option>
                  <option>Land</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Min Price" />
              </Form.Group>
            </Col>
            <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Max Price" />
              </Form.Group>
            </Col>
            <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <ToggleButton
                className="advance-search-btn"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <BsThreeDotsVertical />
              </ToggleButton>
              <span>&nbsp;&nbsp; Advanced</span>
            </Col>
            <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
              <Button className="btn btn-lg" variant="primary" type="button">
                <AiOutlineSearch /> Search
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <AdvanceSearch />
        </div>
      </Collapse>
    </>
  );
};

export default SearchBar;
