import './Cart.css'
import { useId, useState } from 'react'
import { CartIcon, RemoveFromCartIcon} from './icons'
import { useCart } from '../hooks/cart'

export function Cart () {

    const cartId = useId()
    
    const { cart } = useCart()

    return (
        <main>
            <label htmlFor={cartId} className='main-cart-button'>
            <CartIcon />
            </label>
            <input type='checkBox' id={cartId} hidden />

            <aside className='cart'>
            <h2>Mi carrito</h2>
                <ul>
                    {
                        cart.map(product => {
                            return <li key={product.id}>
                                <strong>{product.title}</strong>
                                <img src={product.thumbnail} alt={product.title} />
                                <small>Qti: {product.quantity}</small>
                                <div>
                                    <small>{product.price}$</small>
                                    <button><RemoveFromCartIcon /></button>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </aside>
        </main>
        
    )

}