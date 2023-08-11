import { useState } from 'react';
import { faListUl, faUserLarge, faCreditCard, faCircleCheck, faChevronDown, faChevronUp, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './payment.css';
import qrcode from '../../../public/qrcode.png'

export default function Payment(){

  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  const handleAccordionClick = (sectionIndex: number) => {
    if (expandedSection === sectionIndex) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionIndex);
    }
  };

  return(
    <main className="main-login">
        <div className="progress-bar">
            <div className="progress-bar-icons">
                <i><FontAwesomeIcon className="icon-active" icon={faListUl} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faUserLarge} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faCreditCard} /></i>
                <i><FontAwesomeIcon icon={faCircleCheck} /></i>
            </div>
            <div className="progress-bar-border">
                <div className="active-bar"></div>
                <div className="active-bar"></div>
                <div className="active-bar"></div>
                <div></div>
            </div>
        </div>

        <div className="back-page">
          <Link to='/login'><span className="material-symbols-outlined back-icon"><FontAwesomeIcon icon={faCircleLeft} /></span></Link>
        </div>

        <section className="payment-section">
          <h2 className="subtitle">Conclua seu pagamento</h2>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className={`accordion-button credito btn-accordion-custom ${expandedSection === 0 ? "open" : ""}`}
                  type="button"
                  onClick={() => handleAccordionClick(0)}
                >
                  <p>Pagar com cartão de crédito</p> <span><FontAwesomeIcon icon={expandedSection === 0 ? faChevronUp : faChevronDown} /></span>
                </button>
              </h2>
              <div id="collapseOne" className={`accordion-collapse collapse ${expandedSection === 0 ? "show" : "d-none"}`}>
                <div className="accordion-body">
                  <form className="form form-payment d-flex gap-3 flex-column">
                  <select>
                      <option value="1">1x de R$ 1299,00</option>
                      <option value="2">2x de R$ 649,50</option>
                      <option value="3">3x de R$ 433,00</option>
                      <option value="4">4x de R$ 324,75</option>
                      <option value="5">5x de R$ 259,80</option>
                      <option value="6">6x de R$ 216,50</option>
                      <option value="7">7x de R$ 185,57</option>
                      <option value="8">8x de R$ 162,37</option>
                      <option value="9">9x de R$ 144,33</option>
                      <option value="10">10x de R$ 129,90</option>
                      <option value="11">11x de R$ 118,09</option>
                      <option value="12">12x de R$ 108,25</option>
                    </select>
                    <input type="text" placeholder="Número do cartão" minLength={16} maxLength={16} />
                    <input type="text" placeholder="Nome no cartão" />
                    <div className="d-flex gap-3">
                      <input type="text" className="w-50" maxLength={3} minLength={3} placeholder="CVV" />
                      <input type="text" className="w-50" placeholder="MM/AA" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
              <button
                className={`accordion-button pix btn-accordion-custom ${expandedSection === 1 ? "open" : ""}`}
                type="button"
                onClick={() => handleAccordionClick(1)}
              >
                <p>Pagar com pix</p> <span><FontAwesomeIcon icon={expandedSection === 1 ? faChevronUp : faChevronDown} /></span>
              </button>
              </h2>
              <div id="collapseTwo" className={`accordion-collapse collapse ${expandedSection === 1 ? "show" : "d-none"}`}>
                <div className="accordion-body d-flex flex-column gap-3 align-items-center">
                  <p>Valor total da compra: <strong>R$ 1299,00</strong></p>
                  <img src={qrcode} alt="Código qrcode" className="qr-code" />
                  <p className="label">Ou copie e coel a chave pix</p>
                  <p>41226f99-2f4f-486d-b515-b0</p>
                </div>
              </div>
            </div>
          </div>
          <Link to='/success' className="button">Efetuar compra</Link>
        </section>
        
    </main>
  )
}