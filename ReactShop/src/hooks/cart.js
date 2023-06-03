import { useContext } from "react"
import { CartContext } from "../context/contextCart"

export const useCart = () => {

    const context = useContext(CartContext)

    if(context === undefined) {
        throw new Error('El componente no esta envuelto en el CartProvider')
    }

    return context
}