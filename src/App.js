import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landing-Page/landingPage";
import Ocr from './pages/OCR/ocr';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path='/ocr' element={<Ocr/>}></Route>
      </Routes>
  );
};

export default App;
