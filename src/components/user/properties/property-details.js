import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

import { BsTextareaResize } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { RiArrowGoBackLine } from "react-icons/ri"; 
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { FaCity } from "react-icons/fa";
import { Table } from "react-bootstrap";
import "./property-details.css"
import PropertyAgent from './property-agent';
import { useNavigate } from 'react-router-dom';



// arabaya tiklayinca arabanin detayi hem popularcars d hem araba sayfasinda arabaya tiklayinca detay gelsin diyorsak bunu component vehicle-card da yapmaliyiz
const PropertyDetails = ({ property }) => {
  const navigate = useNavigate();

  const {
    id, title, description, category, type, bedrooms, bathrooms, garages, area, price, location, address, country, city, district, createDate, status
  } = property;

  console.log(property);



  return (
    <>

      <div className="Container mt-3 details">
        <div className="table-main-property">
          <div className="titles">

           
            <div className="col-xs-12 desc">   {description}</div>

          </div>
          <div className="features">
            <Table >

              <tbody>
                <tr>
                  <td> Price&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      : <span>${price} </span></td>
                  <td > <BsTextareaResize />Area&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : <span>{area} m2</span> </td>

                </tr>
                <tr>
                  <td> Category&nbsp;&nbsp;   : <span>{category}</span> </td>
                  <td>  <MdOutlineBedroomParent /> Bedrooms &nbsp;: <span>{bedrooms} beds</span></td>

                </tr>
                <tr>
                  <td>Status &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;   : <span className="status"> {status}</span></td>
                  <td> <BiBath /> Bathrooms :<span> {bathrooms} baths</span></td>
                </tr>
                <tr>
                  <td>  Type &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     : <span>{type}</span></td>
                  <td >  <FaCity /> City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   : <span>{city}</span></td>
                </tr>
                <tr>
                  <td>    District&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   :  <span>{district}</span></td>
                  <td>  <GiHomeGarage /> Garages&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span>{garages} </span></td>
                </tr>
                <tr>
                  <td >    Country&nbsp;&nbsp;&nbsp; &nbsp;: <span> {country} </span></td>
                  <td>  <MdLocationOn /> Location &nbsp;&nbsp;&nbsp;&nbsp;: <span>{location} </span></td>

                </tr>
                <tr>
                  <td >  Address &nbsp;&nbsp;&nbsp;: <span>{address}</span></td>
                  <td className="back">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<RiArrowGoBackLine  onClick={() => navigate(-1)}/> </td>

                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
      </div>


    </>
  );
};

export default PropertyDetails;
