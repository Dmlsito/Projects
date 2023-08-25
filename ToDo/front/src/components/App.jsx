import { useState, useEffect } from "react"
import  Login  from './Login.jsx'
import  Home  from './home.jsx'
import { usePath } from "../hooks/usePath.js"
import { navigate } from "../utils/navigations.js"

function App() {

    const { currentPath } = usePath()

    return (
        <main>
            {currentPath === '/'  && <Login navigate={navigate}/>}
            {currentPath === '/home'  && <Home />}
        </main>
    )
}

export default App