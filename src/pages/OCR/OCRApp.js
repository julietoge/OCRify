import React, { useState } from 'react';
import Tesseract from 'tesseract.js';

function OCRApp() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
    performOCR(selectedImage);
  };
  const performOCR = async (selectedImage) => {
    const result = await Tesseract.recognize(
      selectedImage,
      'eng', // Language code for English
      { logger: progress => console.log(progress) }
    );
    setText(result.data.text);
  };
  return (
    <div>
      <h1>OCR Application</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Selected" />}
      <div>
        <h2>Extracted Text:</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default OCRApp;