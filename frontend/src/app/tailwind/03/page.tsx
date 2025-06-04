// pages/conceitos/03-componentes-ui.tsx
'use client'

export default function ComponentesUI() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Componentes UI Comuns com Tailwind CSS</h1>

            {/*
        SEÇÃO 1: BOTÕES
        Mostra diferentes estilos de botões com Tailwind
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Botões</h2>
                <p className="mb-4">
                    Os botões são elementos de interface essenciais. Com Tailwind CSS, podemos criar
                    variações de botões facilmente usando classes utilitárias:
                </p>

                <div className="space-y-6 mb-6">
                    {/* Botões básicos */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Botões Básicos</h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Primário
                            </button>
                            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                                Secundário
                            </button>
                            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                Perigo
                            </button>
                            <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                Sucesso
                            </button>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  Primário
</button>`}
            </pre>
                    </div>

                    {/* Botões com bordas */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Botões com Bordas</h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                Primário Outline
                            </button>
                            <button className="px-4 py-2 border border-gray-500 text-gray-500 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
                                Secundário Outline
                            </button>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<button class="px-4 py-2 border border-blue-500 text-blue-500 rounded 
  hover:bg-blue-50 focus:outline-none focus:ring-2 
  focus:ring-blue-500 focus:ring-opacity-50">
  Primário Outline
</button>`}
            </pre>
                    </div>

                    {/* Botões com ícones */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Botões com Ícones</h3>
                        <div className="flex flex-wrap gap-3">
                            <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                                <span className="mr-2">➕</span>
                                Adicionar Item
                            </button>
                            <button className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                                <span className="mr-2">🗑️</span>
                                Excluir
                            </button>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<button class="flex items-center px-4 py-2 bg-blue-500 text-white rounded 
  hover:bg-blue-600 focus:outline-none focus:ring-2 
  focus:ring-blue-500 focus:ring-opacity-50">
  <span class="mr-2">➕</span>
  Adicionar Item
</button>`}
            </pre>
                    </div>

                    {/* Botões de tamanhos diferentes */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Tamanhos de Botões</h3>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="px-2 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                                Pequeno
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Médio
                            </button>
                            <button className="px-6 py-3 text-lg bg-blue-500 text-white rounded hover:bg-blue-600">
                                Grande
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dicas para botões */}
                <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Dicas para botões:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Use classes <code>focus:</code> para melhorar a acessibilidade</li>
                        <li>Adicione classes <code>hover:</code> para feedback visual ao passar o mouse</li>
                        <li>Use <code>flex items-center</code> para alinhar ícones e texto</li>
                        <li>Considere estados desabilitados com <code>opacity-50 cursor-not-allowed</code></li>
                    </ul>
                </div>
            </section>

            {/*
        SEÇÃO 2: CARDS
        Diferentes estilos de cards usando Tailwind
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Cards</h2>
                <p className="mb-4">
                    Cards são componentes versáteis usados para exibir conteúdo agrupado. O Tailwind
                    facilita a criação de diversos estilos de cards:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Card básico */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Card Básico</h3>
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                            <h4 className="text-xl font-semibold mb-2">Título do Card</h4>
                            <p className="text-gray-600 mb-4">
                                Este é um card básico com título, texto e um botão de ação.
                            </p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Ação
                            </button>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
  <h4 class="text-xl font-semibold mb-2">Título do Card</h4>
  <p class="text-gray-600 mb-4">
    Este é um card básico com título, texto e um botão de ação.
  </p>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Ação
  </button>
</div>`}
            </pre>
                    </div>

                    {/* Card com imagem */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Card com Imagem</h3>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                            <div className="h-48 bg-gray-300 flex items-center justify-center">
                                <span className="text-gray-500">Imagem</span>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-semibold mb-2">Título do Card</h4>
                                <p className="text-gray-600 mb-4">
                                    Um card com imagem no topo seguido do conteúdo.
                                </p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Ver Mais
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card horizontal */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Card Horizontal</h3>
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-gray-300 flex items-center justify-center p-6 md:p-0">
                                <span className="text-gray-500">Imagem</span>
                            </div>
                            <div className="md:w-2/3 p-6">
                                <h4 className="text-xl font-semibold mb-2">Título do Card</h4>
                                <p className="text-gray-600 mb-4">
                                    Este card utiliza layout horizontal em telas maiores.
                                </p>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Detalhes
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card com distintivos/badges */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Card com Badges</h3>
                        <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="text-xl font-semibold">Projeto TaskFlow</h4>
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Concluído
                </span>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Descrição do projeto com etiquetas de status e categorias.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  React
                </span>
                                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Tailwind
                </span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  TypeScript
                </span>
                            </div>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Ver Projeto
                            </button>
                        </div>
                    </div>
                </div>

                {/* Dicas para cards */}
                <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Dicas para cards:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Use <code>shadow-md</code> ou <code>shadow-lg</code> para elevar os cards</li>
                        <li>Combine com <code>hover:</code> para efeitos interativos</li>
                        <li>Use <code>overflow-hidden</code> para garantir que imagens e conteúdo respeitem as bordas arredondadas</li>
                        <li>Considere <code>border border-gray-200</code> para delimitar melhor os cards em fundos claros</li>
                    </ul>
                </div>
            </section>

            {/*
        SEÇÃO 3: BADGES E CHIPS
        Exibe diferentes tipos de badges e chips
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Badges e Chips</h2>
                <p className="mb-4">
                    Badges e chips são elementos pequenos que mostram status, categorias ou rótulos.
                    São ótimos para destacar informações em cards, listas ou tabelas:
                </p>

                <div className="space-y-6 mb-6">
                    {/* Badges básicos */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Badges Básicos</h3>
                        <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Default
              </span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Secundário
              </span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Erro
              </span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Sucesso
              </span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Alerta
              </span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Info
              </span>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
  Default
</span>`}
            </pre>
                    </div>

                    {/* Badges com bordas */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Badges com Bordas</h3>
                        <div className="flex flex-wrap gap-2">
              <span className="bg-white text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded border border-blue-400">
                Default
              </span>
                            <span className="bg-white text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded border border-gray-400">
                Secundário
              </span>
                            <span className="bg-white text-red-800 text-xs font-medium px-2.5 py-0.5 rounded border border-red-400">
                Erro
              </span>
                            <span className="bg-white text-green-800 text-xs font-medium px-2.5 py-0.5 rounded border border-green-400">
                Sucesso
              </span>
                        </div>
                    </div>

                    {/* Badges arredondados (pills) */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Badges em Formato Pill</h3>
                        <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                Default
              </span>
                            <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                Secundário
              </span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                Erro
              </span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                Sucesso
              </span>
                        </div>

                        <pre className="mt-2 bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<span class="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
  Default
</span>`}
            </pre>
                    </div>

                    {/* Badges com ícones */}
                    <div>
                        <h3 className="text-lg font-medium mb-3">Badges com Ícones</h3>
                        <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                <span className="mr-1">✅</span> Concluído
              </span>
                            <span className="inline-flex items-center bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                <span className="mr-1">⏳</span> Em andamento
              </span>
                            <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                <span className="mr-1">⚠️</span> Pendente
              </span>
                        </div>
                    </div>
                </div>

                {/* Dicas para badges */}
                <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Dicas para badges:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Use <code>rounded-full</code> para badges em formato pill</li>
                        <li>Combine cores de background e texto para criar contraste adequado</li>
                        <li>Use <code>inline-flex items-center</code> para alinhar ícones com o texto</li>
                        <li>Mantenha os badges pequenos e concisos com <code>text-xs</code> ou <code>text-sm</code></li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
