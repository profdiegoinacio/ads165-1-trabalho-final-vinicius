package org.example.backend;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final ProdutoService produtoService;

    @Autowired
    public ProdutoController(ProdutoService produtoService) {
        this.produtoService = produtoService;
    }

    // Endpoint principal com suporte a filtragem, paginação e ordenação
    @GetMapping
    public ResponseEntity<PaginatedResponse<Produto>> listarProdutos(
            @RequestParam(required = false) String nome,
            @RequestParam(required = false) Double precoMinimo,
            @RequestParam(required = false) Double precoMaximo,
            @RequestParam(required = false) Long categoriaId,
            @PageableDefault(size = 10, sort = "nome", direction = Sort.Direction.ASC) Pageable pageable) {

        Page<Produto> pageProdutos = produtoService.listarComFiltrosEPaginacao(
                nome, precoMinimo, precoMaximo, categoriaId, pageable);

        return ResponseEntity.ok(PaginatedResponse.of(pageProdutos));
    }

    // Endpoint para listar todos os produtos (sem paginação) - pode ficar lento com muitos registros
    @GetMapping("/todos")
    public ResponseEntity<List<Produto>> listarTodos() {
        return ResponseEntity.ok(produtoService.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarPorId(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(produtoService.buscarPorId(id));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Produto> criar(@Valid @RequestBody Produto produto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(produtoService.salvar(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizar(@PathVariable Long id, @Valid @RequestBody Produto produto) {
        try {
            return ResponseEntity.ok(produtoService.atualizar(id, produto));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        try {
            produtoService.deletar(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Endpoints para gerenciar relacionamentos

    // Detalhes do Produto (OneToOne)
    @PostMapping("/{id}/detalhes")
    public ResponseEntity<Produto> adicionarDetalhes(@PathVariable Long id, @Valid @RequestBody DetalheProduto detalhes) {
        try {
            return ResponseEntity.ok(produtoService.atualizarDetalhes(id, detalhes));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Fornecedores (ManyToMany)
    @PostMapping("/{produtoId}/fornecedores/{fornecedorId}")
    public ResponseEntity<Produto> adicionarFornecedor(
            @PathVariable Long produtoId,
            @PathVariable Long fornecedorId) {
        try {
            return ResponseEntity.ok(produtoService.adicionarFornecedor(produtoId, fornecedorId));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{produtoId}/fornecedores/{fornecedorId}")
    public ResponseEntity<Produto> removerFornecedor(
            @PathVariable Long produtoId,
            @PathVariable Long fornecedorId) {
        try {
            return ResponseEntity.ok(produtoService.removerFornecedor(produtoId, fornecedorId));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Consultas por relacionamento
    @GetMapping("/categoria/{categoriaId}")
    public ResponseEntity<PaginatedResponse<Produto>> buscarPorCategoria(
            @PathVariable Long categoriaId,
            @PageableDefault(size = 10, sort = "nome", direction = Sort.Direction.ASC) Pageable pageable) {
        try {
            Page<Produto> page = produtoService.buscarPorCategoriaPaginado(categoriaId, pageable);
            return ResponseEntity.ok(PaginatedResponse.of(page));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/fornecedor/{fornecedorId}")
    public ResponseEntity<List<Produto>> buscarPorFornecedor(@PathVariable Long fornecedorId) {
        try {
            return ResponseEntity.ok(produtoService.buscarPorFornecedor(fornecedorId));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
