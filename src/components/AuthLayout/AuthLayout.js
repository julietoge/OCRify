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
        <div className="Footer-wrapper">
          <div className="Footer">
            <div className="Footer-items">
              <div className="Footer-item About">
                <h4>About</h4>
                <p>
                  OCRify is an AI-based Optical Character Recognition (OCR)
                  application which recognize and extract characters from images
                  and convert into .txt or docs with great accuracy using A.I
                  techniques.
                </p>
              </div>
              <div className="Footer-item Information">
                <h4>Information</h4>

                <div>Terms & Conditions</div>

                <div>Privacy Policy</div>
              </div>
              <div className="Footer-item Contact">
                <h4>Contact Us</h4>
                <div>twitter</div>
                <div>GitHub</div>
                <div>linkedin</div>
                <div>instagram</div>
              </div>
            </div>
            <div className="Copyright">
              Copyright &copy; All rights reserved By OCRify
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
