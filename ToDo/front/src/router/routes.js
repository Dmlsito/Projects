import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/home'
import Login from '../components/Login'

export const router2 = createBrowserRouter([
    {
        path : "/",
        element: <Login />
    },
    {
        path : "/home",
        element: <Home />

    }
])