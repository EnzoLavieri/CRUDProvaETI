import React, { useState, useEffect } from "react";

export default function RelacionarEntidades() {
  const [nome, setNome] = useState("");
  const [tempoPreparo, setTempoPreparo] = useState("");
  const [custoAproximado, setCustoAproximado] = useState("");
  const [ingredientes, setIngredientes] = useState([]);
  const [receitas, setReceita] = useState([]);
  const [ingredienteSelecionado, setIngredienteSelecionado] = useState("");
  const [receitaSelecionada, setReceitaSelecionada] = useState("");
  const [message, setMessage] = useState("");

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

    useEffect(() => {
    const fetchReceitas = async () => {
      try {
        const response = await fetch("http://localhost:8081/receitas");
        if (response.ok) {
          const data = await response.json();
          setReceita(data);
        } else {
          console.error("Erro ao carregar ingredientes");
        }
      } catch (error) {
        console.error("Erro de conexão com o servidor", error);
      }
    };

    fetchReceitas();
    
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();

    const receita = {
      nome:receitaSelecionada,
      tempoPreparo: parseInt(tempoPreparo),
      custoAproximado: parseFloat(custoAproximado),
      ingredienteId: ingredienteSelecionado, 
    };

    try {
      const response = await fetch(`http://localhost:8081/receitas/${receitaSelecionada}/ingredientes/${ingredienteSelecionado}`, {
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
      <h2>Adicionar ingrediente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Receita:</label>
          <select
            value={receitaSelecionada}
            onChange={(e) => setReceitaSelecionada(e.target.value)}
          >
            <option value="">Selecione um ingrediente</option>
            {receitas.map((receitas) => (
              <option key={receitas.id} value={receitas.id}>
                {receitas.nome}
              </option>
            ))}
          </select>
        </div>
                <div>
          <label>Ingrediente:</label>
          <select
            value={ingredienteSelecionado}
            onChange={(e) => setIngredienteSelecionado(e.target.value)}
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