import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/SaludoSimple.jsx'
import './components/Nombre.jsx'
import './components/ListaSimple.jsx'
import './components/CalculoSimple.jsx'
import './components/HoraActual.jsx'
import './components/Articulo.jsx'
import './components/Contador.jsx'
import './components/MensajeConEstilo.jsx'
import './components/ListaDeNombres.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
