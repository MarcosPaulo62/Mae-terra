import Payment from "./payment";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Payment", () => {
  test("Deve renderizar textos da Payment", () => {
    render(
      <BrowserRouter>
        <Payment />
      </BrowserRouter>
    );

    expect(screen.getByText("Conclua seu pagamento")).toBeInTheDocument();
  });
});
