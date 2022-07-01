import React, { useState } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  InputGroup,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import {makeTourRequest} from "../../../api/tourRequest-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SectionHeader from "../home/section-header/section-header"
import { useStore } from "../../../store";

const TourRequestForm = (tourRequest) => {
  const {  requestState,userState } = useStore();
  const { isUserLogin } = userState;
  const {tourRequests} = requestState;

    const [loading, setLoading] = useState(false);
  const [isPropertyAvailable, setIsPropertyAvailable] = useState(false);
//   const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  const initialValues = {
   tourRequestTime: "",
    adult: "",
    child: "",
  };

  const validationSchema = Yup.object({
    tourRequestTime: Yup.string().required("Enter a date and time please."),
    adult: Yup.string().required("Enter the number of adult please."),
    child: Yup.string().required("Select the number of child please."),
  });

  const onSubmit = async (values) => {
    const {
        tourRequestTime,
        adult,
        child,
    } = values;

    const dto = {
      propertyId: tourRequest.id,
      tourRequestTime: tourRequestTime,
     adult: adult,
     child: child,
    };

    setLoading(true);

    try {
      await makeTourRequest();
      toast("TourRequest created successfully");
      navigate("/");
    } catch (err) {
       
      toast(err.response.data.message);
      console.log(err.response.data.message)
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const checkTheHomeIsAvailable = async () => {
    const { tourRequestTime } = formik.values;

    if (!tourRequestTime) return;
    try {
    const available=tourRequests.filter((request)=>(request.tourRequestTime===tourRequestTime))
        const dto = {
            propertyId: tourRequest.id,
            tourRequestTime: tourRequestTime,
          };

      setLoading(true);

      // const resp = await isHomeAvailable(dto);
      // const { isAvailable} = resp.data;
      // console.log(resp.data)

      // setIsPropertyAvailable(isAvailable);

      // if (!isAvailable) {
      //   toast(
      //     "The property you selected is not available in this hour. Please select another one"
      //   );
      // }
    } catch (err) {
      toast(err || err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div>

<div>
            <SectionHeader title="Tour Request Form" />
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Container>
          <Row>
            <Col md={isPropertyAvailable ? 6 : 12}>
              <FloatingLabel label="adult" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="adult"
                  {...formik.getFieldProps("adult")}
                  isInvalid={
                    formik.touched.adult &&
                    formik.errors.adult
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.adult}
                </Form.Control.Feedback>
              </FloatingLabel>

              <FloatingLabel label="child" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="child"
                  {...formik.getFieldProps("child")}
                  isInvalid={
                    formik.touched.child &&
                    formik.errors.child
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {formik.errors.child}
                </Form.Control.Feedback>
              </FloatingLabel>

              <InputGroup className="mb-3">
                <FloatingLabel label="tourRequestTime" className="flex-grow-1">
                  <Form.Control
                    type="date"
                    min={moment().format("YYYY-MM-DD")}
                    placeholder="tourRequestTime"
                    {...formik.getFieldProps("tourRequestTime")}
                    isInvalid={
                      formik.touched.tourRequestTime && formik.errors.tourRequestTime
                    }
                    onBlur={checkTheHomeIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.tourRequestTime}
                  </Form.Control.Feedback>
                </FloatingLabel>

                <FloatingLabel label="Time">
                  <Form.Control
                    type="time"
                    placeholder="tourRequestTime"
                    {...formik.getFieldProps("tourRequestTime")}
                    isInvalid={
                      formik.touched.tourRequestTime && formik.errors.tourRequestTime
                    }
                    onBlur={checkTheHomeIsAvailable}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.tourRequestTime}
                  </Form.Control.Feedback>
                </FloatingLabel>
              </InputGroup>
              </Col>

              <Col className="text-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                onClick={checkTheHomeIsAvailable}
               
                className={"main" }
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Send
              </Button>

              {/* <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={checkTheHomeIsAvailable}
                className={isHomeAvailable ? "d-none" : "d-block"}
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Check
                Avaliabilty
              </Button> */}
            </Col>
          </Row>
        </Container>
      </Form>
            </div>

    </div>
  )
}

export default TourRequestForm