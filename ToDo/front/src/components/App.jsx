import { useState, useEffect } from "react"
import  Login  from './Login.jsx'
import  Home  from './home.jsx'
import { usePath } from "../hooks/usePath.js"

function App() {

    const navigate = (href) => {
        window.history.pushState({}, '', href)
        const navigationEvent = new Event('pushstate')
        window.dispatchEvent(navigationEvent)
    } 

    const { currentPath } = usePath()

    return (
        <main>
            {currentPath === '/'  && <Login navigate={navigate}/>}
            {currentPath === '/home'  && <Home />}
        </main>
    )
}

export default App