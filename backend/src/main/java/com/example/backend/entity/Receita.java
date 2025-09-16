package com.example.backend.entity;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Receita {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;
    private String nome;
    private Integer tempoPreparo;
    private Double custoAproximado;

    @ManyToMany
    @JoinTable(
            name = "receita_ingrediente",
            joinColumns = @JoinColumn(name = "receita_id"),
            inverseJoinColumns = @JoinColumn(name = "ingrediente_id")
    )
    private List<Ingrediente> ingredientes = new ArrayList<>();

    public void addIngrediente(Ingrediente ingrediente) {
        ingredientes.add(ingrediente);
    }

    public void removeIngrediente(Ingrediente ingrediente) {
        ingredientes.remove(ingrediente);
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getTempoPreparo() {
        return tempoPreparo;
    }

    public void setTempoPreparo(Integer tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public Double getCustoAproximado() {
        return custoAproximado;
    }

    public void setCustoAproximado(Double custoAproximado) {
        this.custoAproximado = custoAproximado;
    }

    public List<Ingrediente> getIngredientes() {
        return ingredientes;
    }

    public void setIngredientes(List<Ingrediente> ingredientes) {
        this.ingredientes = ingredientes;
    }
}