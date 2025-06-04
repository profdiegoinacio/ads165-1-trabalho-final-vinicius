import {Produto} from '@/types/produto';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

export const ProdutoService = {
    /**
     * Busca todos os produtos disponíveis na API
     */
    async listarTodos(): Promise<Produto[]> {
        const response = await fetch(`${API_URL}/produtos/todos`);

        if (!response.ok) {
            throw new Error(`Erro ao buscar produtos: ${response.status}`);
        }

        return response.json();
    },

    /**
     * Busca um produto específico pelo ID
     */
    async buscarPorId(id: number): Promise<Produto> {
        const response = await fetch(`${API_URL}/produtos/${id}`);

        if (!response.ok) {
            throw new Error(`Erro ao buscar produto: ${response.status}`);
        }

        return response.json();
    },

    /**
     * Cria um novo produto
     */
    async criar(produto: Produto): Promise<Produto> {
        const response = await fetch(`${API_URL}/produtos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        });

        if (!response.ok) {
            throw new Error(`Erro ao criar produto: ${response.status}`);
        }

        return response.json();
    },

    /**
     * Atualiza um produto existente
     */
    async atualizar(produto: Produto): Promise<Produto> {
        if (!produto.id) {
            throw new Error('ID do produto é obrigatório para atualização');
        }

        const response = await fetch(`${API_URL}/produtos/${produto.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        });

        if (!response.ok) {
            throw new Error(`Erro ao atualizar produto: ${response.status}`);
        }

        return response.json();
    },

    /**
     * Remove um produto pelo ID
     */
    async excluir(id: number): Promise<void> {
        const response = await fetch(`${API_URL}/produtos/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`Erro ao excluir produto: ${response.status}`);
        }
    }
};