import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ModalAvaliacao from '../../components/ModalAvaliacao';
import { CardProduct } from "../../components/CardProduct";
import { v4 as uuidv4 } from "uuid";
import { Product } from "../../models/product";

interface avaliacao{
    mensagem: string,
    nome: string
}
const product: Product = {
    id: uuidv4(),
    category: "Mochilas",
    img: "../public/mochila-cargueira-card.png",
    name: "Mochila preta",
    price: 120,
  };

export default function Home(){
    const [modal, setModal] = useState<boolean>(false);

    const showModal = () => setModal(!modal);

    const [avaliacoes, setAvaliacoes] = useState<avaliacao[]>([
        {mensagem: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been', nome: 'Ana Banana'},
        {mensagem: 'Lorem Ipsum is and typesetting industry. Lorem Ipsum has been', nome: 'Pafúncio'},
        {mensagem: 'Lorem Ipsum is and typesetting industry. Lorem Ipsum has been typesetting industry. Lorem Ipsum', nome: 'Lorem'},
    ])

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
            <section className="product-section">
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
          <CardProduct product={product} />
        </section>
            <section>
                <h1>RENDERIZAÇÃO PRODUTOS</h1>
            </section>
            <section className='avaliacoes'>
                <h2>Avaliações</h2>
                <div>
                <Carousel 
                    autoPlay 
                    infiniteLoop 
                    showArrows={false} 
                    showStatus={false} 
                    showThumbs={false} 
                    showIndicators={false} 
                    interval={4000}
                >                    
                    {avaliacoes.map((item) => (
                        <div className='carousel-item'>
                            <p>"{item.mensagem}"</p>
                            <p>{item.nome}</p>
                        </div>
                    ))}                    
                </Carousel>
                </div>
                <button onClick={showModal}>
                    Avalie-nos!
                </button>
                {modal && <ModalAvaliacao active={setModal} />}
            </section>
        </main>
    )
}