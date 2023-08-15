import { describe, expect, it } from "vitest"

import App from "./App";

import { render, screen, userEvent } from "../test-utils";



describe("Simple working test", () => {

  it("fake test", () => {

    render(<App />);

    expect("ola").toBe("ola");

  });
});