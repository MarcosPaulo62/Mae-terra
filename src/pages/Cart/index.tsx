import { useState, useEffect } from "react";
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

interface Endereco {
    cep: string;
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
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
            } else if (prod.quantidade == 1 && prod.id == index){
                return;
            }          
            return prod;  
        });
        
        setProdutosEscolhidos(novosProdutos.filter(Boolean));
    }

    function apagarProduto(index: number) {
        const novosProdutos = produtosEscolhidos.map((prod) => {
            if (prod.id != index) {
                return prod;
            } 
        });
        
        setProdutosEscolhidos(novosProdutos.filter(Boolean));
    }

    const [cep, setCep] = useState<string>('');
    const [placeholder, setPlaceholder] = useState<string>('CEP');
    const [endereco, setEndereco] = useState<Endereco | null>(null);
    const [enderecoEntrega, setEnderecoEntrega] = useState<string>('');
    const [frete, setFrete] = useState<string | number>('');

    const handleCepChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value);
    };

    const handleMostrarClick = async () => {
        if (cep.length != 8){
            setCep('');
            const newPlaceholder = 'Formato correto 00000-00';
            setPlaceholder(newPlaceholder);
        } else {
            setFrete(0);
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json().then(function(data) {
                    if (data.erro) {
                        console.log('CEP não encontrado.');
                        return;
                    }
                    setEndereco(data);
                    setEnderecoEntrega(`${data?.logradouro},${data?.bairro},${data?.localidade},${data?.uf}`);
                })
              } catch (error) {
                console.error('Erro ao buscar o CEP:', error);
              }
        }
    };

    const [pedidoFinalizado, setPedidoFinalizado] = useState<Boolean>(false);

    useEffect(() => {
        if (endereco && produtosEscolhidos.length > 0) {
            setPedidoFinalizado(true);
        } else {
            setPedidoFinalizado(false);
        }
    }, [endereco, produtosEscolhidos]);

    const [pedidoImedido, setPedidoImpedido] = useState<Boolean>(false);

    function finalizarPedido(){
        if (!endereco || produtosEscolhidos.length == 0) setPedidoImpedido(true);
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
                                    <span className="label product-price">{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
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
                            <input 
                                type="number" 
                                placeholder={placeholder} 
                                className="cep" 
                                maxLength={8}
                                value={cep}
                                onChange={handleCepChange} 
                            />
                            <button className="button show-cep" onClick={handleMostrarClick}>Mostrar</button>
                        </div>
                        <p className="show-address">Endereço: {enderecoEntrega}</p>
                        <p className="show-price">Frete: {frete.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </div>
                </div>

                <div className="total-pedido">
                    <p className="subtitle">Total do pedido</p>
                    <p className="subtitle total-price">
                        <span className="value">
                            {produtosEscolhidos.reduce((accumulator, produto) => accumulator + (produto.preco * produto.quantidade), 0)
                            .toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </span>
                    </p>
                </div>

                <Link onClick={finalizarPedido} className="button paragraph finish-btn" to={pedidoFinalizado ? '/login' : ''}>Finalizar pedido</Link>
                {pedidoImedido && <p className="text-light subtitle error-msg">Pedido não enviado!</p>}
            </section>
        </main>
    )
}