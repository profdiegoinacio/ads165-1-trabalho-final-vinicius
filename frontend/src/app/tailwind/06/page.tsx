// pages/conceitos/06-exercicio-taskflow.tsx
'use client'

export default function ExercicioTaskFlow() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Exercício TaskFlow - Explicação</h1>

            {/*
        SEÇÃO 1: DESCRIÇÃO DO EXERCÍCIO
        Explica o propósito e os requisitos do exercício TaskFlow
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Descrição do Exercício</h2>

                <p className="mb-4">
                    O exercício TaskFlow consiste em criar uma aplicação web para gerenciamento de tarefas
                    utilizando Next.js, TypeScript e Tailwind CSS. Esta aplicação deve permitir que os
                    usuários visualizem, filtrem e organizem suas tarefas de forma intuitiva.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-6">
                    <h3 className="font-medium mb-2">Objetivos de Aprendizado:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Aplicar conceitos de layout responsivo com Tailwind CSS</li>
                        <li>Implementar tema claro/escuro usando o suporte do Tailwind</li>
                        <li>Criar componentes reutilizáveis em React com TypeScript</li>
                        <li>Implementar filtros interativos para dados</li>
                        <li>Utilizar badges, cards e outros componentes de UI comuns</li>
                    </ul>
                </div>

                <p>
                    A implementação deverá seguir um design responsivo que funcione bem em dispositivos
                    móveis e desktop, com uma interface intuitiva e agradável.
                </p>
            </section>

            {/*
        SEÇÃO 2: REQUISITOS DO EXERCÍCIO
        Lista os requisitos técnicos e funcionais
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Requisitos</h2>

                <div className="space-y-6">
                    {/* Requisitos Funcionais */}
                    <div>
                        <h3 className="text-xl font-medium mb-3">Requisitos Funcionais</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <span className="font-medium">Visualização de Tarefas:</span> Listar tarefas em um layout de cards que exibam título, categoria, prioridade e status.
                            </li>
                            <li>
                                <span className="font-medium">Filtros:</span> Permitir filtrar tarefas por status (Pendente, Em Andamento, Concluída), categoria (Trabalho, Pessoal, Estudos) e prioridade (Alta, Média, Baixa).
                            </li>
                            <li>
                                <span className="font-medium">Tema Escuro:</span> Implementar alternância entre tema claro e escuro, que deve ser persistida entre sessões.
                            </li>
                            <li>
                                <span className="font-medium">Layout Responsivo:</span> Adaptar o layout para diferentes tamanhos de tela (mobile, tablet, desktop).
                            </li>
                            <li>
                                <span className="font-medium">Badges Visuais:</span> Usar badges com cores distintas para indicar prioridade e status das tarefas.
                            </li>
                        </ul>
                    </div>

                    {/* Requisitos Técnicos */}
                    <div>
                        <h3 className="text-xl font-medium mb-3">Requisitos Técnicos</h3>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>
                                <span className="font-medium">TypeScript:</span> Utilizar TypeScript para tipagem estática de todos os componentes e dados.
                            </li>
                            <li>
                                <span className="font-medium">Tailwind CSS:</span> Utilizar o framework Tailwind para estilização de todos os componentes.
                            </li>
                            <li>
                                <span className="font-medium">Componentes:</span> Organizar o código em componentes reutilizáveis (Cards, Badges, Filtros, etc).
                            </li>
                            <li>
                                <span className="font-medium">Estado:</span> Usar React hooks (useState, useEffect) para gerenciar o estado da aplicação.
                            </li>
                            <li>
                                <span className="font-medium">Semântica:</span> Utilizar HTML semântico apropriado para melhorar a acessibilidade.
                            </li>
                            <li>
                                <span className="font-medium">Código Limpo:</span> Organizar o código de forma clara, com nomes significativos para variáveis, funções e componentes.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/*
        SEÇÃO 3: ESTRUTURA DO PROJETO
        Mostra a estrutura de arquivos esperada para o projeto
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Estrutura do Projeto</h2>

                <p className="mb-4">
                    A seguir, está uma estrutura de arquivos sugerida para o projeto TaskFlow:
                </p>

                <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto mb-6">
          {`app/
  taskflow/
    page.tsx               # Componente principal da aplicação
  layout.tsx              # Layout global da aplicação
  globals.css             # Estilos globais
  
tailwind.config.js        # Configuração do Tailwind
tsconfig.json             # Configuração do TypeScript
package.json              # Dependências do projeto`}
        </pre>

                <p>
                    O exercício foca principalmente na implementação do arquivo <code>app/taskflow/page.tsx</code>,
                    que deve conter toda a lógica da aplicação, incluindo os componentes, estados e funcionalidades.
                </p>
            </section>

            {/*
        SEÇÃO 4: LAYOUT ESPERADO
        Representa visualmente o layout esperado para diferentes dispositivos
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Layout Esperado</h2>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-3">Layout Desktop</h3>
                        <div className="border rounded-lg overflow-hidden">
                            <div className="bg-gray-800 text-white p-3">
                                <div className="flex justify-between items-center">
                                    <div className="text-xl font-bold">TaskFlow</div>
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-gray-700 rounded-full px-4 py-1">🔍 Buscar...</div>
                                        <button className="p-1">🌙</button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-100">
                                <div className="flex gap-6">
                                    {/* Sidebar */}
                                    <div className="w-64 bg-white p-4 rounded-lg shadow">
                                        <h3 className="font-bold mb-4">FILTROS</h3>

                                        <div className="mb-4">
                                            <h4 className="text-gray-500 text-sm uppercase mb-2">Status:</h4>
                                            <div className="space-y-1">
                                                <div className="flex items-center">
                                                    <input type="radio" id="status-all" name="status" checked className="mr-2" />
                                                    <label htmlFor="status-all">Todas</label>
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="radio" id="status-pending" name="status" className="mr-2" />
                                                    <label htmlFor="status-pending">Pendente</label>
                                                </div>
                                                {/* outros filtros... */}
                                            </div>
                                        </div>

                                        {/* outros grupos de filtros... */}
                                    </div>

                                    {/* Conteúdo principal */}
                                    <div className="flex-1">
                                        <div className="bg-white p-4 rounded-lg shadow mb-4">
                                            <h3 className="font-bold">Painel de Tarefas (6)</h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            {/* Card de tarefa */}
                                            <div className="bg-white p-4 rounded-lg shadow">
                                                <div className="mb-2">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                            ALTA
                          </span>
                                                </div>
                                                <h4 className="font-medium mb-3">Finalizar relatório de vendas</h4>
                                                <div className="flex flex-wrap gap-2">
                          <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                            💼 Trabalho
                          </span>
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                            ⏳ Em Andamento
                          </span>
                                                </div>
                                            </div>

                                            {/* outros cards... */}
                                        </div>

                                        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded">
                                            ➕ Nova Tarefa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">Layout Mobile</h3>
                        <div className="border rounded-lg overflow-hidden max-w-sm mx-auto">
                            <div className="bg-gray-800 text-white p-3">
                                <div className="flex justify-between items-center">
                                    <div className="text-xl font-bold">TaskFlow</div>
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-gray-700 rounded-full px-3 py-1">🔍</div>
                                        <button className="p-1">🌙</button>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-gray-100">
                                {/* Filtros colapsáveis */}
                                <div className="bg-white p-3 rounded-lg shadow mb-4">
                                    <button className="w-full flex justify-between items-center">
                                        <span className="font-medium">Filtros</span>
                                        <span>▼</span>
                                    </button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow mb-4">
                                    <h3 className="font-bold">Painel de Tarefas (6)</h3>
                                </div>

                                <div className="space-y-4">
                                    {/* Card de tarefa */}
                                    <div className="bg-white p-4 rounded-lg shadow">
                                        <div className="mb-2">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                        ALTA
                      </span>
                                        </div>
                                        <h4 className="font-medium mb-3">Finalizar relatório de vendas</h4>
                                        <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                        💼 Trabalho
                      </span>
                                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                        ⏳ Em Andamento
                      </span>
                                        </div>
                                    </div>

                                    {/* outros cards... */}
                                </div>

                                {/* Botão fixo no canto inferior */}
                                <div className="fixed bottom-6 left-6">
                                    <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
                                        ➕ Nova Tarefa
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*
        SEÇÃO 5: INSTRUÇÕES PARA IMPLEMENTAÇÃO
        Fornece orientações passo a passo para a implementação
      */}
            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Instruções para Implementação</h2>

                <p className="mb-6">
                    Aqui estão algumas orientações para ajudar na implementação do exercício:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-xl font-medium mb-3">1. Definição de Tipos</h3>
                        <p className="mb-3">
                            Comece definindo os tipos TypeScript necessários para o projeto:
                        </p>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Definição dos tipos de tarefa e props dos componentes
interface Task {
  id: number;
  title: string;
  priority: string;
  status: string;
  category: string;
}

// Exemplo de props para um componente de card de tarefa
interface TaskCardProps {
  task: Task;
}

// Exemplo de props para um componente de filtro
interface FilterSectionProps {
  title: string;
  options: string[];
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  name: string;
}`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">2. Componentes Base</h3>
                        <p className="mb-3">
                            Crie os componentes principais necessários para a aplicação:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li><code>NavBar</code> - Barra de navegação com título e botão de tema</li>
                            <li><code>FilterSection</code> - Seção de filtros com botões de rádio</li>
                            <li><code>TaskCard</code> - Card para exibir uma tarefa individual</li>
                            <li><code>PriorityBadge</code>, <code>StatusBadge</code>, <code>CategoryBadge</code> - Badges para diferentes tipos de informação</li>
                            <li><code>TasksList</code> - Container para listar os cards de tarefas</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">3. Estado da Aplicação</h3>
                        <p className="mb-3">
                            Configure os estados necessários para gerenciar a aplicação:
                        </p>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Estado para o tema
const [darkMode, setDarkMode] = useState(false);

// Estado para as tarefas
const [tasks, setTasks] = useState<Task[]>([
  // Dados iniciais das tarefas
]);

// Estados para filtros
const [statusFilter, setStatusFilter] = useState('Todas');
const [categoryFilter, setCategoryFilter] = useState('Todas');
const [priorityFilter, setPriorityFilter] = useState('Todas');

// Filtrar tarefas baseado nos filtros selecionados
const filteredTasks = tasks.filter(task => {
  return (statusFilter === 'Todas' || task.status === statusFilter) &&
         (categoryFilter === 'Todas' || task.category === categoryFilter) &&
         (priorityFilter === 'Todas' || task.priority === priorityFilter);
});`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">4. Layout Responsivo</h3>
                        <p className="mb-3">
                            Implemente layouts diferentes para desktop e dispositivos móveis:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Use <code>flex-col md:flex-row</code> para alterar direções de layout</li>
                            <li>Use <code>hidden md:block</code> e <code>md:hidden</code> para mostrar/esconder elementos em diferentes tamanhos de tela</li>
                            <li>Use <code>grid-cols-1 md:grid-cols-2 lg:grid-cols-3</code> para layouts em grade responsivos</li>
                            <li>Considere componentes específicos para mobile e desktop (ex: <code>MobileFilters</code> e <code>DesktopSidebar</code>)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">5. Implementação do Tema Escuro</h3>
                        <p className="mb-3">
                            Siga estas etapas para implementar o tema escuro:
                        </p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Certifique-se de que <code>darkMode: 'class'</code> está configurado no arquivo <code>tailwind.config.js</code></li>
                            <li>Use <code>useEffect</code> para adicionar/remover a classe <code>dark</code> ao elemento HTML</li>
                            <li>Aplique classes condicionais com o prefixo <code>dark:</code> em toda a aplicação</li>
                            <li>Use <code>localStorage</code> para persistir a preferência de tema entre sessões</li>
                        </ol>
                    </div>

                    <div>
                        <h3 className="text-xl font-medium mb-3">6. Testes e Refinamentos</h3>
                        <p className="mb-3">
                            Finalize a implementação com estes passos:
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Teste a responsividade em diferentes tamanhos de tela</li>
                            <li>Verifique se o tema escuro funciona corretamente e se é persistido</li>
                            <li>Confirme que todos os filtros funcionam conforme esperado</li>
                            <li>Verifique se o código está bem organizado e comentado</li>
                            <li>Faça ajustes de estilo para garantir uma aparência coesa e profissional</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}
