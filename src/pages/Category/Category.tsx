import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/get-products';
import { Product } from '../../models/product';
import { CardProduct } from '../../components/CardProduct';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCampground, faPersonHiking, faSuitcaseRolling, faShoePrints } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);
  const { tag } = useParams();
  const [searchText, setSearchText] = useState('')

  console.log('tag', tag)

  const icons = {
    aventura: faPersonHiking,
    camping: faCampground,
    mochilas: faSuitcaseRolling,
    tenis: faShoePrints
  };


  useEffect(() => {
    getProducts().then((products) => {
      console.log("products", products);
      setProducts(products.filter((product) => product.tag.toLowerCase() === tag?.toLowerCase()));
    });
  }, [tag]);

  if (!tag) {
    return <></>
  }

  return (
    <>
      <main className="category">
        <div className="iconTag">
          <FontAwesomeIcon icon={icons[tag as keyof typeof icons]} />
          <h1 className='titleCategory'>{tag}</h1>
        </div>
        <section className="search-container">
          <input 
            type="text" 
            placeholder="Pesquise um produto" 
            onChange={(e) => setSearchText(e.target.value)} 
            data-testid="search-input"
          />
          <button data-testid="search-input">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </section>

        <section className="product-section">
          {products
            .filter((product) => product.nome.toLowerCase().includes(searchText.toLowerCase()))
            .map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
        </section>
      </main>

    </>
  )
}