import {useState, useEffect} from 'react'

export const usePath = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect( () => {

        //Para hacer esto se tiene que hacer de esta manera
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener('pushstate', onLocationChange)

        //Limpiamos el evento
        return () => {
            window.removeEventListener('pushstate', onLocationChange)
        }
    },[])

    return {currentPath}

}

