
import { FiltersContext } from '../context/filters'
import { useContext } from 'react'

export function useFilters () {

  const { filters, setFilters } = useContext(FiltersContext)

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

     return { filterProducts, filters, setFilters }
}