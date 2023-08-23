import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";
// import "./OCRApp.css";
import Logo from "../../components/Logo/Logo";
import Languages from "../../components/languages/languages";

const OCR = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0].value);
  const [ocrResult, setOCRResult] = useState("");
  const [errorMess, setErrorMess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setErrorMess(false);
    }
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const preprocessImage = async (imageData) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.src = imageData;
    await img.decode();

    // Resize the image
    canvas.width = 800;
    canvas.height = (800 / img.width) * img.height;

    // Apply grayscale effect
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const imageDataGrey = ctx.getImageData(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < imageDataGrey.data.length; i += 4) {
      const avg =
        (imageDataGrey.data[i] +
          imageDataGrey.data[i + 1] +
          imageDataGrey.data[i + 2]) /
        3;
      imageDataGrey.data[i] = avg;
      imageDataGrey.data[i + 1] = avg;
      imageDataGrey.data[i + 2] = avg;
    }

    // Apply color inversion
    for (let i = 0; i < imageDataGrey.data.length; i += 4) {
      imageDataGrey.data[i] = 255 - imageDataGrey.data[i];
      imageDataGrey.data[i + 1] = 255 - imageDataGrey.data[i + 1];
      imageDataGrey.data[i + 2] = 255 - imageDataGrey.data[i + 2];
    }

    // Apply Gaussian blur (optional)
    // You can use a library like 'stackblur-canvas' for better blur effects
    // stackBlurCanvasRGBA(canvas, 0, 0, canvas.width, canvas.height, 10);

    ctx.putImageData(imageDataGrey, 0, 0);
    return canvas.toDataURL("image/jpeg", 0.8);
  };

  const handleProcessClick = async () => {
    if (!selectedImage) {
      setErrorMess(true);
      setProcessing(false);
      return;
    }

    setErrorMess(false);
    setProcessing(true);

    try {
      const preprocessedImage = await preprocessImage(selectedImage);

      const {
        data: { text },
      } = await Tesseract.recognize(preprocessedImage, selectedLanguage);
      console.log(text);
      setOCRResult(text);
    } catch (error) {
      console.error("OCR error:", error);
    }

    // Simulating an asynchronous operation
    setTimeout(() => {
      setProcessing(false);
    }, 10);
  };

  const handleDownloadClick = () => {
    if (ocrResult) {
      const blob = new Blob([ocrResult], { type: "application/msword" });
      saveAs(blob, "recognized_text.doc");
    }
  };

  return (
    <div className="OCRApp">
      <div className="logo">
        <Logo />
        <p>Get words in image!</p>
      </div>

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
        <input
          type="file"
          id="Upload"
          accept="image/*"
          onChange={handleImageUpload}
        />

        {selectedImage && <img src={selectedImage} alt="Selected" />}
      </div>
      <div>
        <button onClick={handleProcessClick}>
          {processing ? "Processing..." : "Process"}
        </button>
        <button onClick={handleDownloadClick} disabled={!ocrResult}>
          Download
        </button>
      </div>
      <div className="result">
        {ocrResult && (
          <div className="ocrResult-container">
            OCR Result:
            <p>{ocrResult} </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OCR;
