import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import ModalAvaliacao from "../../components/ModalAvaliacao";
import { CardProduct } from "../../components/CardProduct";
import { Product } from "../../models/product";
import { getProducts } from "../../api/get-products";

<<<<<<< HEAD
interface avaliacao {
  mensagem: string;
  nome: string;
=======
export interface avaliacao{
    mensagem: string,
    nome: string
>>>>>>> 272d0b9cdc4159a3fbcb14a8e8daeb8e8a2b97b3
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  const [modal, setModal] = useState<boolean>(false);

  const showModal = () => setModal(!modal);

<<<<<<< HEAD
  const [avaliacoes, setAvaliacoes] = useState<avaliacao[]>([
    {
      mensagem:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
      nome: "Ana Banana",
    },
    {
      mensagem: "Lorem Ipsum is and typesetting industry. Lorem Ipsum has been",
      nome: "Pafúncio",
    },
    {
      mensagem:
        "Lorem Ipsum is and typesetting industry. Lorem Ipsum has been typesetting industry. Lorem Ipsum",
      nome: "Lorem",
    },
  ]);

  useEffect(() => {
    getProducts().then((products) => {
      console.log("products", products);
      setProducts(products);
    });
  }, []);

  return (
    <main className="home">
      <section className="main-hero">
        <div>
          <h1>Mãe Terra</h1>
          <p>Compre em até 12x sem juros</p>
        </div>
      </section>
      <section className="search-container">
        <input type="text" placeholder="Pesquise um produto" />
        <button>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </section>
      <section className="product-section">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </section>
      <section>
        <h1>RENDERIZAÇÃO PRODUTOS</h1>
      </section>
      <section className="avaliacoes">
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
              <div key={item.nome} className="carousel-item">
                <p>"{item.mensagem}"</p>
                <p>{item.nome}</p>
              </div>
            ))}
          </Carousel>
        </div>
        {/* <button onClick={showModal}>Avalie-nos!</button>
        {modal && <ModalAvaliacao active={setModal} />} */}
      </section>
    </main>
  );
}
=======
    function handleAddAvaliacao(avaliacao: avaliacao){
        setAvaliacoes(prevItens => [...prevItens, avaliacao]);
    }

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
                {modal && <ModalAvaliacao active={setModal} onAddAvaliacao={(avaliacao) => handleAddAvaliacao(avaliacao)} />}
            </section>
        </main>
    )
}
>>>>>>> 272d0b9cdc4159a3fbcb14a8e8daeb8e8a2b97b3
