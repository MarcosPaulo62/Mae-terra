import './home.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home(){
    return(
        <main className='home'>
            <section className="main-hero">
                <div>
                    <h1>Mãe Terra</h1>
                    <p>Compre em até 12x sem juros</p>
                </div>
            </section>
            <section className='search-container'>
                <input type="text" />
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </section>
        </main>
    )
}