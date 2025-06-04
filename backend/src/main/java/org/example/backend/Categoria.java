package org.example.backend;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 50)
    private String nome;

    // Lado "Um" do relacionamento bidirecional com Produto
    //@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    //private List<Produto> produtos = new ArrayList<>();

    public Categoria() {}

    public Categoria(String nome) {
        this.nome = nome;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }
    //public List<Produto> getProdutos() { return produtos; }
    //public void setProdutos(List<Produto> produtos) { this.produtos = produtos; }

    // Métodos auxiliares para gerenciar o relacionamento bidirecional
    /*public void addProduto(Produto produto) {
        produtos.add(produto);
        produto.setCategoria(this);
    }

    public void removeProduto(Produto produto) {
        produtos.remove(produto);
        produto.setCategoria(null);
    }*/
}
