import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddReceitaForm from './AddReceita.js'
import AddIngredienteForm from './AddIngrediente.js'
import RelacionarEntidades from './RelacionarIngredienteReceita.js' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <AddReceitaForm></AddReceitaForm>
      <AddIngredienteForm></AddIngredienteForm>
      </div>
      <RelacionarEntidades></RelacionarEntidades>
  </StrictMode>,
)
