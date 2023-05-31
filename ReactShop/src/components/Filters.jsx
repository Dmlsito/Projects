import { useId, useState } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {

    const { handleChangeMinPrice, handleSelectCategory, filters} = useFilters()

    const priceId = useId()
    const filtersId = useId()

    return (
        <main>
            <div>
                <input type="range" id={priceId} min={100} max={6000} onChange={handleChangeMinPrice} />
                <label htmlFor={priceId} />
                <span>MinPrice: {filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={filtersId} />
                <select id={filtersId} onChange={handleSelectCategory}>
                    <option value='all'>All</option>
                    <option value='laptops'>Laptops</option>
                    <option value='smartphones'>Smartphones</option>
                </select>
            </div>
        </main>

    )
}