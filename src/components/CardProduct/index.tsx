import { Button } from "@mui/material";
import React from "react";
import { Product } from "../../models/product";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

export type CardProductProps = {
  product: Product;
};
export const CardProduct = ({ product }: CardProductProps) => {
  return (
    <>
      <div className="product">
        <img src={product.img} />
        <div className="product-content">
          <h3 className="title-product">{product.nome}</h3>
          <span className="specs">{product.tag}</span>
          <span className="specs">R$ {product.preco.toFixed(2)}</span>
          <button className="btn btn-add">
            Adicionar <FontAwesomeIcon color="#000" icon={faCartPlus} />
          </button>
        </div>
      </div>
    </>
  );
};
