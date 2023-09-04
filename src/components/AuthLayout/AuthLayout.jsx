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

        <div>Footer</div>
      </div>
    </div>
  );
};

export default AuthLayout;
