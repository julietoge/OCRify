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
              Unlock the power of OCRify, the cutting-edge OCR web app that
              seamlessly extracts characters from both English and Igbo scripts.
              Say goodbye to manual data entry and hello to effortless
              digitization!
            </p>
            <div className="btn-wrapper">
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
          <h2>Our Key Features</h2>
          <div className="Features-content">
            <div className="features-items languages">
              <h3> Recognition languages</h3>
              English and Igbo
            </div>
            <div className="features-items AccuracySpeed">
              <h3>Accuracy and Speed</h3>
              <p>
                Our advanced algorithms ensure high accuracy and lightning-fast
                character extraction.
              </p>
            </div>
            <div className="features-items User-FriendlyInterface">
              <h3> User-Friendly Interface</h3>
              <p>
                OCRify's intuitive interface makes it easy for anyone to convert
                printed or handwritten text into digital form.
              </p>
            </div>
            <div className="features-items Access">
              <h3>Access Anywhere</h3>
              <p>
                Use OCRify from your browser on any device – no downloads or
                installations required.
              </p>
            </div>
            <div className="features-items Input">
              <h3> Input file formats</h3>
              <p>
                OCRify is able to process all kinds of image formats such as
                JPEG, JFIF, PNG, GIF, BMP, PBM, PGM, PPM, PCX, etc.
              </p>
            </div>
            <div className="features-items Output">
              <h3> Output file formats</h3>
              <p>
                OCRify provides plain text (TXT) or Microsoft Word (DOC) output
                file formats.
              </p>
            </div>

            <div className="features-items languages">
              <h3>Secure and Private</h3>
              <p>
                Your data is safe with us. We prioritize your privacy and data
                security.
              </p>
            </div>
          </div>
        </div>
        <div className="HowItWorks-wrapper">
          <h2>How OCRify Works:</h2>
          <div className="HowItWorks-content">
            <ul>
              <li>Hit the "Get started" button</li>
              <li>
                Upload Your Image: Select an image containing English or Igbo
                text.
              </li>
              <li>
                Choose the Language: Indicate whether the text is in English or
                Igbo.
              </li>
              <li>
                Start OCR Process: Hit the "OCRify" button, and watch an
                advanced algorithms and with the help of our preprocessing
                techniques work their magic by processing the image and extract
                the characters.
              </li>
              <li>
                Download Your Text: Once processed, your digitized text will be
                ready for download.
              </li>
            </ul>
            <p>
              OCRify is the solution you've been waiting for to streamline your
              document management or efficient character extraction. Whether
              you're a student, professional, or language enthusiast, OCRify is
              here to make your life easier. And it's capable to handle poorly
              scanned and photographed pages and low-resolution images with the
              help of our preprocessing techniques.
            </p>
            <p>
              <Link to="/OCRApp">Get started</Link> today and experience the
              future of OCR technology with OCRify!
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LandingPage;
