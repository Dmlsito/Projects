import React from 'react'
import ReactDOM from 'react-dom/client'

import './components/index.css'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import  App  from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
