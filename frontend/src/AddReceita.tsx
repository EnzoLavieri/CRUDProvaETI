import React, { useState, useEffect } from "react";

export default function AddReceitaForm() {
  const [nome, setNome] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [custoAproximado, setCustoAproximado] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState("");
  const [message, setMessage] = useState("");

  // Carregar ingredientes do backend ao montar o componente
  useEffect(() => {
    const fetchIngredientes = async () => {
      try {
        const response = await fetch("http://localhost:8081/ingrediente");
        if (response.ok) {
          const data = await response.json();
          setIngredientes(data);
        } else {
          console.error("Erro ao carregar ingredientes");
        }
      } catch (error) {
        console.error("Erro de conexão com o servidor", error);
      }
    };

    fetchIngredientes();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const receita = {
      nome,
      tempoPreparo: parseInt(tempoPreparo),
      custoAproximado: parseFloat(custoAproximado),
      ingredienteId: ingredienteSelecionado, 
    };

    try {
      const response = await fetch("http://localhost:8081/receitas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(receita),
      });

      if (response.ok) {
        setMessage("Receita adicionada com sucesso!");
        setNome("");
        setTempoPreparo("");
        setCustoAproximado("");
        setIngredienteSelecionado("");
      } else {
        setMessage("Erro ao adicionar receita!");
      }
    } catch (error) {
      console.error(error);
      setMessage("Erro de conexão com o servidor.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Adicionar Receita</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Tempo de Preparo (min):</label>
          <input
            type="number"
            value={tempoPreparo}
            onChange={(e) => setTempoPreparo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Custo Aproximado (R$):</label>
          <input
            type="number"
            step="0.01"
            value={custoAproximado}
            onChange={(e) => setCustoAproximado(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ingrediente:</label>
          <select
            value={ingredienteSelecionado}
            onChange={(e) => setIngredienteSelecionado(e.target.value)}
            //required
          >
            <option value="">Selecione um ingrediente</option>
            {ingredientes.map((ingrediente) => (
              <option key={ingrediente.id} value={ingrediente.id}>
                {ingrediente.nome}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Salvar Receita</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}