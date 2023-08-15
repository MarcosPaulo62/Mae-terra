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
                    <button onClick={closeModal} data-testid="close-button">
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className="modal-body">    
                    <form>
                        <div>
                            <label htmlFor="email">Seu e-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                required 
                                data-testid="email-input"
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="mensagem">Mensagem</label>
                            <textarea 
                                id="mensagem" 
                                maxLength={150} 
                                required 
                                data-testid="mensagem-textarea"
                            ></textarea>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={closeModal} data-testid="fechar-button">Fechar</button>
                    <button type="button" className="enviar-modal" data-testid="enviar-button">Enviar</button>
                </div>                
            </div>
        </div>
    )
}