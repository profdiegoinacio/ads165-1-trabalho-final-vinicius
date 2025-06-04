package org.example.backend;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>, JpaSpecificationExecutor<Produto> {
    List<Produto> findByNomeContainingIgnoreCase(String nome);
    List<Produto> findByPrecoLessThanEqual(Double preco);
    List<Produto> findByEstoqueGreaterThan(Integer estoque);

    // Consultas relacionadas aos relacionamentos
    List<Produto> findByCategoria(Categoria categoria);
    List<Produto> findByFornecedoresContains(Fornecedor fornecedor);

    // Consultas com paginação
    Page<Produto> findByNomeContainingIgnoreCase(String nome, Pageable pageable);
    Page<Produto> findByPrecoGreaterThan(Double preco, Pageable pageable);
    Page<Produto> findByEstoqueLessThanEqual(Integer estoque, Pageable pageable);
    Page<Produto> findByCategoria(Categoria categoria, Pageable pageable);

    // Consultas sem paginação
    @Query("SELECT DISTINCT produto FROM Produto produto " + "JOIN FETCH produto.categoria LEFT JOIN FETCH produto.fornecedores ")
    List<Produto> findAllWithDetalhes ();
}
