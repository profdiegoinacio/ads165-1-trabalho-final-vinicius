'use client'

export default function LayoutResponsivo() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Layout Responsivo com Tailwind CSS</h1>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Breakpoints Responsivos</h2>
                <p className="mb-4">
                    O Tailwind CSS fornece um conjunto de breakpoints para criar designs responsivos:
                </p>

                <div className="overflow-x-auto">
                    <table className="min-w-full mb-6">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 text-left">Prefixo</th>
                            <th className="px-6 py-3 text-left">Largura mínima</th>
                            <th className="px-6 py-3 text-left">CSS</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4">(sem prefixo)</td>
                            <td className="px-6 py-4">0px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 0px) </code></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">sm</td>
                            <td className="px-6 py-4">640px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 640px) </code></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">md</td>
                            <td className="px-6 py-4">768px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 768px) </code></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">lg</td>
                            <td className="px-6 py-4">1024px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 1024px) </code></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">xl</td>
                            <td className="px-6 py-4">1280px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 1280px) </code></td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4">2xl</td>
                            <td className="px-6 py-4">1536px</td>
                            <td className="px-6 py-4"><code>@media (min-width: 1536px) </code></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <p className="mb-2">
                    Para usar um breakpoint, adicione o prefixo antes da classe:
                </p>
                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto mb-4">
          {`<div className="w-full md:w-1/2 lg:w-1/3">
  <!-- Largura completa em dispositivos pequenos -->
  <!-- Meia largura em dispositivos médios (md) -->
  <!-- Um terço de largura em dispositivos grandes (lg) -->
</div>`}
        </pre>

                <div className="bg-blue-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Abordagem Mobile-First:</h3>
                    <p>
                        O Tailwind usa uma abordagem "mobile-first", o que significa que as classes sem
                        prefixo se aplicam a todos os tamanhos de tela, e as classes com prefixos só se
                        aplicam quando a tela atinge ou excede esse breakpoint.
                    </p>
                </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Demonstração de Layout Responsivo</h2>

                <p className="mb-4">
                    Redimensione a janela do navegador para ver as mudanças em ação:
                </p>

                <div className="mb-8">
                    <h3 className="text-xl font-medium mb-3">Exemplo 1: Colunas Responsivas</h3>
                    <p className="mb-2">
                        As colunas mudam de acordo com o tamanho da tela:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                        <div className="bg-blue-200 p-4 rounded text-center">Item 1</div>
                        <div className="bg-blue-300 p-4 rounded text-center">Item 2</div>
                        <div className="bg-blue-400 p-4 rounded text-center">Item 3</div>
                        <div className="bg-blue-500 p-4 rounded text-center">Item 4</div>
                    </div>

                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 1 coluna em celulares -->
  <!-- 2 colunas em tablets (md) -->
  <!-- 4 colunas em desktops (lg) -->
</div>`}
          </pre>
                </div>

                <div className="mb-8">
                    <h3 className="text-xl font-medium mb-3">Exemplo 2: Navegação Responsiva</h3>
                    <p className="mb-2">
                        A navegação muda de vertical para horizontal em telas maiores:
                    </p>

                    <div className="border rounded mb-3">
                        <nav className="bg-gray-800 text-white">
                            <div className="flex flex-col md:flex-row">
                                <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Home</a>
                                <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Produtos</a>
                                <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Serviços</a>
                                <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Sobre</a>
                                <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Contato</a>
                            </div>
                        </nav>
                    </div>

                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`<nav className="bg-gray-800 text-white">
  <div className="flex flex-col md:flex-row">
    <!-- Links em coluna em celulares -->
    <!-- Links em linha em tablets (md) -->
    <a href="#" className="px-4 py-3 hover:bg-gray-700 block md:inline-block">Link</a>
    <!-- mais links... -->
  </div>
</nav>`}
          </pre>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-3">Exemplo 3: Visibilidade Responsiva</h3>
                    <p className="mb-2">
                        Elementos que aparecem ou desaparecem dependendo do tamanho da tela:
                    </p>

                    <div className="mb-3">
                        <div className="block md:hidden p-4 bg-red-200 rounded">
                            Visível apenas em dispositivos móveis
                        </div>
                        <div className="hidden md:block p-4 bg-green-200 rounded">
                            Visível apenas em tablets e desktops
                        </div>
                    </div>

                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`<!-- Visível em celulares, oculto em tablets/desktops -->
<div className="block md:hidden">
  Conteúdo para telas pequenas
</div>

<!-- Oculto em celulares, visível em tablets/desktops -->
<div className="hidden md:block">
  Conteúdo para telas maiores
</div>`}
          </pre>
                </div>
            </section>

            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Flexbox e Grid no Tailwind</h2>

                <div className="mb-8">
                    <h3 className="text-xl font-medium mb-3">Flexbox</h3>
                    <p className="mb-4">
                        Flexbox é ideal para layouts unidimensionais (linha ou coluna):
                    </p>

                    <div className="space-y-6 mb-4">
                        <div>
                            <p className="mb-2">Flex em linha com itens centralizados:</p>
                            <div className="flex items-center justify-center bg-gray-100 p-4 rounded">
                                <div className="bg-blue-500 text-white p-3 m-2">Item 1</div>
                                <div className="bg-blue-500 text-white p-3 m-2">Item 2</div>
                                <div className="bg-blue-500 text-white p-3 m-2">Item 3</div>
                            </div>
                            <code className="text-sm mt-2 block">flex items-center justify-center</code>
                        </div>

                        <div>
                            <p className="mb-2">Flex em coluna:</p>
                            <div className="flex flex-col bg-gray-100 p-4 rounded">
                                <div className="bg-green-500 text-white p-3 m-2">Item 1</div>
                                <div className="bg-green-500 text-white p-3 m-2">Item 2</div>
                                <div className="bg-green-500 text-white p-3 m-2">Item 3</div>
                            </div>
                            <code className="text-sm mt-2 block">flex flex-col</code>
                        </div>

                        <div>
                            <p className="mb-2">Flex com espaço entre itens:</p>
                            <div className="flex justify-between bg-gray-100 p-4 rounded">
                                <div className="bg-purple-500 text-white p-3">Início</div>
                                <div className="bg-purple-500 text-white p-3">Meio</div>
                                <div className="bg-purple-500 text-white p-3">Fim</div>
                            </div>
                            <code className="text-sm mt-2 block">flex justify-between</code>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded mb-6">
                        <h4 className="font-medium mb-2">Classes Flexbox Comuns:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><code>flex</code> - Ativa o layout flexbox</li>
                            <li><code>flex-row</code> / <code>flex-col</code> - Define a direção</li>
                            <li><code>items-center</code> / <code>items-start</code> / <code>items-end</code> -
                                Alinhamento vertical
                            </li>
                            <li><code>justify-center</code> / <code>justify-between</code> / <code>justify-end</code> -
                                Alinhamento horizontal
                            </li>
                            <li><code>flex-wrap</code> - Permite quebra de linha</li>
                            <li><code>flex-1</code> / <code>flex-auto</code> / <code>flex-none</code> - Controla o
                                crescimento/encolhimento
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h3 className="text-xl font-medium mb-3">Grid</h3>
                    <p className="mb-4">
                        Grid é ideal para layouts bidimensionais (linhas e colunas):
                    </p>

                    <div className="space-y-6 mb-4">
                        <div>
                            <p className="mb-2">Grid simples de 3x3:</p>
                            <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded">
                                <div className="bg-red-500 text-white p-3 text-center">1</div>
                                <div className="bg-red-500 text-white p-3 text-center">2</div>
                                <div className="bg-red-500 text-white p-3 text-center">3</div>
                                <div className="bg-red-500 text-white p-3 text-center">4</div>
                                <div className="bg-red-500 text-white p-3 text-center">5</div>
                                <div className="bg-red-500 text-white p-3 text-center">6</div>
                                <div className="bg-red-500 text-white p-3 text-center">7</div>
                                <div className="bg-red-500 text-white p-3 text-center">8</div>
                                <div className="bg-red-500 text-white p-3 text-center">9</div>
                            </div>
                            <code className="text-sm mt-2 block">grid grid-cols-3 gap-4</code>
                        </div>

                        <div>
                            <p className="mb-2">Grid com células que ocupam várias colunas/linhas:</p>
                            <div className="grid grid-cols-3 gap-4 bg-gray-100 p-4 rounded">
                                <div className="bg-blue-500 text-white p-3 text-center col-span-2">Ocupa 2 colunas</div>
                                <div className="bg-green-500 text-white p-3 text-center">1 coluna</div>
                                <div className="bg-yellow-500 text-white p-3 text-center">1 coluna</div>
                                <div className="bg-purple-500 text-white p-3 text-center col-span-2">Ocupa 2 colunas
                                </div>
                            </div>
                            <code className="text-sm mt-2 block">Use col-span-2 para ocupar 2 colunas</code>
                        </div>

                        <div>
                            <p className="mb-2">Grid responsivo:</p>
                            <div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-100 p-4 rounded">
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                                <div className="bg-indigo-500 text-white p-3 text-center">Item</div>
                            </div>
                            <code className="text-sm mt-2 block">grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                                lg:grid-cols-4 gap-4</code>
                        </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded">
                        <h4 className="font-medium mb-2">Classes Grid Comuns:</h4>
                        <ul className="list-disc pl-5 space-y-1">
                            <li><code>grid</code> - Ativa o layout grid</li>
                            <li><code>grid-cols-{'{n}'}</code> - Define o número de colunas</li>
                            <li><code>grid-rows-{'{n}'}</code> - Define o número de linhas</li>
                            <li><code>gap-{'{n}'}</code> - Define o espaçamento entre itens</li>
                            <li><code>col-span-{'{n}'}</code> - Define quantas colunas um item ocupa</li>
                            <li><code>row-span-{'{n}'}</code> - Define quantas linhas um item ocupa</li>
                            <li><code>col-start-{'{n}'}</code> / <code>col-end-{'{n}'}</code> - Define onde um item
                                começa/termina
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}