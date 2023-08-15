import Cart from ".";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Cart", () => {
  test("Deve renderizar textos da Cart", () => {
    render(
      <BrowserRouter>
        <Cart />
      </BrowserRouter>
    );

    expect(screen.getByText("Finalizar pedido")).toBeInTheDocument();
  });
});
