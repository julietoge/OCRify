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
          <div>
            <h4>About</h4>
            <p>
              OCR.best is AI-Based Optical Character Recognition (OCR) software
              which extract text from images and convert into .txt or docs
              format.
            </p>
          </div>

          <div>
            <h4>Follow Us</h4>
            <div>twitter</div>
            <div>GitHub</div>
            <div>linkedin</div>
            <div>instagram</div>
          </div>
          <div>Copyright © All rights reserved By OCRify</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
