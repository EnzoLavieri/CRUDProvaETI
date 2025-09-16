package com.example.backend.controller;

import com.example.backend.entity.Ingrediente;
import com.example.backend.entity.Receita;
import com.example.backend.repository.IngredienteRepository;
import com.example.backend.repository.ReceitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/receitas")
public class ReceitaController {

    @Autowired
    private ReceitaRepository receitaRepository;

    @Autowired
    private IngredienteRepository ingredienteRepository;

    @PostMapping
    public Receita createReceita(@RequestBody Receita receita) {
        return receitaRepository.save(receita);
    }

    @GetMapping
    public Iterable<Receita> getAllReceitas() {
        return receitaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Receita getReceitaById(@PathVariable String id) {
        return receitaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
    }

    @PutMapping("/{id}")
    public Receita updateReceita(@PathVariable String id, @RequestBody Receita receitaDetails) {
        Receita receita = receitaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Receita não encontrada"));

        receita.setNome(receitaDetails.getNome());
        receita.setCustoAproximado(receitaDetails.getCustoAproximado());
        receita.setTempoPreparo(receitaDetails.getTempoPreparo());

        return receitaRepository.save(receita);
    }

    @DeleteMapping("/{id}")
    public void deleteReceita(@PathVariable String id) {
        receitaRepository.deleteById(id);
    }

    @PostMapping("/{receitaId}/ingredientes/{ingredienteId}")
    public Receita addIngredienteToReceita(@PathVariable String receitaId, @PathVariable String ingredienteId) {
        Receita receita = receitaRepository.findById(receitaId)
                .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
        Ingrediente ingrediente = ingredienteRepository.findById(ingredienteId)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado"));

        receita.addIngrediente(ingrediente);
        return receitaRepository.save(receita);
    }

    @DeleteMapping("/{receitaId}/ingredientes/{ingredienteId}")
    public Receita removeIngredienteFromReceita(@PathVariable String receitaId, @PathVariable String ingredienteId) {
        Receita receita = receitaRepository.findById(receitaId)
                .orElseThrow(() -> new RuntimeException("Receita não encontrada"));
        Ingrediente ingrediente = ingredienteRepository.findById(ingredienteId)
                .orElseThrow(() -> new RuntimeException("Ingrediente não encontrado"));

        receita.removeIngrediente(ingrediente);
        return receitaRepository.save(receita);
    }
}