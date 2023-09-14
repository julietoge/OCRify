import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import Image from "../../img/image-3-removebg-preview.png";

const LandingPage = () => {
  return (
    <AuthLayout>
      <div className="landingPageApp">
        <div className="jumbotron">
          <div className="Title">
            <h1>Extract Characters with Precision</h1>
            <p>
              Welcome to the OCRify! Say goodbye to manual transcription and
              hello to effortless character extraction from text-containing
              image documents.
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
              <h3>OCRify</h3>
              OCRify is an AI-based system that recognize and extract characters
              from images and convert into .txt or docs with great accuracy
              using A.I techniques.
            </div>
            <div className="features-items languages">
              <h3>Core Recognition</h3>
              OCRify's core recognition program is powered by one of the best
              machine learning library Tesseract.
            </div>
            <div className="features-items languages">
              <h3>No Daily Limit</h3>
              Convert unlimited pictures into text with no daily limit.
            </div>
            <div className="features-items languages">
              <h3> Any Type of pic</h3>
              <p>
                OCRify can get character from all kinds of image formats such as
                JPEG, JFIF, PNG, etc., low-resolution photos, or even math
                expressions.
              </p>
            </div>

            <div className="features-items languages">
              <h3>Copy / Download</h3>
              Download word file or copy text from the image with just one
              click.
            </div>
            <div className="features-items AccuracySpeed">
              <h3>Accuracy and Speed</h3>
              <p>
                Our advanced preprocressing techniques ensure high accuracy and
                lightning-fast character extraction.
              </p>
            </div>
            <div className="features-items User-FriendlyInterface">
              <h3> User-Friendly Interface</h3>
              <p>
                OCRify's intuitive interface makes it easy for anyone to convert
                printed or handwritten text into digital form.
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
                Choose File: Select an image document that contains the
                Characters you want to extract.
              </li>
              <li>
                Hit the "Process" button, and watch as OCRify works its magic to
                extract the Characters.
              </li>
              <li>
                Download: Once the process is complete, your digitized
                text is ready for download as word file or copy as text
              </li>
            </ul>
            <p>
              OCRify is your solution for digitizing characters from image
              documents. Whether you're dealing with scanned files, handwritten
              notes, or any text in images, OCRify is here to simplify the
              process. Unlock the power of OCRify and make text extraction from
              image documents a seamless experience!
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
