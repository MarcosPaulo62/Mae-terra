import { Button } from "@mui/material";
import React from "react";
import { Product } from "../../models/product";

export type CardProductProps = {
  product: Product;
};
export const CardProduct = ({ product }: CardProductProps) => {
  return (
    <>
      <div className="product">
        <img src={product.img} />
        <div className="product-content">
          <h3 className="title-product">{product.name}</h3>
          <span className="specs">{product.category}</span>
          <span className="specs">R$ {product.price}</span>
          <Button variant="contained">Adicionar</Button>
        </div>
      </div>
    </>
  );
};
