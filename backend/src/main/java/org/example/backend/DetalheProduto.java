package org.example.backend;

import jakarta.persistence.*;

@Entity
@Table(name = "detalhes_produto")
public class DetalheProduto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50)
    private String dimensoes;

    private Double peso;

    @Column(length = 100)
    private String material;

    // Lado inverso do relacionamento OneToOne com Produto
    @OneToOne(mappedBy = "detalheProduto", fetch = FetchType.LAZY)
    private Produto produto;

    public DetalheProduto() {}

    // Construtor com parâmetros
    public DetalheProduto(String dimensoes, Double peso, String material) {
        this.dimensoes = dimensoes;
        this.peso = peso;
        this.material = material;
    }

    // Getters e Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getDimensoes() { return dimensoes; }
    public void setDimensoes(String dimensoes) { this.dimensoes = dimensoes; }
    public Double getPeso() { return peso; }
    public void setPeso(Double peso) { this.peso = peso; }
    public String getMaterial() { return material; }
    public void setMaterial(String material) { this.material = material; }
    public Produto getProduto() { return produto; }
    public void setProduto(Produto produto) { this.produto = produto; }
}
