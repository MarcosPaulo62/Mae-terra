import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './index.css'

interface SideBarProps{
    active: (sideBar: boolean) => void;
}

export default function SideBar({ active }: SideBarProps){
    const closeSideBar = () =>{
        active(false);
    }

    return(
        <div className="mascara">
            <div className="container-sideBar">
                <div className="close">
                    <button onClick={closeSideBar}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className="links">
                    <Link data-testid="homepage-link" to='/'>Home</Link>
                    <Link data-testid="aventure-link" to='/category/aventura'>Aventura</Link>
                    <Link data-testid="camping-link" to='/category/camping'>Camping</Link>
                    <Link data-testid="backpacks-link" to='/category/mochilas'>Mochilas</Link>
                    <Link data-testid="shoes-link" to='/category/tenis'>Tênis</Link>
                </div>            
            </div>
        </div>
        
    )
}