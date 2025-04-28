'use client';

import {useState, useEffect} from 'react';
import {Produto} from '@/types/produto';
import {ProdutoService} from '@/services/produto-service';

interface ProdutoFormProps {
    produtoId?: number;
    onSalvar: () => void;
    onCancelar: () => void;
}

// Definindo um estado inicial consistente para o produto
const produtoInicial: Produto = {
    nome: '',
    descricao: '',
    preco: 0,
    quantidadeEstoque: 0
};

export default function ProdutoForm({produtoId, onSalvar, onCancelar}: ProdutoFormProps) {
    const [produto, setProduto] = useState<Produto>(produtoInicial);
    const [salvando, setSalvando] = useState<boolean>(false);
    const [erro, setErro] = useState<string | null>(null);
    const [carregando, setCarregando] = useState<boolean>(false);

    // Resetar o estado do produto quando o componente montar ou produtoId mudar
    useEffect(() => {
        setProduto(produtoInicial);

        if (produtoId) {
            async function carregarProduto() {
                try {
                    setCarregando(true);
                    const dadosProduto = await ProdutoService.buscarPorId(produtoId!);
                    // Garantir que todos os campos existam, mesmo que a API não retorne
                    setProduto({
                        nome: dadosProduto.nome || '',
                        descricao: dadosProduto.descricao || '',
                        preco: typeof dadosProduto.preco === 'number' ? dadosProduto.preco : 0,
                        quantidadeEstoque: typeof dadosProduto.quantidadeEstoque === 'number' ?
                            dadosProduto.quantidadeEstoque : 0,
                        id: dadosProduto.id
                    });
                } catch (error) {
                    setErro('Erro ao carregar o produto para edição.');
                    console.error(error);
                } finally {
                    setCarregando(false);
                }
            }

            carregarProduto();
        }
    }, [produtoId]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;

        // Conversão de tipos para campos numéricos
        if (name === 'preco' || name === 'quantidadeEstoque') {
            setProduto({
                ...produto,
                [name]: value === '' ? 0 : parseFloat(value)
            });
        } else {
            setProduto({
                ...produto,
                [name]: value
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSalvando(true);
            setErro(null);

            if (produtoId) {
                // Atualiza produto existente
                await ProdutoService.atualizar({
                    ...produto,
                    id: produtoId
                });
            } else {
                // Cria novo produto
                await ProdutoService.criar(produto);
            }

            onSalvar();
        } catch (error) {
            setErro(`Erro ao ${produtoId ? 'atualizar' : 'criar'} o produto.`);
            console.error(error);
        } finally {
            setSalvando(false);
        }
    };

    if (carregando) {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                <span className="ml-3 text-gray-600">Carregando produto...</span>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                {produtoId ? 'Editar Produto' : 'Novo Produto'}
            </h2>

            {erro && (
                <div className="mb-4 p-4 bg-red-50 border-l-4 border-red-600 rounded-md">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <svg className="h-5 w-5 text-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700">{erro}</p>
                        </div>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome do Produto
                    </label>
                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                        Descrição
                    </label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={produto.descricao}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="preco" className="block text-sm font-medium text-gray-700 mb-1">
                            Preço (R$)
                        </label>
                        <div className="relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <span className="text-gray-500 sm:text-sm">R$</span>
                            </div>
                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                id="preco"
                                name="preco"
                                value={produto.preco}
                                onChange={handleChange}
                                required
                                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="quantidadeEstoque" className="block text-sm font-medium text-gray-700 mb-1">
                            Quantidade em Estoque
                        </label>
                        <input
                            type="number"
                            min="0"
                            id="quantidadeEstoque"
                            name="quantidadeEstoque"
                            value={produto.quantidadeEstoque}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-end space-x-4 pt-4">
                    <button
                        type="button"
                        onClick={onCancelar}
                        className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        disabled={salvando}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${salvando ? 'opacity-75 cursor-not-allowed' : ''}`}
                    >
                        {salvando ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Salvando...
                            </>
                        ) : (
                            'Salvar Produto'
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}