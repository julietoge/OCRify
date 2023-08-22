import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./OCRApp.css";
import { saveAs } from "file-saver";
import Logo from "../../components/Logo/Logo";
import Languages from "../../components/languages/languages";


const Ocr = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].value);
  const [ocrResult, setOCRResult] = useState("");
  const [errorMess, setErrorMess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setErrorMess(false);
  };

  const performOCR = async () => {
    if (!selectedImage) {
      setErrorMess(true);
      setIsLoading(false);
      return;
    } else if (selectedImage) {
      setErrorMess(false);
      setIsLoading(true);

      try {
        const {
          data: { text },
        } = await Tesseract.recognize(selectedImage, selectedLanguage);
        setOCRResult(text);
        console.log(text)
      } catch (error) {
        console.error("OCR error:", error);
      }

      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
      }, 10);
    }
  };
  const downloadAsDoc = () => {
    const blob = new Blob([ocrResult], { type: "application/msword" });
    saveAs(blob, "recognized_text.doc");
  };

  return (
    <div className="OCRApp">
      <header>
        <div>
          <Logo />
          <p>Get words in image!</p>
        </div>
      </header>

      <div className="main-section">
        <div className="errorMess-section">
          {errorMess && <div>Please upload an image first!</div>}
        </div>

        <div>
          <label htmlFor="language-select">Select Language:</label>
          <select value={selectedLanguage} onChange={handleLanguageChange}>
            {Languages.map((Language) => (
              <option key={Language.value} value={Language.value}>
                {Language.label}
              </option>
            ))}
          </select>
        </div>
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
              {isLoading ? "Processing..." : "Perform OCR"}
            </button>

            {ocrResult && (
              <div className="ocrResult-container">
                OCR Result:
                <p>{ocrResult} </p>
                <button onClick={downloadAsDoc}>Download</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ocr;