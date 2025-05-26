package org.example.backend;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "produtos")
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 3, max = 100, message = "Nome deve ter entre 3 e 100 caracteres")
    @Column(nullable = false, length = 100)
    private String nome;

    @NotNull(message = "Preço é obrigatório")
    @PositiveOrZero(message = "Preço deve ser maior ou igual a zero")
    @Column(nullable = false)
    private Double preco;

    @NotNull(message = "Estoque é obrigatório")
    @PositiveOrZero(message = "Estoque deve ser maior ou igual a zero")
    @Column(nullable = false)
    private Integer estoque;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "categoria_id", nullable = false)
    private Categoria categoria;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, orphanRemoval = true)
    @JoinColumn(name = "detalhe_produto_id", unique = true)
    private DetalheProduto detalheProduto;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(
            name = "produto_fornecedor",
            joinColumns = @JoinColumn(name = "produto_id"),
            inverseJoinColumns = @JoinColumn(name = "fornecedor_id")
    )
    private Set<Fornecedor> fornecedores = new HashSet<>();

    // Construtores
    public Produto() {}

    public Produto(String nome, Double preco, Integer estoque, Categoria categoria) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
        this.categoria = categoria;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public Double getPreco() { return preco; }
    public void setPreco(Double preco) { this.preco = preco; }

    public Integer getEstoque() { return estoque; }
    public void setEstoque(Integer estoque) { this.estoque = estoque; }

    public Categoria getCategoria() { return categoria; }
    public void setCategoria(Categoria categoria) { this.categoria = categoria; }

    public DetalheProduto getDetalheProduto() { return detalheProduto; }
    public void setDetalheProduto(DetalheProduto detalheProduto) {
        this.detalheProduto = detalheProduto;
        if (detalheProduto != null) {
            detalheProduto.setProduto(this);
        }
    }

    public Set<Fornecedor> getFornecedores() { return fornecedores; }
    public void setFornecedores(Set<Fornecedor> fornecedores) { this.fornecedores = fornecedores; }

    // Métodos auxiliares para gerenciar o relacionamento bidirecional
    public void adicionarFornecedor(Fornecedor fornecedor) {
        this.fornecedores.add(fornecedor);
        fornecedor.getProdutos().add(this);
    }

    public void removerFornecedor(Fornecedor fornecedor) {
        this.fornecedores.remove(fornecedor);
        fornecedor.getProdutos().remove(this);
    }
}
