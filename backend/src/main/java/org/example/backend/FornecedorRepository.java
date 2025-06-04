package org.example.backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
    Fornecedor findByEmail(String email);
    List<Fornecedor> findByNomeContainingIgnoreCase(String nome);
}
