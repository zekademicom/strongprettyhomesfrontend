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
import MaskedInput from "react-maskedinput";
import SectionHeader from "../common/section-header/section-header";
import moment from "moment";
import { createReservation, isVehicleAvailable } from "../../../api/reservation-service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const PropertyBookingForm = ({ property }) => {
  const [loading, setLoading] = useState(false);
  const [isCarAvailable, setIsCarAvailable] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  // a be gonderecegizmiz fieldlar
  const initialValues = {
    tourRequestTime: "",
   adult: "",
   child: "",
    contract: false,
  };
// formik yapi kurallar
  const validationSchema = Yup.object({
    tourRequestTime: Yup.string().required("Enter tour Request Time please."),
    adult: Yup.string().required("Enter number of adult please."),
    child: Yup.string().required("Select number of child please.")}),

// a velidationshema dan gecince buraya geliyor ve initialvalues deki her seyi alip buradaki values koyuyor biz de be istedigi formatta bir obje hazirliyoruz const dto, hazirlanan obje createreservation a hazir
  const onSubmit = async (values) => {
    const {
      tourRequestTime,
      adult,
      child,
       contract,
    } = values;

    // const dto = {
    //   vehicleId: property.id,
    //   pickUpTime: formatDateTime(pickUpDate, pickUpTime),
    //   dropOfTime: formatDateTime(dropOffDate, dropOffTime),
    //   pickUpLocation: pickUpLocation,
    //   dropOfLocation: dropOfLocation,
    // };

    setLoading(true);

    try {
      await createTourRequest(dto);
      toast("Tour Request created successfully");
      navigate("/");
    } catch (err) {
      toast(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

 

  // const checkTheCarIsAvailable = async () => {
  //   const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = formik.values;
  //   // formik.values nun icinde y intialsvalues hepsi var

  //   if (!pickUpDate || !pickUpTime || !dropOffDate || !dropOffTime) return;
  //   // kontrol edelim bossa bosuna endpointe gitmesin
  //   try {
  //     if (!checkDates(formik.values))
  //       throw "Dropoff date-time should get after the pickup date-time";

  //   // const dto = {
  //   //   // data transfer object a be gelen isimlerle ayni yaziyoruz carId gibi
  //   //   carId: vehicle.id,
  //   //     pickUpDateTime: formatDateTime(pickUpDate, pickUpTime),
  //   //     dropOffDateTime: formatDateTime(dropOffDate, dropOffTime),
  //   // };/**be tarafina gonderecegimiz objemiz hazir */

  //   setLoading(true);

  //     const resp = await isVehicleAvailable(dto);
  //     // tam burada y be gonderilene cevap gelecek cevap aliyoruz ve araba musait mi degil mi bakiyoruz BIRDE TOPLAM FIYAT A
  //     const { isAvailable, totalPrice } = resp.data;

  //     setIsCarAvailable(isAvailable);
  //     setTotalPrice(totalPrice);

  //     if (!isAvailable) {
  //       toast(
  //         "The car you selected is not available in these days. Please select another one"
  //       );
  //     }
  //   }catch (err) {
  //     toast(err || err.response.data.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const formatDateTime = (date, time) => {
  //   return moment(`${date} ${time}`).format("MM/DD/YYYY HH:mm:ss");
  // };

  // const checkDates = (values) => {
  //   const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = values;
  //   const d1 = formatDateTime(pickUpDate, pickUpTime);
  //   const d2 = formatDateTime(dropOffDate, dropOffTime);
  //   // bunlari birlestirip 
  //   return d2 > d1;
  // };

  return (
    <>
      <SectionHeader title="Tour Rewuest Form" />
      <Form noValidate >
        <Container>
          <Row>
           
            <Col md={6} className={isCarAvailable ? "d-block" : "d-none"}>
              {/* EGER ARAC MUSAITSE DBLOCK*/}
            
             

             

             

              <Form.Check
              // rb
                type="checkbox"
                label="I have read and aggree the sales contract"
                id="contract"
                {...formik.getFieldProps("contract")}
                isInvalid={formik.touched.contract && formik.errors.contract}
              />
            </Col>
            <Col className="text-center">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className={}
                // d-block=gozuksun
                disabled={loading}
              >
                {loading && <Spinner animation="border" size="sm" />} Book Now
              </Button>

              <Button
                variant="secondary"
                size="lg"
                type="button"
                onClick={checkTheCarIsAvailable}
                className={isCarAvailable ? "d-none" : "d-block"}
                disabled={loading}/* loading true ise button disabled olsun*/
              >
                {loading && <Spinner animation="border" size="sm" />} Check
                Avaliabilty
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default PropertyBookingForm;
