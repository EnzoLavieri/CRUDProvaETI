package com.example.backend.repository;

import com.example.backend.entity.Ingrediente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredienteRepository extends JpaRepository<Ingrediente, String> {
}
