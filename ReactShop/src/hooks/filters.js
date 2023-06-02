import { useState } from 'react'

export function useFilters () {

  const [ filters, setFilters ] = useState(
    {
        minPrice: 100,
        category: 'all'
    }
    )

    const filterProducts = products => {
      return products.filter(product => {
         return (
           product.price >= filters.minPrice && (
             product.category === filters.category ||
             filters.category === 'all'
           )
         )
       })
     }

     return {filters, setFilters, filterProducts}
}