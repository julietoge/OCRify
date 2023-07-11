import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";

const App = () => {


  const [selectedImage, setSelectedImage] = useState(null);
  const [ocrResult, setOCRResult] = useState("");
  const [errorMess, setErrorMess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };


  const performOCR = async () => {

    setIsLoading(true);
    
    if (!selectedImage) {
      setErrorMess(true);
      setIsLoading(false);
      return;
    }
    else{
      setErrorMess(false);
    }
    
    try {
      
      const { data } = await Tesseract.recognize(selectedImage, "eng");
      setOCRResult(data.text);
    } catch (error) {
      console.error("OCR error:", error);
    }

    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);

  };


  return (
    <div className="App">

      <header>
        <div>
          <h1>SwiftLexi OCR</h1>
          <p>Get words in image!</p>
        </div>

         {/* <a href="https://">About_Us</a> */}
        
      </header>
      <div className="errorMess-section">{errorMess && (<div>Please upload an image first!</div>)}</div>
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
            <button onClick={performOCR}>
            {isLoading ? 'Processing...' : 'Perform OCR'}
              </button>

            {ocrResult && (
              <div className="ocrResult-container">
                OCR Result:
                <p>{ocrResult} </p>
              <div>
                powered by Tesseract
                {/* &copy; 2023 Ogechi Juliet Uhegbu */}
                </div>
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
};

export default App;
