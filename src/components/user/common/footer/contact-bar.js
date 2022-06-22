import React from "react";
import { RiHeadphoneLine, RiMailOpenLine, RiMapPinLine } from "react-icons/ri";
import "./contactbar.css"
const ContactBar = () => {
  return (
    <ul className="contact-bar">
     
      <li className="d-none d-lg-flex">
        <RiMailOpenLine />
        <div>
          <a href="mailto: info@strongprettyhomes.com"> info@strongprettyhomes.com</a>
        </div>
      </li>
      <li className="d-none d-sm-flex">
        <RiMapPinLine />
        <div>
        2301 Ravenswood Rd Madison,
          <br />
          WI 53711
        </div>
      </li>
      <li className="d-none d-sm-flex">  
        <RiHeadphoneLine />
        <div>
          <a href="tel: 3159052321">(315) 905-2321</a>
        </div>
      </li>
    </ul>
  );
};

export default ContactBar;
