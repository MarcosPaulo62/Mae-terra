import { useState } from 'react';
import { faListUl, faUserLarge, faCreditCard, faCircleCheck, faLock, faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import './login.css';

export default function Login(){
  const [isSignInActive, setIsSignInActive] = useState(true);

  const handleHeaderClick = () => {
    setIsSignInActive(!isSignInActive);
  };

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSenha(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();    
    if (email == 'pafuncio@gmail.com' && senha == '2468') {
      window.location.href = "/payment";
    } else{
      setLoginImpedido(true);
    }    
  }

  const [loginImpedido, setLoginImpedido] = useState<Boolean>(false);

  return(
    <main className="main-login">
        <div className="progress-bar">
            <div className="progress-bar-icons">
                <i><FontAwesomeIcon className="icon-active" icon={faListUl} /></i>
                <i><FontAwesomeIcon className="icon-active" icon={faUserLarge} /></i>
                <i><FontAwesomeIcon icon={faCreditCard} /></i>
                <i><FontAwesomeIcon icon={faCircleCheck} /></i>
            </div>
            <div className="progress-bar-border">
                <div className="active-bar"></div>
                <div className="active-bar"></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className="back-page">
          <Link to='/cart'><span className="material-symbols-outlined back-icon"><FontAwesomeIcon icon={faCircleLeft} /></span></Link>
        </div>

        <section className="sign-area">
          <div className="sign__header">
            <h2 onClick={handleHeaderClick} className={`subtitle ${isSignInActive ? "subtitle-active" : ""}`} id="sign-in">Faça seu login</h2>
            <span className="subtitle-active">|</span>
            <h2 onClick={handleHeaderClick} className={`subtitle ${!isSignInActive ? "subtitle-active" : ""}`} id="sign-up">Faça seu cadastro</h2>
          </div>

          <form onSubmit={handleSubmit} className={`form sign-in__content ${isSignInActive ? "" : "d-none"}`}>
            <div className="input-container">
              <div className="input-style">
                <label htmlFor="sign-in-email" className='icon-user'><FontAwesomeIcon icon={faUserLarge} /></label>
                <input 
                  className="label" 
                  type="email" 
                  name="sign-in-email" 
                  id="sign-in-email" 
                  placeholder="Digite seu email" 
                  required
                  value={email}
                  onChange={handleEmailChange} />
              </div>
            </div>
            <div className="input-container">
              <div className="input-style">
                <label htmlFor="sign-in-password" className="icon-password"><FontAwesomeIcon icon={faLock} /></label>
                <input 
                  className="label"
                  type="password" 
                  name="sign-in-password" 
                  id="sign-in-password" 
                  placeholder="Digite sua senha" 
                  required minLength={4}
                  value={senha}
                  onChange={handleSenhaChange} 
                  />
              </div>
              <span className="label label-password">
                Esqueceu a senha? <a href="#"><strong>Clique aqui</strong></a>
              </span>
            </div>
            <button type="submit" className="button btn-submit submit-login">
              <span>
                Login
              </span>
            </button>
            { loginImpedido && <span className="text-danger lead error-msg">Usuário ou senha inválido</span>}
          </form>

          <form className={`form sign-up__content ${isSignInActive ? "d-none" : ""}`}>
            <div className="input-container">
              <label htmlFor="name" className="name">Nome</label>
              <input className="label" type="text" name="name" id="name" required min="3" maxLength={50} placeholder="Digite seu nome" />
            </div>
            <div className="input-container">
              <label htmlFor="sign-up-email" className="email">E-mail</label>
              <input className="label" type="email" name="sign-up-email" id="sign-up-email" required placeholder="Digite seu email" />
            </div>
            <div className="input-container">
              <label htmlFor="cpf" className="cpf">CPF</label>
              <input className="label" type="text" name="cpf" id="cpf" required placeholder="Digite seu cpf" minLength={11} maxLength={14} />
            </div>
            <div className="input-container">
              <label htmlFor="sign-up-address" className="address">Endereço</label>
              <input className="label" type="text" name="sign-up-address" id="sign-up-address" required placeholder="Digite seu endereço" minLength={3} />
            </div>
            <div className="input-container">
              <label htmlFor="birthday" className="birthday">Data de nascimento</label>
              <input className="label" type="date" name="birthday" id="birthday" required />
            </div>
            <div className="input-container">
              <label htmlFor="sign-up-password" className="password">Senha</label>
              <input className="label" type="password" name="sign-up-password" id="sign-up-password" required min-l="" placeholder="Digite uma senha" />
            </div>
            <div className="input-container">
              <label htmlFor="confirm-password" className="confirm-password">Confirme a senha</label>
              <input className="label" type="password" name="confirm-password" id="confirm-password" required min-l="" placeholder="Repita a senha" />
            </div>
            <button type="submit" className="button btn-submit submit-cadastro">
              <a>Cadastrar</a>
            </button>
          </form>
        </section>
        
    </main>
  )
}