import React from "react";
import { Route, Routes } from "react-router-dom";
import Landingpage from "./pages/Landing-Page/landingPage";
import OCRApp from './pages/OCR/OCRApp';
import TestApp from "./pages/Test/TestApp";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path='/OCRApp' element={<OCRApp/>}></Route>
        <Route path='/TestApp' element={<TestApp/>}></Route>
      </Routes>
  );
};

export default App;
