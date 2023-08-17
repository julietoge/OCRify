import React from "react";
import "./landingPage.css"
import { Link } from "react-router-dom";
import Logo from "../../components/Logo/Logo";

const Landingpage = () => {
  return (
    <div>
       <div>
          <Logo />
          <p>Get words in image!</p>
        </div>
      <div>
        
        <button>
        <Link to="/OCRApp">
          Get Started
        </Link>
        </button>
      </div>
      <div className="Features-wrapper">
        <div>
          <h2> Features</h2>
          Free online OCR service offers unlimited file uploads and does not
          require registration. Your data is kept safe and secure with us, and
          all of your files will be removed from the server after use for added
          privacy. Our service is based on the Tesseract OCR engine and supports
          122 recognition languages and fonts, making it ideal for
          multi-language recognition. It is also capable of recognizing
          mathematical equations and analyzing page layouts for improved text
          recognition. You can select a specific area on a page for OCR and
          rotate pages clockwise or counterclockwise in 90°, 180° increments.
          After OCR processing, you have several options for displaying and
          processing the resulting text, including downloading as a file,
          editing in Google Docs, translating with Google Translate or Bing
          Translator, publishing online, copying to the clipboard, and more. Our
          service is even able to handle poorly scanned and photographed pages
          and low-resolution images.
        </div>
        <div>
          <h2> Input file formats</h2>
          Free online OCR service is able to process a wide range of input file
          formats, including popular image formats such as JPEG, JFIF, PNG, GIF,
          BMP, PBM, PGM, PPM, and PCX. We can also handle compressed files like
          Unix compress, bzip2, bzip, and gzip. For multi-page documents, we
          support TIFF, PDF, and DjVu formats. In addition, our service is able
          to handle DOCX and ODT files with images and multiple images within a
          ZIP archive, making it a versatile tool for all of your OCR needs.
        </div>
        <div>
          <h2> Output file formats</h2>
          Free online OCR service provides a variety of output file formats to
          meet your needs. Choose from plain text (TXT), Microsoft Word (DOC),
          or Adobe Acrobat (PDF). No matter which format you choose, you can
          trust that the resulting text will be accurate and easy to work with.
          Whether you need a simple text document, a fully formatted Word
          document, or a professional-grade PDF, our OCR service has you
          covered.
        </div>
        <div>
          <h2> Recognition languages</h2>
          Free online OCR service offers recognition in a wide variety of
          languages, including Afrikaans, Amharic, Arabic, Assamese,
          Azerbaijani, Belarusian, Bengali, Tibetan, Bosnian, Breton, Bulgarian,
          Catalan, Valencian, Cebuano, Czech, Chinese (Simplified and
          Traditional), Cherokee, Welsh, Danish, German, Dzongkha, Greek (Modern
          and Ancient), English, Esperanto, Estonian, Basque, Persian, Finnish,
          French, Frankish, Irish, Galician, Gujarati, Haitian Creole, Hebrew,
          Hindi, Croatian, Hungarian, Inuktitut, Indonesian, Icelandic, Italian,
          Javanese, Japanese, Kannada, Georgian, Kazakh, Central Khmer, Kirghiz,
          Korean, Kurdish, Lao, Latin, Latvian, Lithuanian, Luxembourgish,
          Malayalam, Marathi, Macedonian, Maltese, Mongolian, Maori, Malay,
          Burmese, Nepali, Dutch, Norwegian, Occitan, Oriya, Panjabi, Polish,
          Portuguese, Pushto, Quechua, Romanian, Russian, Sanskrit, Sinhala,
          Slovak, Slovenian, Sindhi, Spanish, Albanian, Serbian, Sundanese,
          Swahili, Swedish, Syriac, Tamil, Tatar, Telugu, Tajik, Tagalog, Thai,
          Tigrinya, Tonga, Turkish, Uighur, Ukrainian, Urdu, Uzbek, Vietnamese,
          Yiddish, and Yoruba. In addition, we offer a math/equation detection
          module for your specialized OCR needs.
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
