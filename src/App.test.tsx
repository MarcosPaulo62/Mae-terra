import { describe, expect, it } from "vitest"

import App from "./App";

import { render, screen, userEvent } from "@testing-library/react";



describe("Simple working test", () => {

  it("test", () => {

    render(<App />);

    expect("ola").toBe("ola");
  });
});