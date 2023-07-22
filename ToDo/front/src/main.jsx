import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './components/Login.jsx'
import './components/index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Home from './components/home.jsx'

const router = createBrowserRouter([
    {
        path : "/",
        element: <Login/>
    },
    {
        path : "/home",
        element: <Home/>

    }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
