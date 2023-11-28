import { navigate } from "../utils"


const Link = ({target, to, ...props}) => {

    const handleClick = (event) => {
        const isMainEvent = event.button === 0 // El 0 significa que es el evento principal
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        //Undefined o sel siginifca que se abre en la misma ventana
        const isManageableEvent = target === undefined || target === 'self'

        if(isMainEvent && isManageableEvent && !isModifiedEvent) {
            //Como esta funcion se va a llamar en un ancor y su comportamiento por defecto es que recargue la pagina
            //el evento tendremso que negarlo
            event.preventDefault()
            navigate(to)
        }
    }

    return (
        <a onClick={handleClick} href={to} target ={target} {...props}></a>
    )

}


export default Link