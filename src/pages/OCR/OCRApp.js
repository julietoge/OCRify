import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import preprocessImage from "../../components/preprocess";
import "./OCRApp.css";

const OCRApp = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleProcessClick = async () => {
    if (!image) return;

    setIsProcessing(true);

    try {
      const preprocessedImage = await preprocessImage(image);

      const {
        data: { text },
      } = await Tesseract.recognize(preprocessedImage, "eng");
      console.log(text);
      setText(text);
    } catch (error) {
      console.error("Error performing OCR:", error);
    }

    setIsProcessing(false);
  };

  const handleDownloadClick = () => {
    if (!text) return;
    const blob = new Blob([text], { type: "application/msword" });
    saveAs(blob, "recognized_text.doc");
  };

  return (
    <AuthLayout>
      <div className="OCRApp">
        <div className="input-wrapper">
          <input
            type="file"
            id="Upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="image-wrapper">
          {image && <img src={image} alt="Selected" />}
        </div>
        <div className="button-ocrResult">
          <button onClick={handleProcessClick} disabled={!image}>
            {isProcessing ? "Processing..." : "Process"}
          </button>

          <div className="ocrResult-container">
            {text && (
              <div className="Result">
                <h2>Result:</h2>
                <p>{text} </p>
                <button onClick={handleDownloadClick} disabled={!text}>
                  Download
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default OCRApp;
