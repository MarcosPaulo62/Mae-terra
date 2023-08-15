import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

describe("Header tests", () => {
  test("Deve renderizar textos do Header", () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("header-open-btn")).toBeInTheDocument();
  });

  test("Deve renderizar 3 links", () => {
    render(<Header />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("homepage-link")).toBeInTheDocument();
    expect(screen.getByTestId("cart-link")).toBeInTheDocument();
    expect(screen.getByTestId("user-link")).toBeInTheDocument();
  });

  test("Deve mudar de página quando um link é clicado", async () => {
    render(<Header />, { wrapper: BrowserRouter });

    const userLink = screen.getByTestId("user-link");
    await userEvent.click(userLink);

    const currentUrl = window.location.href.split("localhost:3000")[1];

    expect(currentUrl).toBe("/user");
  });
});
