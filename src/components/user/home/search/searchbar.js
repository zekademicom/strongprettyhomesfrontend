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
      <div className="status-bar">
        <div className={isActive ? 'active' : 'passive'} onClick={handleClick}>Rent</div>
        <div className={isActive ? 'passive' : 'active'} onClick={handleClick}>Sale</div>
      </div>
        <div className="search-bar transparent">
          <Row className="search-form g-3">
            <Col   className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Type something" />
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-2">
                <Form.Select id="disabledSelect" {...formik.getFieldProps("category")}>
                  <option>Category</option>
                  <option value="VILLA">Villa</option>
                  <option>House</option>
                  <option>Land</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Min Price" {...formik.getFieldProps("minPrice")}/>
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Max Price" {...formik.getFieldProps("maxPrice")}/>
              </Form.Group>
            </Col>
            <Col className="lg-2">
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
            <Col className="lg-2">
              <Button className="btn btn-lg" variant="primary" type="button">
                <AiOutlineSearch /> Search
              </Button>
            </Col>
          </Row>
        </div>
      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
        <div className="transparent">
      <div className="search-bar">
        <Row className="search-form g-3">
          <Col className="lg-2">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Bedrooms" {...formik.getFieldProps("bedrooms")}/>
            </Form.Group>
          </Col>
          <Col  className="lg-2">
            <Form.Group className="mb-2">
              <Form.Control type="text" placeholder="Bathrooms" {...formik.getFieldProps("bathrooms")}/>
            </Form.Group>
          </Col>
          <Col className="lg-2">
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Location"  {...formik.getFieldProps("location")}/>
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Country" {...formik.getFieldProps("country")}/>
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="City" {...formik.getFieldProps("city")}/>
            </Form.Group>
          </Col>
          <Col  className={currentPath === "/" ? "lg-2" : "lg-12"}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="District" {...formik.getFieldProps("district")}/>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </div>
        </div>
      </Collapse>
    </>
  );
};

export default SearchBar;
