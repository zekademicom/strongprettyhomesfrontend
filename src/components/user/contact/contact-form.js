import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import MaskedInput from "react-maskedinput";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Col, Container, Row , Card} from "react-bootstrap";
import "./contact.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
    phone: "",
    subject: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().required("Please enter your message"),
    phone: Yup.string()
      .required()
      .test(
        "includes_",
        "Please enter your phone number",
        (value) => value && !value.includes("_")
      ),
  });

  const onSubmit = (values) => {
    setLoading(true);

    setTimeout(() => {
      toast("Your message sent successfully");
      setLoading(false);
    }, 1000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
 <>
    <Card className="card-body">
      <h3>Send Us An Email</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida quis
        libero eleifend ornare. Maecenas mattis enim at arcu feugiat, sit amet
        blandit nisl iaculis. Donec lacus odio, malesuada eu libero sit amet,
        congue aliquam leo. In hac habitasse platea dictumst.
      </p>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  type="text"
                  {...formik.getFieldProps("name")}
                  isInvalid={formik.touched.name && formik.errors.name}
                  isValid={formik.touched.name && !formik.errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  {...formik.getFieldProps("email")}
                  isInvalid={formik.touched.email && formik.errors.email}
                  isValid={formik.touched.email && !formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  as={MaskedInput}
                  mask="(111) 111-1111"
                  {...formik.getFieldProps("phone")}
                  isInvalid={
                    formik.touched.phone && formik.errors.phone
                  }
                  isValid={
                    formik.touched.phone && !formik.errors.phone
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.phone}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                 type="text"
               
                  {...formik.getFieldProps("subject")}
                  isInvalid={formik.touched.subject && formik.errors.subject}
                  isValid={formik.touched.subject && !formik.errors.subject}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errorssubject}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  {...formik.getFieldProps("message")}
                  isInvalid={formik.touched.message && formik.errors.message}
                  isValid={formik.touched.message && !formik.errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.message}
                </Form.Control.Feedback>
              </Form.Group>
            </Col >
            <Col md={3}>
            <Button variant="primary" disabled={loading} type="submit">
              {loading && <Spinner animation="border" size="sm" />}
              Send Message
            </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </Card>
    </>
  );
};

export default ContactForm;
