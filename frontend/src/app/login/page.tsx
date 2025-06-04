// app/login/page.tsx
'use client';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState, FormEvent } from 'react';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'; // Rota padrão após login

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const result = await signIn('credentials', {
                redirect: false, // Não redirecionar automaticamente, lidaremos com isso
                username,
                password,
                callbackUrl,
            });

            if (result?.error) {
                setError('Nome de usuário ou senha inválidos. Por favor, tente novamente.'); // Mensagem de erro genérica
                console.error('Sign in error:', result.error);
            } else if (result?.ok) {
                router.push(callbackUrl); // Redireciona após login bem-sucedido
            }
        } catch (e) {
            setError('Ocorreu um erro inesperado. Por favor, tente novamente.');
            console.error('Sign in exception:', e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="w-full max-w-md m-auto">
                <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
                    {/* Cabeçalho */}
                    <div className="text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Acesso ao Sistema</h1>
                        <p className="text-gray-500">Entre com suas credenciais para acessar</p>
                    </div>

                    {/* Formulário */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Nome de Usuário
                            </label>
                            <input
                                id="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Seu nome de usuário"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                                placeholder="Sua senha"
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 p-4 rounded-md">
                                <p className="text-sm text-red-700">{error}</p>
                            </div>
                        )}

                        <button
                            type="submit"
                            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors
                            ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

                    {/* Link opcional para recuperação de senha */}
                    <div className="text-center">
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Esqueceu sua senha?
                        </a>
                    </div>

                    {/* Separador opcional para outras formas de login */}
                    {/* <div className="relative py-2">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Ou continue com</span>
                        </div>
                    </div> */}

                    {/* Botões de mídia social opcionais */}
                    {/* <div className="grid grid-cols-2 gap-3">
                        <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            Google
                        </button>
                        <button className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                            GitHub
                        </button>
                    </div> */}

                    {/* Link opcional para registro */}
                    <div className="text-center pt-2">
                        <p className="text-sm text-gray-600">
                            Não tem uma conta?{' '}
                            <a href="/register" className="font-medium text-blue-600 hover:text-blue-500">
                                Registre-se
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}