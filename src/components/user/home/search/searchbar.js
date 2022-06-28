import React, { useState } from "react";
import {
  Form,
  Button,
  Row,
  Col,
  ToggleButton,
  Collapse,
  Spinner
} from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useStore } from "../../../../store";
import { AiOutlineSearch } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import "./searchbar.css";
import "./status-bar.css"
import { getSearchProperties } from "../../../../api/property-service";
import { setSearch } from "../../../../store/search/searchActions";
import { type } from "@testing-library/user-event/dist/type";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatchSearch } = useStore();
  const [isActive, setIsActive] = useState(false);

  const initialValues = {
    type: "",
    category: "",
    lowPrice: "",
    highPrice: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    country: "",
    city: "",
    district: "",
  };

  const validationSchema = Yup.object({
    type: Yup.string(),
    category: Yup.string(),
    lowPrice: Yup.number(),
    highPrice: Yup.number(),
    bedrooms: Yup.string(),
    bathrooms: Yup.string(),
    location: Yup.string(),
    country: Yup.string(),
    city: Yup.string(),
    district: Yup.string(),
  });

  const onSubmit = async (valuesSearch) => {
    const {
      type,
      category,
      lowPrice,
      highPrice,
      bedrooms,
      bathrooms,
      location,
      country,
      city,
      district
    } = valuesSearch;
    setLoading(true);

    try {
      dispatchSearch(setSearch(valuesSearch));
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const handleClick1 = (event) => {
    setIsActive(true);
    formik.setFieldValue("type", "RENT")
  };
  const handleClick2 = (event) => {
    setIsActive(false);
    formik.setFieldValue("type", "SALE")
  };

  return (
    <>
      <div>
        <div className="status-bar">
          <div
            className={isActive ? "active" : "passive"}
            onClick={handleClick1}
          >
            Rent
          </div>
          <div
            className={isActive ? "passive" : "active"}
            onClick={handleClick2}
          >
            Sale
          </div>
        </div>
    <Form className="search-form g-3" noValidate onSubmit={formik.handleSubmit}>
        <div className="search-bar transparent">
          <Row className="search-form g-3">
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Type something" />
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-2">
                <Form.Select
                  id="disabledSelect"
                  {...formik.getFieldProps("category")}
                >
                  <option value="">Category</option>
                  <option value="VILLA">Villa</option>
                  <option value="HOUSE">House</option>
                  <option value="LAND">Land</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Min Price"
                //   onValueChange={(values) => {
                //     values.preventDefault();
                //     const {  value } = values;
                //     formik.setFieldValue('minPrice', value);
                // }}
             {...formik.getFieldProps("lowPrice")}
                />
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Max Price"
                  {...formik.getFieldProps("highPrice")}
                />
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <ToggleButton
                className="advance-search-bt"
                size="sm"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                <BsThreeDotsVertical />
              </ToggleButton>
              <span>&nbsp;&nbsp; Advanced</span>
            </Col>
            <Col className="lg-2">
              <Button
                className="btn btn-lg"
                variant="primary"
                type="submit"
                onClick={() => navigate("/")}
              >
              {loading && <Spinner animation="border" size="sm" />}  <AiOutlineSearch /> Search
              </Button>
            </Col>
          </Row>
        </div>
        </Form>
      </div>
      
      <Collapse in={open}>
        <div id="example-collapse-text">
          <div className="transparent">
            <div className="search-bar">
              <Row className="search-form g-3">
                <Col className="lg-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Bedrooms"
                      {...formik.getFieldProps("bedrooms")}
                    />
                  </Form.Group>
                </Col>
                <Col className="lg-2">
                  <Form.Group className="mb-2">
                    <Form.Control
                      type="text"
                      placeholder="Bathrooms"
                      {...formik.getFieldProps("bathrooms")}
                    />
                  </Form.Group>
                </Col>
                <Col className="lg-2">
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Location"
                      {...formik.getFieldProps("location")}
                    />
                  </Form.Group>
                </Col>
                <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      {...formik.getFieldProps("country")}
                    />
                  </Form.Group>
                </Col>
                <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="City"
                      {...formik.getFieldProps("city")}
                    />
                  </Form.Group>
                </Col>
                <Col className={currentPath === "/" ? "lg-2" : "lg-12"}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="District"
                      {...formik.getFieldProps("district")}
                    />
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
