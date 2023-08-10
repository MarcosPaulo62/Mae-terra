import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/get-products';
import { Product } from '../../models/product';
import { CardProduct } from '../../components/CardProduct';


export default function Category() {
  const [products, setProducts] = useState<Product[]>([]);
  const { tag } = useParams();

  console.log('tag', tag)


  useEffect(() => {
    getProducts().then((products) => {
      console.log("products", products);
      setProducts(products.filter((product) => product.tag.toLowerCase() === tag?.toLowerCase()));
    });
  }, [tag]);

  return (
    <>
      <h1>{tag}</h1>
      <section className="product-section">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </section>
    </>
  )
}