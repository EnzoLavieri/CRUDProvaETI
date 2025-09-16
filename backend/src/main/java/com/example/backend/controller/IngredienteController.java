package com.example.backend.controller;

import com.example.backend.entity.Ingrediente;
import com.example.backend.entity.Receita;
import com.example.backend.repository.IngredienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/ingrediente")
public class IngredienteController {

    @Autowired
    private IngredienteRepository ingredienteRepository;

    @PostMapping
    public Ingrediente createIngrediente(@RequestBody Ingrediente ingrediente) {
        return ingredienteRepository.save(ingrediente);
    }


    @GetMapping
    public List<Ingrediente> getAllIngredientes() {
        return ingredienteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Ingrediente getIngredienteById(@PathVariable String id) {
        return ingredienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado"));
    }

    @PutMapping("/{id}")
    public Ingrediente updateIngrediente(@PathVariable String id, @RequestBody Ingrediente ingredienteDetails) {
        Ingrediente ingrediente = ingredienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado"));

        ingrediente.setNome(ingredienteDetails.getNome());

        return ingredienteRepository.save(ingrediente);
    }

    @DeleteMapping("/{id}")
    public void deleteIngrediente(@PathVariable String id) {
        ingredienteRepository.deleteById(id);
    }
}