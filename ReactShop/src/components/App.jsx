import './App.css'
import { Header } from './Header'
import { Product } from './Product'
import { products as productJson} from '../mocks/products.json'
import { useState } from 'react'
import { useFilters } from '../hooks/filters'

function App() {

  const [products] = useState(productJson)

  const { filterProducts, filters, setFilters} = useFilters()
  
  const filteredProducts = filterProducts(products)

  return (
      <main className='main'>
          <Header setFilters={setFilters} filters={filters}/>
          <Product products={filteredProducts}/>
        </main>
 )
}

export default App
