import React, { useState } from 'react'

import * as Yup from "yup";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import MaskedInput from "react-maskedinput";
import {
  Form,
  Button,
  Spinner,
  Row,
  Col,
  ButtonGroup,
  Card,
  FormCheck,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createUser } from '../../../api/admin-user-service';

export const AdminUserNew = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    zipCode: "",
    password: "",
    role:[],   
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Please enter first name"),
    lastName: Yup.string().required("Please enter last name"),
    phoneNumber: Yup.string()
      .required("Please enter phone number")
      .test(
        "includes_",
        "Please enter a valid phone number",
        (value) => value && !value.includes("_")
      ),
    email: Yup.string().email().required("Please enter email"),
    address: Yup.string().required("Please enter address"),
    zipCode: Yup.string().required("Please enter zip code"),
    password: Yup.string().required("Please enter password"),
    role: Yup.array().required("Please select a role"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await createUser(values);
      toast("User was created successfully");
      formik.resetForm();
    } catch (err) {
      console.log(err);
      toast(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Card>
        <Card.Body>
          <Row>
            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter first name"
                {...formik.getFieldProps("firstName")}
                isInvalid={!!formik.errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                {...formik.getFieldProps("lastName")}
                isInvalid={!!formik.errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                as={MaskedInput}
                mask="(111) 111-1111"
                placeholder="Enter phone number"
                {...formik.getFieldProps("phoneNumber")}
                isInvalid={!!formik.errors.phoneNumber}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.phoneNumber}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                {...formik.getFieldProps("address")}
                isInvalid={!!formik.errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                {...formik.getFieldProps("zipCode")}
                isInvalid={!!formik.errors.zipCode}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.zipCode}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formik.values.email}
                isInvalid={!!formik.errors.email}
                {...formik.getFieldProps("email")}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                {...formik.getFieldProps("password")}
                isInvalid={!!formik.errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md={4} lg={3} className="mb-3">
              <Form.Label>Role</Form.Label>

              <div className="mb-3">
                <Form.Check
                  inline
                  label="Customer"
                  type="checkbox"
                  name="role"
                  id="customer"
                  value="Customer"
                  checked={formik.values.role.includes("Customer")}
                  onChange={formik.handleChange}
                />
                <Form.Check
                  inline
                  label="Admin"
                  type="checkbox"
                  name="role"
                  id="admin"
                  value="Administrator"
                  checked={formik.values.role.includes("Administrator")}
                  onChange={formik.handleChange}
                />
              </div>
              <Form.Control.Feedback type="invalid">
                {formik.errors.role}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <div className="text-end">
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" type="submit" disabled={loading}>
                {loading && (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
                Create
              </Button>
              <Button
                variant="secondary"
                type="button"
                onClick={() => navigate("/admin/users")}
              >
                Cancel
              </Button>
            </ButtonGroup>
          </div>
        </Card.Body>
      </Card>
    </Form>
  );
};
