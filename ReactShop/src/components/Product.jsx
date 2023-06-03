import { useCart } from '../hooks/cart'
import './Product.css'
import { AddToCartIcon } from './icons'
export function Product ({products}) {

  const { addToCart } = useCart()
    return (
        <main className="products-main">
            <ul>
                {
                  products.map(product => {
                    return <li key={product.id}>
                            <strong>{product.title}</strong>
                            <img src={product.thumbnail}/>
                            <div>
                              <span>Price: {product.price} $</span>
                             <button onClick={ () => addToCart(product)}><AddToCartIcon /></button> 
                            </div>
                    </li>
                  })
                }
            </ul>
        </main>
    )
}