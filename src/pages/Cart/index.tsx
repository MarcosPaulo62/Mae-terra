import { useState } from "react";
import { faListUl, faUserLarge, faCreditCard, faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './index.css';
import mochila from '../../../public/mochila-cargueira-card.png';

interface ProdutoEscolhido{
    id: number,
    nome: string,
    categoria: string,
    quantidade: number,
    preco: number
}

export default function Cart(){
    const [produtosEscolhidos, setProdutosEscolhidos] = useState<ProdutoEscolhido[]>([
        { id: 1, nome: "Mochile Cargueira 68L", categoria: "Trilhas e Rumos", quantidade: 1, preco: 1299.00 },
        { id: 2, nome: "Mochila para expedições", categoria: "Trilhas e Rumos", quantidade: 1, preco: 1299.00 }
    ]);

    function aumentarQuantidade(index: number) {
        const novosProdutos = produtosEscolhidos.map((prod) => {
            if (prod.id === index) {
                return { ...prod, quantidade: prod.quantidade + 1 };
            }
            return prod;
        });
        
        setProdutosEscolhidos(novosProdutos);
    }

    function diminuirQuantidade(index: number) {
        const novosProdutos = produtosEscolhidos.map((prod) => {
            if (prod.id === index && prod.quantidade > 1) {
                return { ...prod, quantidade: prod.quantidade - 1 };
            }
            return prod;
        });
        
        setProdutosEscolhidos(novosProdutos);
    }

    function apagarProduto(index: number) {
        const novosProdutos = produtosEscolhidos.map((prod) => {
            if (prod.id != index) {
                return prod;
            } 
        });
        
        setProdutosEscolhidos(novosProdutos.filter(Boolean));
    }

    return(
        <main className="main-cart">
            <div className="progress-bar">
                <div className="progress-bar-icons">
                    <i><FontAwesomeIcon className="icon-active" icon={faListUl} /></i>
                    <i><FontAwesomeIcon icon={faUserLarge} /></i>
                    <i><FontAwesomeIcon icon={faCreditCard} /></i>
                    <i><FontAwesomeIcon icon={faCircleCheck} /></i>
                </div>
                <div className="progress-bar-border">
                    <div className="active-bar"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <section className="cart-section">
                <div className="cart-products">
                    {produtosEscolhidos.map((produto, index) => (
                        <div key={index} className="cart-product">
                            <img src={mochila} alt={'Imagem do ' + produto.nome} className="img-product" />
                            <div className="cart-product__container">
                                <div className="cart-product__content">
                                    <h2 className="subtitle">{produto.nome}</h2>
                                    <span className="label">{produto.categoria}</span>
                                    <span className="label product-price">R$ {produto.preco}</span>
                                </div>
                                <div className="cart-product__actions">
                                    <button className="button trash" onClick={() => (apagarProduto(produto.id))}><FontAwesomeIcon icon={faTrashCan} /></button>
                                    <div>
                                        <button className="button label" onClick={() => (aumentarQuantidade(produto.id))}>+</button>
                                        <button className="button counter">{produto.quantidade}</button>
                                        <span className="button label" onClick={() => (diminuirQuantidade(produto.id))}>-</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <Link className="button" to='/'>Continuar comprando</Link>
                </div>

                <div className="frete">
                    <p>Frete para</p>
                    <div className="frete-container">
                        <div>
                            <input type="text" placeholder="CEP" className="cep" minLength={8} maxLength={8} />
                            <button className="button show-cep">Mostrar</button>
                        </div>
                        <p className="show-address">Endereço: </p>
                        <p className="show-price">Frete: R$ </p>
                    </div>
                </div>

                <div className="total-pedido">
                    <p className="subtitle">Total do pedido</p>
                    <p className="subtitle total-price">R$ <span className="value">2598,00</span></p>
                </div>

                <button className="button paragraph finish-btn">Finalizar pedido</button>
                <p className="text-light subtitle error-msg">Pedido não enviado!</p>
            </section>
        </main>
    )
}