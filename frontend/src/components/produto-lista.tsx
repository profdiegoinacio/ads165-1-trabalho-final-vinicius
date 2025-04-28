'use client';

import { useEffect, useState } from 'react';
import { Produto } from '@/types/produto';
import { ProdutoService } from '@/services/produto-service';

export default function ProdutoLista() {
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [erro, setErro] = useState<string | null>(null);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                setCarregando(true);
                const dados = await ProdutoService.listarTodos();
                setProdutos(dados);
                setErro(null);
            } catch (error) {
                setErro('Falha ao carregar os produtos. Tente novamente mais tarde.');
                console.error(error);
            } finally {
                setCarregando(false);
            }
        }

        carregarProdutos();
    }, []);

    if (carregando) return <div>Carregando produtos...</div>;
    if (erro) return <div className="erro">{erro}</div>;

    return (
        <div>
            <h2>Lista de Produtos</h2>
            {produtos.length === 0 ? (
                <p>Nenhum produto encontrado.</p>
            ) : (
                <ul className="produto-lista">
                    {produtos.map((produto) => (
                        <li key={produto.id} className="produto-item">
                            <h3>{produto.nome}</h3>
                            <p>{produto.descricao}</p>
                            <p className="preco">R$ {produto.preco.toFixed(2)}</p>
                            <p>Estoque: {produto.quantidadeEstoque}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}