import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ModalAvaliacao from ".";
import { avaliacao } from "../../pages/Home/home";

function setAvaliacao(av: avaliacao){
    return;
}

describe("ModalAvaliacao tests", () => {
  test("Deve renderizar textos do Modal", () => {
    render(<ModalAvaliacao 
            onAddAvaliacao={(avaliacao) => setAvaliacao(avaliacao)} 
            active={() => true}
    />);

    expect(screen.getByText("Nova mensagem")).toBeInTheDocument();
    expect(screen.getByText("Seu nome")).toBeInTheDocument();
    expect(screen.getByText("Avaliação")).toBeInTheDocument();
    expect(screen.getByText("Fechar")).toBeInTheDocument();
    expect(screen.getByText("Avaliar!")).toBeInTheDocument();
  });

  test("Deve renderizar 3 button", () => {
    render(<ModalAvaliacao 
        onAddAvaliacao={(avaliacao) => setAvaliacao(avaliacao)} 
        active={() => true}
    />);

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
    expect(screen.getByTestId("fechar-button")).toBeInTheDocument();
    expect(screen.getByTestId("avaliar-button")).toBeInTheDocument();
  });

  test("Deve renderizar 1 input e 1 textarea", () => {
    render(<ModalAvaliacao 
        onAddAvaliacao={(avaliacao) => setAvaliacao(avaliacao)} 
        active={() => true}
    />);

    expect(screen.getByTestId("nome-input")).toBeInTheDocument();
    expect(screen.getByTestId("avaliacao-textarea")).toBeInTheDocument();
  });
});
