import React, { useState } from "react";
import Tesseract from "tesseract.js";
import "./App.css";

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('eng');
  const [ocrResult, setOCRResult] = useState("");
  const [errorMess, setErrorMess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));

  //   const reader = new FileReader();
    
  //   reader.onload = (e) => {
  //     setSelectedImage(e.target.result);
  //   };
    
  //   reader.readAsDataURL(file);
  };



  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  const performOCR = async () => {

    if (!selectedImage) {
      setErrorMess(true);
      setIsLoading(false);
      return;
    } 
    
    else if(selectedImage) {
      setErrorMess(false);
      setIsLoading(true);

      try {
        const { data: { text }  } = await Tesseract.recognize(selectedImage, selectedLanguage);
        setOCRResult(text);
      } catch (error) {
        console.error("OCR error:", error);
      }

      // Simulating an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
    }

    
  };

  return (
    <div className="App">
      <header>
        <div>
          <h1>SwiftLexi OCR</h1>
          <p>Get words in image!</p>
        </div>

      </header>
      <div className="errorMess-section">
        {errorMess && <div>Please upload an image first!</div>}
      </div>
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


        <div>
        <label htmlFor="language-select">Select Language:</label>
        <select id="language-select" value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="eng">English</option>
          <option value="hausa">Hausa</option>
          <option value="igbo">Igbo</option>
          <option value="yor">Yoruba</option>
        </select>
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
                <div>
                  powered by Tesseract
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
