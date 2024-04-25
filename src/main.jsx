import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Reset } from './styles/Reset.js'
import { Global } from './styles/Global.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset></Reset>
    <Global></Global>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
