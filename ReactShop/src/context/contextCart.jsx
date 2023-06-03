import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({children}) {

    const [ cart, setCart ] = useState([])

    const addToCart = product => {

       const indexProduct = cart.findIndex(item => item.id === product.id)

       if(indexProduct >= 0){

        const newCart = structuredClone(cart)
        newCart[indexProduct].quantity += 1
        return  setCart(newCart)
       }

        setCart(prevResult => {
            return [...prevResult, {...product, quantity: 1}]
        })
       
    }

    return (
        <CartContext.Provider value={{
            cart, 
            setCart,
            addToCart
        }}>{children}</CartContext.Provider>
    )
}