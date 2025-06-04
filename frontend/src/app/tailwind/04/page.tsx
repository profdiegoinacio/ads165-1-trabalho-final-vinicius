// pages/conceitos/04-tema-escuro.tsx
'use client'
import { useState, useEffect } from 'react';

export default function TemaEscuro() {
    // Estado para controlar o modo de tema (claro/escuro)
    const [darkMode, setDarkMode] = useState(false);

    // Efeito para aplicar a classe 'dark' ao elemento HTML
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Função para alternar entre modos claro e escuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8 transition-colors duration-150">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
                    Tema Escuro com Tailwind CSS
                </h1>

                {/*
          SEÇÃO 1: BOTÃO DE ALTERNÂNCIA
          Demonstra como criar um botão para alternar entre modos claro e escuro
        */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-150">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Alternando entre Temas
                    </h2>

                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Clique no botão abaixo para alternar entre os modos claro e escuro:
                    </p>

                    <div className="flex justify-center mb-6">
                        <button
                            onClick={toggleDarkMode}
                            className="flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-150"
                        >
                            {darkMode ? (
                                <>
                                    <span className="mr-2">☀️</span> Mudar para Modo Claro
                                </>
                            ) : (
                                <>
                                    <span className="mr-2">🌙</span> Mudar para Modo Escuro
                                </>
                            )}
                        </button>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded">
                        <h3 className="font-medium mb-2 text-blue-800 dark:text-blue-200">Código para implementar o alternador:</h3>
                        <pre className="bg-gray-800 text-gray-200 p-3 rounded text-sm overflow-x-auto">
              {`// Estado para controlar o modo de tema (claro/escuro)
const [darkMode, setDarkMode] = useState(false);

// Efeito para aplicar a classe 'dark' ao elemento HTML
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

// Função para alternar entre modos claro e escuro
const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};`}
            </pre>
                    </div>
                </section>

                {/*
          SEÇÃO 2: CONFIGURAÇÃO DO TAILWIND
          Explica como configurar o Tailwind para suportar tema escuro
        */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-150">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Configuração do Tailwind
                    </h2>

                    <p className="mb-4 text-gray-700 dark:text-gray-300">
                        Para suportar tema escuro no Tailwind CSS, você precisa configurar seu arquivo
                        <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200 mx-1">tailwind.config.js</code>:
                    </p>

                    <pre className="bg-gray-800 text-gray-200 p-3 rounded text-sm overflow-x-auto mb-6">
            {`// tailwind.config.js
module.exports = {
  darkMode: 'class', // Habilita modo escuro baseado em classes
  // ... outras configurações
}`}
          </pre>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Com essa configuração, você pode usar o prefixo <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200">dark:</code>
                        em suas classes para aplicar estilos específicos quando o modo escuro estiver ativo.
                    </p>

                    <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded">
                        <h3 className="font-medium mb-2 text-yellow-800 dark:text-yellow-200">Nota:</h3>
                        <p className="text-yellow-700 dark:text-yellow-300">
                            O Tailwind oferece duas opções para o modo escuro:
                        </p>
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-yellow-700 dark:text-yellow-300">
                            <li><code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">class</code> - Ativa o modo escuro quando a classe 'dark' é aplicada ao elemento HTML</li>
                            <li><code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">media</code> - Ativa o modo escuro baseado na preferência do sistema (via media query)</li>
                        </ul>
                    </div>
                </section>

                {/*
          SEÇÃO 3: EXEMPLOS DE COMPONENTES COM TEMA ESCURO
          Mostra diferentes componentes adaptados para tema claro/escuro
        */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 transition-colors duration-150">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Exemplos de Componentes
                    </h2>

                    <p className="mb-6 text-gray-700 dark:text-gray-300">
                        Veja abaixo exemplos de componentes adaptados para suportar tema claro e escuro:
                    </p>

                    <div className="space-y-8">
                        {/* Card */}
                        <div>
                            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">Card</h3>
                            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md p-6 transition-colors duration-150">
                                <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                                    Título do Card
                                </h4>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    Este card adapta suas cores automaticamente quando o tema é alterado.
                                </p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150">
                                    Ação
                                </button>
                            </div>

                            <pre className="mt-3 bg-gray-800 text-gray-200 p-3 rounded text-sm overflow-x-auto">
                {`<div class="bg-white dark:bg-gray-700 border border-gray-200 
  dark:border-gray-600 rounded-lg shadow-md p-6">
  <h4 class="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
    Título do Card
  </h4>
  <p class="text-gray-600 dark:text-gray-300 mb-4">
    Este card adapta suas cores automaticamente quando o tema é alterado.
  </p>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Ação
  </button>
</div>`}
              </pre>
                        </div>

                        {/* Form */}
                        <div>
                            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">Formulário</h3>
                            <form className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md p-6 transition-colors duration-150">
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2" htmlFor="username">
                                        Nome de usuário
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="username"
                                        type="text"
                                        placeholder="Digite seu nome de usuário"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-gray-700 dark:text-gray-200 text-sm font-medium mb-2" htmlFor="password">
                                        Senha
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        id="password"
                                        type="password"
                                        placeholder="Digite sua senha"
                                    />
                                </div>
                                <button
                                    className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-150"
                                    type="button"
                                >
                                    Entrar
                                </button>
                            </form>
                        </div>

                        {/* Alert */}
                        <div>
                            <h3 className="text-xl font-medium mb-3 text-gray-800 dark:text-white">Alerta</h3>
                            <div className="bg-yellow-50 dark:bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded transition-colors duration-150">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <span className="text-yellow-500 dark:text-yellow-300">⚠️</span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700 dark:text-yellow-200">
                                            Atenção: Este é um alerta importante que adapta suas cores no tema escuro.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-4 bg-red-50 dark:bg-red-900 border-l-4 border-red-500 p-4 rounded transition-colors duration-150">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <span className="text-red-500 dark:text-red-300">⛔</span>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-red-700 dark:text-red-200">
                                            Erro: Não foi possível completar a operação.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*
          SEÇÃO 4: DICAS E MELHORES PRÁTICAS
          Fornece dicas para trabalhar com tema escuro
        */}
                <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-150">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Dicas e Melhores Práticas
                    </h2>

                    <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <div className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 mt-0.5">1</span>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Use transições suaves</h3>
                                <p>
                                    Adicione classes de transição para tornar a mudança de tema mais suave:
                                    <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200 mx-1">transition-colors duration-150</code>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 mt-0.5">2</span>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Contraste adequado</h3>
                                <p>
                                    Certifique-se de manter um bom contraste entre texto e fundo em ambos os modos.
                                    Textos escuros em fundos claros, e textos claros em fundos escuros.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 mt-0.5">3</span>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Persistência da preferência</h3>
                                <p>
                                    Use localStorage para salvar a preferência do usuário e aplicá-la automaticamente ao carregar a página:
                                </p>
                                <pre className="mt-2 bg-gray-800 text-gray-200 p-3 rounded text-sm overflow-x-auto">
                  {`// Salvar a preferência
localStorage.setItem('darkMode', JSON.stringify(true));

// Recuperar a preferência
const savedMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
setDarkMode(savedMode);`}
                </pre>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 mt-0.5">4</span>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Considere preferências do sistema</h3>
                                <p>
                                    Você pode detectar a preferência do sistema do usuário e aplicar o tema adequado automaticamente:
                                </p>
                                <pre className="mt-2 bg-gray-800 text-gray-200 p-3 rounded text-sm overflow-x-auto">
                  {`// Detectar preferência do sistema
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setDarkMode(prefersDark);

// Ouvir mudanças na preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  setDarkMode(event.matches);
});`}
                </pre>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <span className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 p-1 rounded mr-3 mt-0.5">5</span>
                            <div>
                                <h3 className="font-medium text-gray-900 dark:text-white">Não dependa apenas de cores</h3>
                                <p>
                                    Para elementos importantes como alertas ou estados, use ícones em conjunto com cores para aumentar a acessibilidade.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
