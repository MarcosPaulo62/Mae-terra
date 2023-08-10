import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header(){
    return(
        <header className="header-container">
            <button>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <a href="#">
                <img 
                    src="../assets/logo.png" 
                    alt="Desenho de uma montanha, escrito embaixo 'Mão Terra Camping Store'"
                    className="logo"    
                />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faCartShopping} />
            </a>
            <a href="">
                <FontAwesomeIcon icon={faUser} />
            </a>
        </header>
    )
}
