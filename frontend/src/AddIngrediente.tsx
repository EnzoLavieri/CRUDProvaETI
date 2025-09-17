import React, { useState } from "react";

export default function AddIngredienteForm() {
  const [nome, setNome] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const ingrediente = {
      nome
    };

    try {
      const response = await fetch("http://localhost:8081/ingrediente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(ingrediente),
      });
      if (response.ok) {
        setMessage("ingrediente adicionada com sucesso!");
        setNome("");
      } else {
        setMessage("Erro ao adicionar ingrediente!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erro de conexão com o servidor.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Criar ingrediente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label><br/>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <button type="submit" style={{margin:"20px"}}>Salvar ingrediente</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}