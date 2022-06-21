import React from "react";
import { Form, Button } from "react-bootstrap";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <div className="active">Rent</div>
        <div className="">Sale</div>
      </div>
      <Form className="search-form">
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Type something" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Select id="disabledSelect">
            <option>Property Category</option>
            <option>Villa</option>
            <option>House</option>
            <option>Land</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Location" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Min Price" />
          
          <Form.Control type="text" placeholder="Max Price" />
        </Form.Group>
        <Button className="w-100 btn btn-primary btn-lg" variant="primary" type="button">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
