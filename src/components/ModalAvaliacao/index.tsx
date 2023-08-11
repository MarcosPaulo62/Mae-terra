import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './index.css';
import { avaliacao } from "../../pages/Home/home";
import { useForm } from 'react-hook-form';

interface FormData {
    nome: string;
    mensagem: string;
}

interface ModalProps{
    active: (modal: boolean) => void;
    onAddAvaliacao: (avaliacao: avaliacao) => void;
}

export default function ModalAvaliacao({ active, onAddAvaliacao }: ModalProps){
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        const novaAvaliacao: avaliacao = {
            nome: data.nome,
            mensagem: data.mensagem
        }
        onAddAvaliacao(novaAvaliacao);
        
        closeModal();
    };

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form">
                            <div>
                                <label htmlFor="nome">Seu nome</label>
                                <input type="text" id="nome" {...register("nome")} required></input>
                            </div>
                            <div>
                                <label htmlFor="mensagem">Avaliação</label>
                                <textarea id="mensagem" maxLength={100} {...register("mensagem")} required></textarea>
                            </div>
                        </div>
                        
                
                        <div className="modal-footer">
                            <button type="button" onClick={closeModal}>Fechar</button>
                            <button type="submit" className="enviar-modal">Avaliar!</button>
                        </div>
                    </form>   
                </div>             
            </div>
        </div>
    )
}