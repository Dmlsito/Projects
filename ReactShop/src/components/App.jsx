import './App.css'
import { Header } from './Header'
import { Product } from './Product'
import { products as productJson} from '../mocks/products.json'
import { useState } from 'react'
import { useFilters } from '../hooks/filters'
import { Cart } from './Cart'
import { CartProvider } from '../context/contextCart'
function App() {

  const [products] = useState(productJson)

  const { filterProducts } = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
      <main className='main'>
          <CartProvider>
              <Cart />
              <Header />
              <Product products={filteredProducts}/>
          </CartProvider>
      </main>
 )
}

export default App
