import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/filters'

// eslint-disable-next-line react/prop-types
export function Filters () {

    const priceId = useId()
    const filtersId = useId()

    const { setFilters, filters } = useFilters()

    const handleSelectCategory = e => {
        setFilters(prevResult => {
            return {
                ...prevResult,
                category: e.target.value
            }
        })
    }

    const handleChangeMinPrice = e => {
        setFilters(prevResult => {
          return {
              ...prevResult,
              minPrice: e.target.value
          }
        })
    }

    return (
        <main className='main-filters'>
            <div className='main-filters-price'>
                <input type="range" id={priceId} min={100} max='1000' value={filters.minPrice} onChange={handleChangeMinPrice} />
                <label htmlFor={priceId} />
                <span>MinPrice: {filters.minPrice}$</span>
            </div>
            <div>
                <label htmlFor={filtersId} />
                <select id={filtersId} onChange={handleSelectCategory}>
                    <option value='all'>all</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </main>
    )
}