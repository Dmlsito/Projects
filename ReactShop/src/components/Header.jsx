import { useId, useState } from "react"
import { Filters } from "./Filters"
import './Header.css'

export function Header () {
    
    return (
        <main className="main-header">
            <h1>Technology store</h1>
             <Filters />
        </main>
        
    )
}
