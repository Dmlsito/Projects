import './App.css'
import { Header } from './Header'
import { Product } from './Product'
import { products as productJson} from '../mocks/products.json'
import { useState } from 'react'
import { useFilters } from '../hooks/useFilters'

function App() {

  //const [products, setProducts] = useState(productJson)

  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(productJson)

  return (
      <main className='main'>
          <Header />
          <Product products={filteredProducts}/>
        </main>
 )
}

export default App
