import { useState } from 'react';
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ModalAvaliacao from '../../components/ModalAvaliacao';

export default function Home(){
    const [modal, setModal] = useState<boolean>(false);

    const showModal = () => setModal(!modal);

    return(
        <main className='home'>
            <section className="main-hero">
                <div>
                    <h1>Mãe Terra</h1>
                    <p>Compre em até 12x sem juros</p>
                </div>
            </section>
            <section className='search-container'>
                <input type="text" placeholder='Pesquise um produto' />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </section>
            <section>
                <h1>RENDERIZAÇÃO PRODUTOS</h1>
            </section>
            <section className='avaliacoes'>
                <h2>Avaliações</h2>
                <div>
                    <h4>carousel</h4>
                    <h4>carousel</h4>
                    <h4>carousel</h4>
                    <h4>carousel</h4>
                </div>
                <button onClick={showModal}>
                    Avalie-nos!
                </button>
                {modal && <ModalAvaliacao active={setModal} />}
            </section>
        </main>
    )
}