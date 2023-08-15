import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SideBar from ".";
import { BrowserRouter } from "react-router-dom";

describe("SideBar tests", () => {
  test("Deve renderizar 5 links", () => {
    render(<SideBar active={() => true} />, { wrapper: BrowserRouter });

    expect(screen.getByTestId("homepage-link")).toBeInTheDocument();
    expect(screen.getByTestId("aventure-link")).toBeInTheDocument();
    expect(screen.getByTestId("camping-link")).toBeInTheDocument();
    expect(screen.getByTestId("backpacks-link")).toBeInTheDocument();
    expect(screen.getByTestId("shoes-link")).toBeInTheDocument();
  });

  test("Deve mudar de página quando um link é clicado", async () => {
    render(<SideBar active={() => true} />, { wrapper: BrowserRouter });

    const aventureLink = screen.getByTestId("aventure-link");
    await userEvent.click(aventureLink);

    const currentUrl = window.location.href.split("localhost:3000")[1];

    expect(currentUrl).toBe("/category/aventura");
  });
});
