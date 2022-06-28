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

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { dispatchSearch } = useStore();
  const [isActive, setIsActive] = useState(false);
  const [type, setType] = useState("");

  const initialValues = {
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
    category: Yup.string().required("Please enter a category"),
    lowPrice: Yup.number(),
    highPrice: Yup.number(),
    bedrooms: Yup.number(),
    bathrooms: Yup.number(),
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
      district,
    } = valuesSearch;
    setLoading(true);
    console.log(valuesSearch);

    try {
      const response = await getSearchProperties(valuesSearch);
      dispatchSearch(setSearch(response.data));
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
    setType("RENT");
  };
  const handleClick2 = (event) => {
    setIsActive(false);
    setType("SALE");
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
                  <option>Category</option>
                  <option value="VILLA">Villa</option>
                  <option>House</option>
                  <option>Land</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Min Price"
                  {...formik.getFieldProps("minPrice")}
                />
              </Form.Group>
            </Col>
            <Col className="lg-2">
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Max Price"
                  {...formik.getFieldProps("maxPrice")}
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
                onClick={() => onSubmit()}
              >
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
