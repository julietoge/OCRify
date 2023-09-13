import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";
// import "./OCRApp.css";
import AuthLayout from "../../components/AuthLayout/AuthLayout";

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
     // blurARGB(image.data, canvas, 1);
    // dilate(image.data, canvas);
    // invertColors(image.data);
    // thresholdFilter(image.data, 0.4);
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
    <AuthLayout className="OCRApp">
      <input
        type="file"
        id="Upload"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {image && <img src={image} alt="Selected" />}
      <button onClick={handleProcessClick} disabled={!image}>
        {isProcessing ? "Processing..." : "Process"}
      </button>
      <button onClick={handleDownloadClick} disabled={!text}>
        Download
      </button>
      {text && (
        <div className="ocrResult-container">
          <h2>OCR Result:</h2>
          <p>{text} </p>
        </div>
      )}
    </AuthLayout>
  );
};

export default OCRApp;
