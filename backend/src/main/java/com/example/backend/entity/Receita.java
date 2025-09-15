package com.example.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Receita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nome;
    private double tempoPreparo;
    private float custoAproximado;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getTempoPreparo() {
        return tempoPreparo;
    }

    public void setTempoPreparo(double tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public float getCustoAproximado() {
        return custoAproximado;
    }

    public void setCustoAproximado(float custoAproximado) {
        this.custoAproximado = custoAproximado;
    }
}
