import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landing-Page/landingPage";
import OCRApp from './pages/OCR/OCRApp';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path='/OCRApp' element={<OCRApp/>}></Route>
      </Routes>
  );
};

export default App;
