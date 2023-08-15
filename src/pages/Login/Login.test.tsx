import Login from "./login";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Login", () => {
  test("Deve renderizar textos da Login", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(screen.getByText("Faça seu login")).toBeInTheDocument();
  });
});
