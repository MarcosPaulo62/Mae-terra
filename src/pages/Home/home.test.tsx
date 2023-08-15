import Home from "./home";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
  test("Deve renderizar textos da Home", () => {
    render(<Home />);

    expect(screen.getByText("Mãe Terra")).toBeInTheDocument();
    expect(screen.getByText("Compre em até 12x sem juros")).toBeInTheDocument();
    expect(screen.getByText("Avaliações")).toBeInTheDocument();
  });

  test("Deve renderizar 1 input e 1 button", () => {
    render(<Home />);

    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
  });
});
