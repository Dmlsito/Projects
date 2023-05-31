import { useState } from 'react'

export const useFilters = () => {

    const [ filters, setFilters ] = useState(
        {
            minPrice: 100,
            category: 'all'
        }
        )

    const handleChangeMinPrice = e => {
      setFilters(prevResult => {
        return {
            ...prevResult,
            minPrice: e.target.value
        }
      })
    }
    
    const handleSelectCategory = e => {
        setFilters(prevResult => {
            return {
                ...prevResult,
                category: e.target.value
            }
        })
    }

    
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

    return { filters, setFilters, handleChangeMinPrice, handleSelectCategory, filterProducts}
}