package com.example.backend.repository;

import com.example.backend.entity.Receita;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReceitaRepository extends JpaRepository<Receita, String> {
}
