import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contactDetails">
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> s30496usi@gmail.com |
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} /> +971 586971030 |
        </p>
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> Dubai, UAE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
