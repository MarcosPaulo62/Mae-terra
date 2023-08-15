import Payment from "./payment";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Payment tests", () => {
  test("Deve renderizar textos da Payment", () => {
    render(<Payment />, { wrapper: BrowserRouter });

    expect(screen.getByText("Conclua seu pagamento")).toBeInTheDocument();
    expect(screen.getByText("Valor total da compra:")).toBeInTheDocument();
  });

  test("Deve mudar de página quando um link é clicado", async () => {
    render(<Payment />, { wrapper: BrowserRouter });

    const finallyLink = screen.getByTestId("finally-link");
    await userEvent.click(finallyLink);

    const currentUrl = window.location.href.split("localhost:3000")[1];

    expect(currentUrl).toBe("/success");
  });
});
