import React, { useState, useCallback } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";
import AuthLayout from "../../components/AuthLayout/AuthLayout";
import preprocessImage from "../../components/preprocess";
import "./OCRApp.css";

const OCRApp = () => {
  // State variables to manage the image, recognized text, and processing state
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Callback function to handle image upload
  const handleImageUpload = useCallback(async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }, []);

  // Callback function to initiate OCR processing
  const handleProcessClick = useCallback(async () => {
    if (!image) return;

    setIsProcessing(true);

    try {
      // Preprocess the image (not shown in this code snippet)
      const preprocessedImage = await preprocessImage(image);

      // Perform OCR using Tesseract.js
      const {
        data: { text },
      } = await Tesseract.recognize(preprocessedImage, "eng");
      setText(text);
    } catch (error) {
      console.error("Error performing OCR:", error);
    } finally {
      setIsProcessing(false);
    }
  }, [image]);

  // Callback function to handle text download
  const handleDownloadClick = useCallback(() => {
    if (!text) return;

    // Create a Blob with the recognized text and provide it for download
    const blob = new Blob([text], { type: "application/msword" });
    saveAs(blob, "recognized_text.doc");
  }, [text]);

  return (
    <AuthLayout>
      <div className="OCRApp">
        {/* Input element for uploading an image */}
        <div className="input-wrapper">
          <input
            type="file"
            id="Upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        {/* Display the selected image */}
        <div className="image-wrapper">
          {image && <img src={image} alt="Selected" />}
        </div>

        <div className="button-ocrResult">
          {/* Button to trigger OCR processing */}
          <button
            onClick={handleProcessClick}
            disabled={!image || isProcessing}
          >
            {isProcessing ? "Processing..." : "Process"}
          </button>

          <div className="ocrResult-container">
            {text && (
              <div className="Result">
                {/* Display the recognized text */}
                <h2>Result:</h2>
                <p>{text}</p>

                {/* Button to download the recognized text as a .doc file */}
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
