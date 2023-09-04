import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing-Page/LandingPage";
import OCR from './pages/OCR/OCRApp';
import "./App.css"

const App = () => {
  return (
      <Routes class="App">
        <Route path="/" element={<LandingPage />}></Route>
        <Route path='/OCRApp' element={<OCR/>}></Route>
      </Routes>
  );
};

export default App;
