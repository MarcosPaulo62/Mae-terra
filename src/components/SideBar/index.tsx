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
                    <Link to='/'>Home</Link>
                    <Link to='/'>Aventura</Link>
                    <Link to='/'>Camping</Link>
                    <Link to='/'>Mochilas</Link>
                    <Link to='/'>Tênis</Link>
                </div>            
            </div>
        </div>
        
    )
}