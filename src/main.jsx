import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Reset } from './styles/Reset.js'
import { Global } from './styles/Global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reset></Reset>
    <Global></Global>
    <App />
  </React.StrictMode>,
)
