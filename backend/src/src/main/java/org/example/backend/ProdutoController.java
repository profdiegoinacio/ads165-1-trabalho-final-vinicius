package org.example.backend;

import jakarta.annotation.PostConstruct;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

/**
 * Representa os dados de requisição para criação ou atualização de um produto.
 * Valida os campos fornecidos para garantir consistência e evitar entradas inválidas.
 *
 * @param nome              Nome do produto (obrigatório, entre 3 e 50 caracteres).
 * @param descricao         Descrição do produto (obrigatório, máximo de 500 caracteres).
 * @param preco             Preço do produto (obrigatório, maior ou igual a zero).
 * @param quantidadeEstoque Quantidade em estoque (obrigatório, maior ou igual a zero).
 * @param categorias        Lista de categorias do produto (opcional, inicializada como vazia se não fornecida).
 */
record RequestProduto(
        @NotBlank(message = "O nome não pode ser vazio.")
        @Size(min = 3, max = 50, message = "O nome deve ter entre 3 e 50 caracteres.")
        String nome,

        @NotBlank(message = "A descrição não pode ser vazia.")
        @Size(max = 500, message = "A descrição deve ter no máximo 500 caracteres.")
        String descricao,

        @NotNull(message = "O preço não pode ser nulo.")
        @Min(value = 0, message = "O preço deve ser maior ou igual a zero.")
        Double preco,

        @NotNull(message = "A quantidade em estoque não pode ser nula.")
        @Min(value = 0, message = "A quantidade em estoque deve ser maior ou igual a zero.")
        Integer quantidadeEstoque,

        List<String> categorias
) {
    /**
     * Construtor para a criação de uma instância de {@link RequestProduto}.
     *
     * @param nome              Nome do produto.
     * @param descricao         Descrição do produto.
     * @param preco             Preço do produto.
     * @param quantidadeEstoque Quantidade em estoque.
     * @param categorias        Lista de categorias do produto.
     */
    public RequestProduto(String nome, String descricao, Double preco, Integer quantidadeEstoque, List<String> categorias) {
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
        this.categorias = categorias != null ? categorias : List.of();
    }
}

/**
 * Controller responsável por gerenciar as operações relacionadas aos produtos.
 * Fornece endpoints REST para criar, buscar, atualizar e excluir produtos.
 * Também inclui funcionalidades de filtros, ordenação e paginação para consulta de produtos.
 */
@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private final List<Produto> produtos = new ArrayList<>();

    /**
     * Metodo de inicialização utilizado para popular a lista de produtos, somente para testes ou simulação.
     * Esse metodo é executado automaticamente após a construção da classe (@PostConstruct).
     */
    @PostConstruct
    public void inicializarProdutos() {
        produtos.add(new Produto(
                IdGenerator.nextId(Produto.class),
                "iPhone 14",
                "Smartphone Apple com chip A15 Bionic, câmera dupla de 12MP e tela Super Retina XDR de 6,1 polegadas.",
                7999.0,
                50,
                List.of("Eletrônicos", "Smartphones")
        ));

        produtos.add(new Produto(
                IdGenerator.nextId(Produto.class),
                "Samsung Galaxy S23",
                "Smartphone Samsung com processador Snapdragon 8 Gen 2, câmera tripla de até 50MP e tela Dynamic AMOLED 2X de 6,1 polegadas.",
                6999.0,
                30,
                List.of("Eletrônicos", "Smartphones")
        ));

        produtos.add(new Produto(
                IdGenerator.nextId(Produto.class),
                "Notebook Dell Inspiron",
                "Notebook com processador Intel Core i5, 8GB de RAM, SSD de 256GB e tela Full HD de 15,6 polegadas.",
                4999.0,
                20,
                List.of("Eletrônicos", "Computadores")
        ));
    }

    /**
     * Endpoint para buscar produtos. Suporta filtros, ordenação e paginação configuráveis por parâmetros de requisição.
     *
     * @param nome        Filtro para buscar produtos pelo nome (opcional).
     * @param precoMinimo Filtro para buscar produtos com preço maior ou igual a um valor especificado (opcional).
     * @param categorias  Lista de categorias a serem usadas como filtro (opcional).
     * @param ordenarPor  Campo pelo qual os produtos serão ordenados (opcional, padrão: "nome").
     * @param ordem       Ordem da lista: ascendente (asc) ou descendente (desc) (opcional, padrão: "asc").
     * @param pagina      Número da página para paginação (opcional).
     * @param tamanho     Tamanho da página (quantidade de itens por página) (opcional).
     * @return Lista de produtos filtrada, ordenada e paginada.
     */
    @GetMapping
    public ResponseEntity<List<Produto>> buscarProdutos(
            @RequestParam(name = "nome", required = false) String nome,
            @RequestParam(name = "precoMinimo", required = false) Double precoMinimo,
            @RequestParam(name = "categoria", required = false) List<String> categorias,
            @RequestParam(name = "ordenarPor", defaultValue = "nome") String ordenarPor,
            @RequestParam(name = "ordem", defaultValue = "asc") String ordem,
            @RequestParam(name = "pagina", required = false) Integer pagina,
            @RequestParam(name = "tamanho", required = false) Integer tamanho) {

        // Aplicar filtros e ordenação
        List<Produto> produtosFiltrados = filtrarProdutos(nome, precoMinimo, categorias);
        produtosFiltrados = ordenarProdutos(produtosFiltrados, ordenarPor, ordem);

        // Aplicar paginação, se necessário
        if (pagina != null && tamanho != null) {
            return aplicarPaginacao(produtosFiltrados, pagina, tamanho);
        }

        return ResponseEntity.ok(produtosFiltrados);
    }

    /**
     * Busca um único produto pelo seu identificador (ID).
     *
     * @param id O ID do produto a ser buscado.
     * @return Produto encontrado ou erro 404 caso o produto não exista.
     */
    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarProdutoPorId(@PathVariable Long id) {
        Produto produto = recuperarProdutoPorId(id);
        return ResponseEntity.ok(produto);
    }

    /**
     * Cria um novo produto a partir das informações fornecidas no corpo da requisição (JSON).
     *
     * @param request O objeto Produto enviado no corpo da requisição (deve ser válido).
     * @return O produto criado, com código HTTP 201 (Created).
     */
    @PostMapping
    public ResponseEntity<Produto> criarProduto(@Valid @RequestBody RequestProduto request) {
        Produto produto = new Produto(
                IdGenerator.nextId(Produto.class),
                request.nome(),
                request.descricao(),
                request.preco(),
                request.quantidadeEstoque(),
                request.categorias()
        );

        produtos.add(produto);
        return ResponseEntity.status(HttpStatus.CREATED).body(produto);
    }

    /**
     * Exclui um produto existente pelo seu identificador (ID).
     *
     * @param id O ID do produto a ser excluído.
     * @return Código HTTP 204 (No Content) se a exclusão for bem-sucedida.
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirProduto(@PathVariable Long id) {
        Produto produto = recuperarProdutoPorId(id);
        produtos.remove(produto);
        return ResponseEntity.noContent().build();
    }

    /**
     * Atualiza completamente os dados de um produto existente pelo ID.
     *
     * @param id      O ID do produto que será atualizado.
     * @param request O objeto Produto atualizado enviado no corpo da requisição.
     * @return O produto atualizado ou erro 404 caso o produto não exista.
     */
    @PutMapping("/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable Long id, @Valid @RequestBody RequestProduto request) {
        Produto produto = recuperarProdutoPorId(id);
        produto.setNome(request.nome());
        produto.setDescricao(request.descricao());
        produto.setPreco(request.preco());
        produto.setQuantidadeEstoque(request.quantidadeEstoque());
        produto.setCategorias(request.categorias());
        return ResponseEntity.ok(produto);
    }

    /**
     * Atualiza parcialmente os dados de um produto existente pelo ID.
     *
     * @param id     O ID do produto a ser atualizado.
     * @param fields Um mapa contendo os campos e valores a serem atualizados.
     * @return O produto parcialmente atualizado ou erro 404 caso o produto não exista.
     */
    @PatchMapping("/{id}")
    public ResponseEntity<Produto> atualizarParcialmenteProduto(@PathVariable Long id, @RequestBody Map<String, Object> fields) {
        Produto produto = produtos.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Produto não encontrado com o ID: " + id));

        fields.forEach((key, value) -> {
            if (value == null) {
                throw new IllegalArgumentException("O valor para o campo '" + key + "' não pode ser nulo.");
            }

            switch (key) {
                case "nome" -> {
                    if (!(value instanceof String)) {
                        throw new IllegalArgumentException("O campo 'nome' deve ser uma String.");
                    }
                    produto.setNome((String) value);
                }
                case "preco" -> {
                    if (!(value instanceof Number)) {
                        throw new IllegalArgumentException("O campo 'preco' deve ser numérico.");
                    }
                    produto.setPreco(Double.valueOf(value.toString()));
                }
                case "categorias" -> {
                    if (!(value instanceof List<?>)) {
                        throw new IllegalArgumentException("O campo 'categorias' deve ser uma lista de Strings.");
                    }
                    List<String> categorias = ((List<?>) value).stream()
                            .map(Object::toString)
                            .collect(Collectors.toList());
                    produto.setCategorias(categorias);
                }
                default -> throw new IllegalArgumentException("Campo inválido: " + key);
            }
        });

        return ResponseEntity.ok(produto);
    }

    /**
     * Exceção personalizada para lidar com casos onde um produto não é encontrado.
     * Esse metodo é chamado automaticamente pelo Spring em exceções do tipo NoSuchElementException.
     *
     * @param ex A exceção capturada (detalhes do erro).
     * @return Mensagem de erro com código HTTP 404 (Not Found).
     */
    @ExceptionHandler(NoSuchElementException.class)
    public ResponseEntity<String> handleNoSuchElementException(NoSuchElementException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    /**
     * Recupera um produto pelo seu identificador (ID).
     * Pesquisa a lista de produtos armazenados e retorna o produto correspondente ao ID fornecido.
     * Caso o produto não seja encontrado, lança uma exceção {@link NoSuchElementException}.
     *
     * @param id O identificador único do produto que se deseja recuperar.
     * @return O produto correspondente ao ID fornecido.
     * @throws NoSuchElementException Se nenhum produto for encontrado com o ID fornecido.
     */
    private Produto recuperarProdutoPorId(Long id) {
        return produtos.stream()
                .filter(produto -> produto.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new NoSuchElementException("Produto não encontrado com o ID: " + id));
    }


    /**
     * Filtra produtos da lista com base nos critérios especificados (nome, preço mínimo, categorias).
     * Este metodo é usado internamente por `buscarProdutos()`.
     *
     * @param nome        Nome do produto (opcional).
     * @param precoMinimo Preço mínimo (opcional).
     * @param categorias  Categorias desejadas (opcional).
     * @return Uma lista filtrada de produtos.
     */
    private List<Produto> filtrarProdutos(String nome, Double precoMinimo, List<String> categorias) {
        return produtos.stream()
                .filter(p -> nome == null || p.getNome().toLowerCase().contains(nome.toLowerCase()))
                .filter(p -> precoMinimo == null || p.getPreco() >= precoMinimo)
                .filter(p -> categorias == null || categorias.stream()
                        .anyMatch(categoria -> p.getCategorias().stream()
                                .anyMatch(prodCategoria -> prodCategoria.equalsIgnoreCase(categoria))))
                .collect(Collectors.toList());
    }

    /**
     * Ordena uma lista de produtos com base em um campo e ordem (ascendente/descendente).
     * Este metodo é usado internamente por `buscarProdutos()`.
     *
     * @param produtos   Lista de produtos a ser ordenada.
     * @param ordenarPor Campo de ordenação (ex.: nome, preço).
     * @param ordem      Ordem da ordenação: ascendente (asc) ou descendente (desc).
     * @return Uma lista ordenada de produtos.
     */
    private List<Produto> ordenarProdutos(List<Produto> produtos, String ordenarPor, String ordem) {
        return produtos.stream()
                .sorted((p1, p2) -> {
                    int comparison = switch (ordenarPor) {
                        case "id" -> Long.compare(p1.getId(), p2.getId());
                        case "nome" -> p1.getNome().compareToIgnoreCase(p2.getNome());
                        default -> 0;
                    };
                    return "desc".equalsIgnoreCase(ordem) ? -comparison : comparison;
                })
                .collect(Collectors.toList());
    }

    /**
     * Aplica paginação a uma lista de produtos.
     * Este metodo é usado internamente por `buscarProdutos()`.
     *
     * @param produtos Lista de produtos a ser paginada.
     * @param pagina   Número da página.
     * @param tamanho  Tamanho da página.
     * @return Uma resposta paginada contendo apenas o subconjunto solicitado.
     */
    private ResponseEntity<List<Produto>> aplicarPaginacao(List<Produto> produtos, int pagina, int tamanho) {
        final String HEADER_TOTAL_COUNT = "X-Total-Count";
        final String HEADER_TOTAL_PAGES = "X-Total-Pages";
        final String HEADER_PAGE = "X-Page";
        final String HEADER_PAGE_SIZE = "X-Page-Size";

        int totalRegistros = produtos.size();
        int totalPaginas = (int) Math.ceil((double) totalRegistros / tamanho);
        int inicio = pagina * tamanho;
        int fim = Math.min(inicio + tamanho, totalRegistros);

        List<Produto> paginaDeProdutos = inicio < totalRegistros
                ? produtos.subList(inicio, fim)
                : List.of();

        return ResponseEntity.ok()
                .header(HEADER_TOTAL_COUNT, String.valueOf(totalRegistros))
                .header(HEADER_TOTAL_PAGES, String.valueOf(totalPaginas))
                .header(HEADER_PAGE, String.valueOf(pagina))
                .header(HEADER_PAGE_SIZE, String.valueOf(tamanho))
                .body(paginaDeProdutos);
    }
}
