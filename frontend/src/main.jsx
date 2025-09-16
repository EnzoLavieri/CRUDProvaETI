import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddReceitaForm from './AddReceita.js'
import AddIngredienteForm from './AddIngrediente.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AddReceitaForm></AddReceitaForm>
      <AddIngredienteForm></AddIngredienteForm>
  </StrictMode>,
)
