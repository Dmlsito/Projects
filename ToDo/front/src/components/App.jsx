import Router from "../router/Router.jsx"
import { routes } from "../router/routes.js"

function App() {

    return (
        <main>
            <Router routes={routes} />
        </main>
    )
}

export default App