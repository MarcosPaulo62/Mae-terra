import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  test("Deve renderizar textos do Footer", () => {
    render(<Footer />);

    expect(screen.getByText("Copyright © 2023")).toBeInTheDocument();
    expect(screen.getByText("Fale consoco")).toBeInTheDocument();
  });
});
