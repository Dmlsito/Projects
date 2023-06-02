import './Product.css'
import { AddToCartIcon } from './icons'
export function Product ({products}) {
    return (
        <main className="products-main">
            <ul>
                {
                  products.slice(0.30).map(product => {
                    return <li key={product.id}>
                            <strong>{product.title}</strong>
                            <img src={product.thumbnail}/>
                            <div>
                              <span>Price: {product.price} $</span>
                             <button><AddToCartIcon /></button> 
                            </div>
                    </li>

                  })
                
                }
            </ul>
        </main>
    )
}