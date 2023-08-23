import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { saveAs } from "file-saver";

function OCR() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("eng");
  const [processing, setProcessing] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
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
    setProcessing(true);

    const preprocessedImage = await preprocessImage(image);
    const {
      data: { text },
    } = await Tesseract.recognize(preprocessedImage, selectedLanguage, {
      logger: (info) => console.log(info),
    });

    setText(text);
    setProcessing(false);
  };

  const handleDownloadClick = () => {
    if (text) {
      const blob = new Blob([text], { type: "application/msword" });
      saveAs(blob, "extracted_text.doc");
    }
  };

  return (
    <div>
      <h1>Multilingual OCR Application with Preprocessing</h1>
      <label>Select Language:</label>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="eng">English</option>
        <option value="ha">Hausa</option>
        <option value="ig">Igbo</option>
        <option value="yor">Yoruba</option>
      </select>
      <br />
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {image && <img src={image} alt="Uploaded" />}
      <br />
      <button onClick={handleProcessClick} disabled={processing}>
        {processing ? "Processing..." : "Process"}
      </button>
      <button onClick={handleDownloadClick} disabled={!text}>
        Download Text
      </button>
      <div>
        <h2>OCR Text:</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default OCR;
