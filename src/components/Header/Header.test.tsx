import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from ".";
import { BrowserRouter } from "react-router-dom";

describe("Header", () => {
  test("Deve renderizar textos do Header", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByTestId("header-open-btn")).toBeInTheDocument();
  });
});
