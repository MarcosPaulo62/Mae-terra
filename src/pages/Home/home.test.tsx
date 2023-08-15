import Home from './home';
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";;

describe("Test", () => {
    test("Deve renderizar textos da Home", () => {
        render(<Home />);
    
        expect(screen.getByText("Mãe Terra")).toBeInTheDocument();
        expect(screen.getByText("Compre em até 12x sem juros")).toBeInTheDocument();
        expect(screen.getByText("Avaliações")).toBeInTheDocument();
    });
}) 