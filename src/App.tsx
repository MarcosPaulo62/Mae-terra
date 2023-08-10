import { useState } from "react";
import "./App.css";
import { CardProduct } from "./components/CardProduct";
import { Product } from "./models/product";
import { v4 as uuidv4 } from "uuid";

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
      <CardProduct product={product} />
    </>
  );
}

export default App;
