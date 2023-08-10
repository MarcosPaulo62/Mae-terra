import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import { CardProduct } from "./components/CardProduct";
import { Product } from "./models/product";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import Footer from "./components/Footer";

const product: Product = {
  id: uuidv4(),
  category: "Mochilas",
  img: "../public/mochila-cargueira-card.png",
  name: "Mochila preta",
  price: 120,
};

function App() {
  return (
    <>
      <div className="body">
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            {/* <Route path='/*' element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>

        <CardProduct product={product} />
        <CardProduct product={product} />
        
        <Footer />
      </div>
      
    </>
  );
}

export default App;
