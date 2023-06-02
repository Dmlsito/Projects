import { useId, useState } from "react"
import { Filters } from "./Filters"
import './Header.css'

export function Header ({setFilters, filters}) {
    
    return (
        <main className="main-header">
            <h1>Technology store</h1>
             <Filters setFilters={setFilters} filters={filters}/>
        </main>
        
    )
}
