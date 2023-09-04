import React from "react";
import { Link } from "react-router-dom";
import "./AuthLayout.css";

const AuthLayout = ({ children }) => {
  return (
    <div className="AuthLayout-wrapper">
      <div className="AuthLayout">
        <div className="heaader-childern">
          <div className="Header">
            <div className="logo">
              <Link to="/">OCRify</Link>
            </div>
          </div>
          <div className="children">{children}</div>
        </div>

        <div className="Footer">
          <p>
            <h4>About</h4>
             OCR.best is AI-Based Optical Character Recognition (OCR)
            software which extract text from images and convert into .txt or
            docs format.
          </p>

          <p>
            <h4>Information</h4>
             Terms & Conditions Privacy Policy</p>

          <p> 
            <h4>Contact Us</h4>
             Get in touch support@ocr.best</p>

          <p>
            <h4>Follow Us</h4>
             twitter facebood linkedin pinterest</p>
          <p>Copyright © All rights reserved By OCR.best</p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
