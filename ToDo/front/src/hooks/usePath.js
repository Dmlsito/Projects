import {useState, useEffect} from 'react'
import { EVENTS } from '../utils/const'

export const usePath = () => {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)
    
    useEffect( () => {

        //Para hacer esto se tiene que hacer de esta manera
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        //Escuchando la navegacion hacia delante
        window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
        //Escuchando la navegacion hacia atras
        window.addEventListener(EVENTS.POPSTATE, onLocationChange)

        //Limpiamos el evento
        // El useEffect nos permite una funcion de retorno en la que podamos limpiar las subscripciones o las llamadas asincronas,
        // cuando el componente se desmonta
        return () => {
            window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
            window.addEventListener(EVENTS.POPSTATE, onLocationChange)
        }
    },[])

    return {currentPath}

}

