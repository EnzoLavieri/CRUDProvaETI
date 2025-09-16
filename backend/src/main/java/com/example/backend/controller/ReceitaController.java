package com.example.backend.controller;

import com.example.backend.entity.Receita;
import com.example.backend.repository.ReceitaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/receitas")
public class ReceitaController {

        @Autowired
        private ReceitaRepository receitaRepository;

        @PostMapping
        public Receita createReceita(@RequestBody Receita receita) {
            return receitaRepository.save(receita);
        }

        @GetMapping
        public List<Receita> getAllProducts() {
            return receitaRepository.findAll();
        }

        @GetMapping("/{id}")
        public Receita getReceitaById(@PathVariable String id) {
            return receitaRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Produto não encontrado"));
        }

        @PutMapping("/{id}")
        public Receita updateReceita(@PathVariable String id, @RequestBody Receita receitaDetails) {
            Receita receita = receitaRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Produto não encontrado"));

            receita.setNome(receitaDetails.getNome());
            receita.setCustoAproximado(receitaDetails.getCustoAproximado());
            receita.setTempoPreparo(receitaDetails.getTempoPreparo());

            return receitaRepository.save(receita);
        }

        @DeleteMapping("/{id}")
        public void deleteReceita(@PathVariable String id) {
            receitaRepository.deleteById(id);
        }
    }
