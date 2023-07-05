import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";

const App = () => {


  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrResult, setOCRResult] = useState("");


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };


  const performOCR = async () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
    try {
      const { data } = await Tesseract.recognize(selectedImage, "eng");
      setOCRResult(data.text);
    } catch (error) {
      console.error("OCR error:", error);
    }
  };


  return (
    <div className="App">

      <header>
        <div>
          <h1>SwiftLexi OCR</h1>
          <p>Get words in image!</p>
        </div>

         <a href="https://">About_Us</a>
        
      </header>

      <div className="main-section">

        <div className="input-wrapper">
          <label htmlFor="Upload">Upload Image</label>
          <input
            type="file"
            id="Upload"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>

        <div className="result">

          {selectedImage && (
            <div className="selectedImage-container">
              <img src={selectedImage} alt="Selected" />
            </div>
          )}

          <div className="btn-ocrResult-container">
            <button onClick={performOCR}>Perform OCR</button>

            {ocrResult && (
              <div className="ocrResult-container">
                OCR Result:
                <p>{ocrResult}</p>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default App;
