import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { CardProduct } from "./components/CardProduct";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";



function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            {<Route path='/' element={<Home />} />}
            {/* <Route path='/*' element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
