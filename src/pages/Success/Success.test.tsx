import Success from "./success";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe("Success tests", () => {
  test("Deve renderizar textos da Success", () => {
    render(<Success />, { wrapper: BrowserRouter });

    expect(screen.getByText("Pedido finalizado com sucesso!")).toBeInTheDocument();
    expect(screen.getByText("Status da transação:")).toBeInTheDocument();
    expect(screen.getByText("O número do seu pedido é:")).toBeInTheDocument();
    expect(screen.getByText("O código de rastreio é:")).toBeInTheDocument();
    expect(screen.getByText("Voltar à página inicial")).toBeInTheDocument();
  });

  test("Deve mudar de página quando um link é clicado", async () => {
    render(<Success />, { wrapper: BrowserRouter });

    const homepageLink = screen.getByTestId("homepage-link");
    await userEvent.click(homepageLink);

    const currentUrl = window.location.href.split("localhost:3000")[1];

    expect(currentUrl).toBe("/");
  });
});
