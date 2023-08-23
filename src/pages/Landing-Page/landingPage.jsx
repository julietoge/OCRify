import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const Landingpage = () => {
  return (
    <div className="landingPageApp">
      <div>
        <Logo />
        <p>Get words in image!</p>
      </div>
      <div>
      <button>
          <Link to="/OCRApp">Get Started</Link>
        </button>
        <button>
          <Link to="/OCR">Get Started OCR</Link>
        </button>
      </div>
      <div className="Features-wrapper">
        <img src="../../img/text-file.avif" alt="" />
        <div>
          {/* https://www.newocr.com/ */}
          <h2> Features</h2>
          SwiftLexiOCR offers unlimited image file uploads and does not
          require registration. Your data is kept safe and secure with us, and
          all of your files will be removed from the server after use for added
          privacy. Our service is based on the Tesseract OCR engine and supports
          4 recognition languages and fonts, making it ideal for
          multi-language recognition. It is also capable of recognizing
          mathematical equations and analyzing page layouts for improved text
          recognition. After OCR processing, you have several options for displaying and
          processing the resulting text, including downloading as a file,
          editing in Word Docs, copying to the clipboard, and more. Our
          service is even able to handle poorly scanned and photographed pages
          and low-resolution images.
        </div>
        <div>
          <h2> Input file formats</h2>
          SwiftLexiOCR is able to process a wide range of input file
          formats, including popular image formats such as JPEG, JFIF, PNG, GIF,
          BMP, PBM, PGM, PPM, and PCX, making it a versatile tool for all of your OCR needs.
        </div>
        <div>
          <h2> Output file formats</h2>
          SwiftLexiOCR provides plain text (TXT) or Microsoft Word (DOC) output file formats to
          meet your needs. No matter which format you choose, you can
          trust that the resulting text will be accurate and easy to work with, our OCR service has you
          covered.
        </div>
        <div>
          <h2> Recognition languages</h2>
          SwiftLexiOCR offers recognition in these four major Nigerian
          Languages; "English","Hausa", "Igbo" and "Yoruba" In addition, we
          offer a math/equation detection module for your specialized OCR needs.
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
