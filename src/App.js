import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landing-Page/landingPage";
import OCRApp from './pages/OCR/OCRApp';
import OCR from './pages/OCR/OCR';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path='/OCRApp' element={<OCRApp/>}></Route>
        <Route path='/OCR' element={<OCR/>}></Route>
      </Routes>
  );
};

export default App;
