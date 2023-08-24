import { useState, useEffect } from "react"
import  Login  from './Login.jsx'
import  Home  from './home.jsx'

function App() {

    const navigate = (href) => {
        window.history.pushState({}, '', href)
        const navigationEvent = new Event('pushstate')
        window.dispatchEvent(navigationEvent)
    } 

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect( () => {
        //Para hacer esto se tiene que hacer de esta manera

        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('pushstate', onLocationChange)

        return () => {
            window.removeEventListener('pushstate', onLocationChange)
        }
    },[])

        
    return (
        <main>
            {currentPath === '/'  && <Login navigate={navigate}/>}
            {currentPath === '/home'  && <Home />}
        </main>
    )
}

export default App