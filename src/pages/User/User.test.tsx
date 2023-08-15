import User from "./User";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("User", () => {
  test("Deve renderizar textos da User", () => {
    render(<User />);

    expect(screen.getByText("Minha conta")).toBeInTheDocument();
  });
});
