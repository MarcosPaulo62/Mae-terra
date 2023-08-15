import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { CardProduct } from ".";
import { Product } from "../../models/product";

describe("CardProduct", () => {
  test("Deve renderizar textos do ProductCard", () => {
    const product: Product = {
      id: "1",
      nome: "Mochila",
      preco: 200,
      tag: "Camping",
      img: "",
    };

    render(<CardProduct product={product} />);

    expect(screen.getByText("R$ 200.00")).toBeInTheDocument();
    expect(screen.getByText("Mochila")).toBeInTheDocument();
    expect(screen.getByText("Camping")).toBeInTheDocument();
  });
});
