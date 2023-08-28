import { usePath } from "../hooks/usePath"
import { routes } from "./routes"

//Lo que estamos haciendo aqui es pasar un componente por defecto si ninguna de nuestras rutas funciona
function Router({routes, defaultComponent: DefaultComponent = () => <h1>SE JODIO</h1>}) {
    
    const { currentPath } = usePath()

    //Con el optional evitamos que si no la encuentra y da null no nos pete
    const Page = routes.find(({path}) => path === currentPath)?.component
    return Page ? <Page /> : <DefaultComponent />
}

export default Router
