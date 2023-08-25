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
        // El useEffect nos permite una funcion de retorno en la que podamos limpiar las subscripciones o las llamadas asincronas,
        // cuando el componente se desmonta
        return () => {
            window.removeEventListener('pushstate', onLocationChange)
        }
    },[])

    return {currentPath}

}

