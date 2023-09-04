import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Image from "../../img/images (3).png";

const LandingPage = () => {
  return (
    <AuthLayout>
      <div className="landingPageApp">
        <div className="jumbotron">
          <div className="Title">
            <h1>Free online OCR</h1>
            <p>
              Get text from an image. No matter which format you choose, you can
              trust that the resulting text will be accurate and easy to work
              with, our OCR service has you covered.
            </p>
            <div>
          <button>
            <Link to="/OCRApp">Get Started</Link>
          </button>
        </div>
          </div>
          <div className="img-wrapper">
            <img src={Image} alt="" />
          </div>
        </div>
        
        <div className="Features-wrapper">
          {/* <img src="../../img/text-file.avif" alt="" /> */}
          <div className="features-items Features">
            {/* https://www.newocr.com/ */}
            <h2> Features</h2>
            OCRify offers:
            <p>unlimited image file uploads.</p>
            <p>does not require registration.</p>
            <p>Our service is based on the Tesseract OCR engine.</p>
            <p>Two options for displaying and processing the resulting text.</p>
            <p>
              Able to handle poorly scanned and photographed pages and
              low-resolution images.
            </p>
            <p>Your data is kept safe and secure with us.</p>
          </div>
          <div className="features-items Input">
            <h2> Input file formats</h2>
            OCRify is able to process all kinds of image formats such as JPEG,
            JFIF, PNG, GIF, BMP, PBM, PGM, PPM, PCX, etc.
          </div>
          <div className="features-items Output">
            <h2> Output file formats</h2>
            OCRify provides plain text (TXT) or Microsoft Word (DOC) output file
            formats.
          </div>
          <div className="features-items languages">
            <h2> Recognition languages</h2>
            English and Igbo
          </div>
        </div>
        
      </div>
    </AuthLayout>
  );
};

export default LandingPage;
