import { usePath } from "../hooks/usePath"
import { routes } from "./routes"
import { routesProps } from "../types"

const Router = ({routes:routesProps, defaultComponent: DefaultComponent = () => <h1>SE JODIO</h1>}) => {

    const { currentPath } = usePath()

    const Page = routes.find(route => route.path === currentPath)?.component
    return Page ? <Page />: <DefaultComponent />
}


export default Router