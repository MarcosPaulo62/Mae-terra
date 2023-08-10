import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './index.css';

interface ModalProps{
    active: (modal: boolean) => void;
}

export default function ModalFaleConosco({ active }: ModalProps){
    const closeModal = () =>{
        active(false);
    }

    return(
        <div className="mascara">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>Fale conosco</h1>
                    <button onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="modal-body">    
                    <form>
                        <div>
                            <label htmlFor="email">Seu e-mail</label>
                            <input type="email" id="email" required></input>
                        </div>
                        <div>
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea id="mensagem" maxLength={150} required></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={closeModal}>Fechar</button>
                    <button type="button" className="enviar-modal">Enviar</button>
                </div>                
            </div>
        </div>
    )
}