import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddReceitaForm from './AddReceita.js'
import AddIngredienteForm from './AddIngrediente.js'
import RelacionarEntidades from './RelacionarIngredienteReceita.js' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div style={{display:"flex", gap:"40px", backgroundColor:"#474747", padding:"18px 40px", borderRadius:"20px"}}>
        <AddReceitaForm></AddReceitaForm>
        <AddIngredienteForm></AddIngredienteForm>
      </div>
      <div style={{marginTop:"10px", backgroundColor:"#777777ff", padding:"10px", borderRadius:"20px"}}>
        <RelacionarEntidades ></RelacionarEntidades>
      </div>
  </StrictMode>,
)
