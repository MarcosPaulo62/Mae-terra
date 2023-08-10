import { useState } from 'react';
import ModalFaleConosco from '../ModalFaleConosco';
import './index.css';

export default function Footer(){
    const [modal, setModal] = useState<boolean>(false);

    const showModal = () => setModal(!modal);

    return(
        <footer>
            <p className="label">Copyright &copy; 2023</p>
            <button type="button" onClick={showModal}>
                Fale consoco
            </button>
            {modal && <ModalFaleConosco active={setModal} />}
        </footer>
    )
}
