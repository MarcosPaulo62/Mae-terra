import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ModalFaleConosco from ".";

describe("ModalFaleConosco tests", () => {
  test("Deve renderizar textos do Modal", () => {
    render(<ModalFaleConosco
            active={() => true}
    />);

    expect(screen.getByText("Fale conosco")).toBeInTheDocument();
    expect(screen.getByText("Seu e-mail")).toBeInTheDocument();
    expect(screen.getByText("Mensagem")).toBeInTheDocument();
    expect(screen.getByText("Fechar")).toBeInTheDocument();
    expect(screen.getByText("Enviar")).toBeInTheDocument();
  });

  test("Deve renderizar 3 button", () => {
    render(<ModalFaleConosco
        active={() => true}
    />);

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
    expect(screen.getByTestId("fechar-button")).toBeInTheDocument();
    expect(screen.getByTestId("enviar-button")).toBeInTheDocument();
  });

  test("Deve renderizar 1 input e 1 textarea", () => {
    render(<ModalFaleConosco
        active={() => true}
    />);

    expect(screen.getByTestId("email-input")).toBeInTheDocument();
    expect(screen.getByTestId("mensagem-textarea")).toBeInTheDocument();
  });
});
