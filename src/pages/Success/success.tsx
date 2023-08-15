import { faListUl, faUserLarge, faCreditCard, faCircleCheck, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './success.css';

export default function Success(){

  return(
    <main className="main-login">
        <div className="progress-bar">
            <div className="progress-bar-icons">
                <i><FontAwesomeIcon className="icon-active" icon={faListUl} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faUserLarge} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faCreditCard} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faCircleCheck} /></i>
            </div>
            <div className="progress-bar-border">
                <div className="active-bar"></div>
                <div className="active-bar"></div>
                <div className="active-bar"></div>
                <div className="active-bar"></div>
            </div>
        </div>

        <div className="back-page">
          <Link to='/payment'><span className="material-symbols-outlined back-icon"><FontAwesomeIcon icon={faCircleLeft} /></span></Link>
        </div>

        <section className="success-section">
          <h2 className="title">
            Pedido finalizado com sucesso!
          </h2>
            <FontAwesomeIcon className="fa-solid fa-circle-check check-custom" icon={faCircleCheck} />
          <div className="buy-status">
            <div>
              <span className="paragraph">Status da transação:</span>
              <p className="subtitle">Pedido criado com sucesso!</p>
            </div>
            <div>
              <span className="paragraph">O número do seu pedido é: </span>
              <p className="subtitle">33</p>
            </div>
            <div>
              <span className="paragraph">O código de rastreio é:</span>
              <p className="subtitle">SD 123 456 789 BR</p>
            </div>
            <div>
              <p className="paragraph">Clique <a href="#" className="rastrear">aqui</a> para rastrear o pedido!</p>
            </div>
          </div>
          <Link to='/' className="button" data-testid="homepage-link">Voltar à página inicial</Link>
        </section>
        
    </main>
  )
}