import React, { useState } from 'react';
import Tesseract from 'tesseract.js';
import { saveAs } from 'file-saver';

function OCR() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('eng'); // Default language is English
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

  const handleProcessClick = async () => {
    setProcessing(true);

    const { data: { text } } = await Tesseract.recognize(
      image,
      selectedLanguage, // Use the selected language
      { logger: info => console.log(info) }
    );

    setText(text);
    setProcessing(false);
  };

  const handleDownloadClick = () => {
    if (text) {
      const blob = new Blob([text], { type: 'application/msword' });
      saveAs(blob, 'extracted_text.doc');
    }
  };

  return (
    <div>
      <h1>Multilingual OCR Application</h1>
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
        {processing ? 'Processing...' : 'Process'}
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
