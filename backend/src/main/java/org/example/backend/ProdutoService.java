package org.example.backend;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProdutoService {

    private final ProdutoRepository produtoRepository;
    private final CategoriaRepository categoriaRepository;
    private final FornecedorRepository fornecedorRepository;

    @Autowired
    public ProdutoService(
            ProdutoRepository produtoRepository,
            CategoriaRepository categoriaRepository,
            FornecedorRepository fornecedorRepository) {
        this.produtoRepository = produtoRepository;
        this.categoriaRepository = categoriaRepository;
        this.fornecedorRepository = fornecedorRepository;
    }

    // Métodos básicos CRUD para Produto
    @Transactional(readOnly = true)
    public List<Produto> listarTodos() {
        //return produtoRepository.findAll();
        return produtoRepository.findAllWithDetalhes();
    }

    @Transactional(readOnly = true)
    public Page<Produto> listarTodosPaginado(Pageable pageable) {
        return produtoRepository.findAll(pageable);
    }

    @Transactional(readOnly = true)
    public Produto buscarPorId(Long id) {
        return produtoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Produto não encontrado com id: " + id));
    }

    @Transactional
    public Produto salvar(Produto produto) {
        // Verificar se a categoria existe
        if (produto.getCategoria() != null && produto.getCategoria().getId() != null) {
            Categoria categoria = categoriaRepository.findById(produto.getCategoria().getId())
                    .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada"));
            produto.setCategoria(categoria);
        }

        return produtoRepository.save(produto);
    }

    @Transactional
    public Produto atualizar(Long id, Produto produtoAtualizado) {
        Produto produtoExistente = buscarPorId(id);

        produtoExistente.setNome(produtoAtualizado.getNome());
        produtoExistente.setPreco(produtoAtualizado.getPreco());
        produtoExistente.setEstoque(produtoAtualizado.getEstoque());

        // Atualizar categoria se fornecida
        if (produtoAtualizado.getCategoria() != null && produtoAtualizado.getCategoria().getId() != null) {
            Categoria categoria = categoriaRepository.findById(produtoAtualizado.getCategoria().getId())
                    .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada"));
            produtoExistente.setCategoria(categoria);
        }

        // Atualizar detalhes do produto se fornecidos
        if (produtoAtualizado.getDetalheProduto() != null) {
            if (produtoExistente.getDetalheProduto() == null) {
                produtoExistente.setDetalheProduto(produtoAtualizado.getDetalheProduto());
            } else {
                produtoExistente.getDetalheProduto().setDimensoes(produtoAtualizado.getDetalheProduto().getDimensoes());
                produtoExistente.getDetalheProduto().setPeso(produtoAtualizado.getDetalheProduto().getPeso());
                produtoExistente.getDetalheProduto().setMaterial(produtoAtualizado.getDetalheProduto().getMaterial());
            }
        }

        return produtoRepository.save(produtoExistente);
    }

    @Transactional
    public void deletar(Long id) {
        buscarPorId(id); // Verifica se existe
        produtoRepository.deleteById(id);
    }

    // Métodos para gerenciar relacionamentos

    @Transactional
    public Produto adicionarFornecedor(Long produtoId, Long fornecedorId) {
        Produto produto = buscarPorId(produtoId);
        Fornecedor fornecedor = fornecedorRepository.findById(fornecedorId)
                .orElseThrow(() -> new EntityNotFoundException("Fornecedor não encontrado"));

        produto.adicionarFornecedor(fornecedor);
        return produtoRepository.save(produto);
    }

    @Transactional
    public Produto removerFornecedor(Long produtoId, Long fornecedorId) {
        Produto produto = buscarPorId(produtoId);
        Fornecedor fornecedor = fornecedorRepository.findById(fornecedorId)
                .orElseThrow(() -> new EntityNotFoundException("Fornecedor não encontrado"));

        produto.removerFornecedor(fornecedor);
        return produtoRepository.save(produto);
    }

    @Transactional
    public Produto atualizarDetalhes(Long produtoId, DetalheProduto detalhes) {
        Produto produto = buscarPorId(produtoId);

        if (produto.getDetalheProduto() == null) {
            produto.setDetalheProduto(detalhes);
        } else {
            produto.getDetalheProduto().setDimensoes(detalhes.getDimensoes());
            produto.getDetalheProduto().setPeso(detalhes.getPeso());
            produto.getDetalheProduto().setMaterial(detalhes.getMaterial());
        }

        return produtoRepository.save(produto);
    }

    // Métodos para buscar produtos relacionados

    @Transactional(readOnly = true)
    public List<Produto> buscarPorCategoria(Long categoriaId) {
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada"));
        return produtoRepository.findByCategoria(categoria);
    }

    @Transactional(readOnly = true)
    public Page<Produto> buscarPorCategoriaPaginado(Long categoriaId, Pageable pageable) {
        Categoria categoria = categoriaRepository.findById(categoriaId)
                .orElseThrow(() -> new EntityNotFoundException("Categoria não encontrada"));
        return produtoRepository.findByCategoria(categoria, pageable);
    }

    @Transactional(readOnly = true)
    public List<Produto> buscarPorFornecedor(Long fornecedorId) {
        Fornecedor fornecedor = fornecedorRepository.findById(fornecedorId)
                .orElseThrow(() -> new EntityNotFoundException("Fornecedor não encontrado"));
        return produtoRepository.findByFornecedoresContains(fornecedor);
    }

    // Métodos para filtragem avançada com paginação

    @Transactional(readOnly = true)
    public Page<Produto> listarComFiltrosEPaginacao(
            String nome, Double precoMinimo, Double precoMaximo, Long categoriaId, Pageable pageable) {

        Specification<Produto> spec = ProdutoSpecifications.comFiltros(
                nome, precoMinimo, precoMaximo, categoriaId
        );

        return produtoRepository.findAll(spec, pageable);
    }
}
