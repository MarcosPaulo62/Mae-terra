import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './index.css';

interface ModalProps{
    active: (modal: boolean) => void;
}

export default function ModalAvaliacao({ active }: ModalProps){
    const closeModal = () =>{
        active(false);
    }

    return(
        <div className="mascara">
            <div className="modal-avaliacao-content">
                <div className="modal-header">
                    <h1>Nova mensagem</h1>
                    <button onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="modal-body">    
                    <form>
                        <div>
                            <label htmlFor="nome">Seu nome</label>
                            <input type="text" id="nome" required></input>
                        </div>
                        <div>
                            <label htmlFor="mensagem">Avaliação</label>
                            <textarea id="mensagem" maxLength={150} required></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={closeModal}>Fechar</button>
                    <button type="button" className="enviar-modal">Avaliar!</button>
                </div>                
            </div>
        </div>
    )
}