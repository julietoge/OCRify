import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import AuthLayout from "../../components/AuthLayout/AuthLayout";

function OCR() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  const performOCR = async () => {
    if (!image) return;

    setIsProcessing(true);

    try {
      const { data: { text } } = await Tesseract.recognize(image, 'eng');
      setText(text);
    } catch (error) {
      console.error('Error performing OCR:', error);
    }

    setIsProcessing(false);
  };

  return (
    <AuthLayout className="OCR">
     <h1>OCR Application</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Selected" width="300" />}
      <button onClick={performOCR} disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Process'}
      </button>
      {text && (
        <div>
          <h2>OCR Result:</h2>
          <p>{text}</p>
        </div>
      )}
    </AuthLayout>
  );
}

export default OCR;
