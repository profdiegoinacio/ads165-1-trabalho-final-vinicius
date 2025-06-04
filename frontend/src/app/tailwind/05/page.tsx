// pages/conceitos/05-filtros-componentes.tsx
'use client'
import {useState} from 'react';

// Interface para definir a estrutura de uma tarefa
interface Tarefa {
    id: number;
    titulo: string;
    status: 'Pendente' | 'Em Andamento' | 'Concluída';
    categoria: 'Trabalho' | 'Pessoal' | 'Estudos';
    prioridade: 'Alta' | 'Média' | 'Baixa';
}

// Tipos para os filtros
type TipoStatus = 'Todas' | 'Pendente' | 'Em Andamento' | 'Concluída';
type TipoCategoria = 'Todas' | 'Trabalho' | 'Pessoal' | 'Estudos';
type TipoPrioridade = 'Todas' | 'Alta' | 'Média' | 'Baixa';

// Interfaces para os componentes
interface RadioButtonProps {
    id: string;
    name: string;
    label: string;
    checked: boolean;
    onChange: (value: string) => void;
}

interface FilterSectionProps {
    title: string;
    options: string[];
    selectedOption: string;
    setSelectedOption: (value: string) => void;
    name: string;
}

interface PriorityBadgeProps {
    priority: 'Alta' | 'Média' | 'Baixa';
}

interface StatusBadgeProps {
    status: 'Pendente' | 'Em Andamento' | 'Concluída';
}

interface CategoryBadgeProps {
    category: 'Trabalho' | 'Pessoal' | 'Estudos';
}

// Dados fictícios para nossos exemplos
const tarefasIniciais: Tarefa[] = [
    {id: 1, titulo: 'Finalizar relatório', status: 'Pendente', categoria: 'Trabalho', prioridade: 'Alta'},
    {id: 2, titulo: 'Comprar mantimentos', status: 'Pendente', categoria: 'Pessoal', prioridade: 'Média'},
    {id: 3, titulo: 'Revisar código', status: 'Em Andamento', categoria: 'Trabalho', prioridade: 'Alta'},
    {id: 4, titulo: 'Preparar apresentação', status: 'Concluída', categoria: 'Trabalho', prioridade: 'Alta'},
    {id: 5, titulo: 'Estudar React', status: 'Em Andamento', categoria: 'Estudos', prioridade: 'Média'},
    {id: 6, titulo: 'Correr no parque', status: 'Pendente', categoria: 'Pessoal', prioridade: 'Baixa'},
    {id: 7, titulo: 'Médico às 15h', status: 'Pendente', categoria: 'Pessoal', prioridade: 'Alta'},
    {id: 8, titulo: 'Ler livro de TypeScript', status: 'Em Andamento', categoria: 'Estudos', prioridade: 'Baixa'},
];

export default function FiltrosComponentes() {
    // Estados para filtros
    const [statusFilter, setStatusFilter] = useState<TipoStatus>('Todas');
    const [categoriaFilter, setCategoriaFilter] = useState<TipoCategoria>('Todas');
    const [prioridadeFilter, setPrioridadeFilter] = useState<TipoPrioridade>('Todas');

    // Estado para tarefas
    const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);

    // Estado para controle do menu de filtros em dispositivos móveis
    const [showFilters, setShowFilters] = useState<boolean>(false);

    // Função para filtrar tarefas
    const filteredTarefas = tarefas.filter(tarefa => {
        return (statusFilter === 'Todas' || tarefa.status === statusFilter) &&
            (categoriaFilter === 'Todas' || tarefa.categoria === categoriaFilter) &&
            (prioridadeFilter === 'Todas' || tarefa.prioridade === prioridadeFilter);
    });

    // Componente de botão de rádio para filtros
    function RadioButton({id, name, label, checked, onChange}: RadioButtonProps) {
        return (
            <div className="flex items-center mb-3">
                <input
                    id={id}
                    type="radio"
                    name={name}
                    checked={checked}
                    onChange={() => onChange(label)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <label htmlFor={id} className="ml-3 block text-sm font-medium text-gray-700">
                    {label}
                </label>
            </div>
        );
    }

    // Componente de seção de filtro
    function FilterSection({title, options, selectedOption, setSelectedOption, name}: FilterSectionProps) {
        return (
            <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                    {title}:
                </h3>
                <div className="space-y-1">
                    {options.map((option) => (
                        <RadioButton
                            key={`${name}-${option}`}
                            id={`${name}-${option}`}
                            name={name}
                            label={option}
                            checked={selectedOption === option}
                            onChange={setSelectedOption}
                        />
                    ))}
                </div>
            </div>
        );
    }

    // Componente de badge para prioridade
    function PriorityBadge({priority}: PriorityBadgeProps) {
        const colorMap: Record<'Alta' | 'Média' | 'Baixa', string> = {
            'Alta': 'bg-red-100 text-red-800',
            'Média': 'bg-orange-100 text-orange-800',
            'Baixa': 'bg-green-100 text-green-800'
        };

        return (
            <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorMap[priority]}`}>
        {priority.toUpperCase()}
      </span>
        );
    }

    // Componente de badge para status
    function StatusBadge({status}: StatusBadgeProps) {
        const colorMap: Record<'Pendente' | 'Em Andamento' | 'Concluída', string> = {
            'Pendente': 'bg-gray-100 text-gray-800',
            'Em Andamento': 'bg-blue-100 text-blue-800',
            'Concluída': 'bg-green-100 text-green-800'
        };

        const iconMap: Record<'Pendente' | 'Em Andamento' | 'Concluída', string> = {
            'Pendente': '',
            'Em Andamento': '⏳',
            'Concluída': '✅'
        };

        return (
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorMap[status]}`}>
        {iconMap[status]} {status}
      </span>
        );
    }

    // Componente de badge para categoria
    function CategoryBadge({category}: CategoryBadgeProps) {
        const iconMap: Record<'Trabalho' | 'Pessoal' | 'Estudos', string> = {
            'Trabalho': '💼',
            'Pessoal': '👤',
            'Estudos': '📚'
        };

        return (
            <span
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
        {iconMap[category]} {category}
      </span>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Filtros e Componentes Interativos</h1>

            {/*
        SEÇÃO 1: INTRODUÇÃO AOS FILTROS
        Explica o conceito de filtragem em aplicações web
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Filtros em Aplicações Web</h2>

                <p className="mb-4">
                    Filtros são mecanismos que permitem aos usuários refinar grandes conjuntos de dados para encontrar
                    informações específicas. Em uma aplicação como o TaskFlow, os filtros são essenciais para ajudar
                    os usuários a gerenciar suas tarefas de forma eficiente.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-6">
                    <h3 className="font-medium mb-2">Tipos comuns de filtros:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Filtros de categoria ou tipo (ex: categoria de tarefa)</li>
                        <li>Filtros de status (ex: pendente, em andamento, concluída)</li>
                        <li>Filtros de prioridade (ex: alta, média, baixa)</li>
                        <li>Filtros de data (ex: hoje, esta semana, este mês)</li>
                        <li>Filtros de texto/pesquisa (ex: busca por palavras-chave)</li>
                    </ul>
                </div>

                <p className="mb-4">
                    Neste exemplo, implementaremos filtros para status, categoria e prioridade usando componentes de
                    rádio.
                </p>
            </section>

            {/*
        SEÇÃO 2: IMPLEMENTAÇÃO DE FILTROS
        Demonstração real de filtros utilizando componentes React e Tailwind
      */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                {/* Filtros */}
                <div className="w-full md:w-64">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-lg font-medium mb-4">Filtros</h2>

                        {/* Seção de filtros para status */}
                        <FilterSection
                            title="Status"
                            options={['Todas', 'Pendente', 'Em Andamento', 'Concluída']}
                            selectedOption={statusFilter}
                            setSelectedOption={(value: string) => setStatusFilter(value as TipoStatus)}
                            name="status"
                        />

                        {/* Seção de filtros para categoria */}
                        <FilterSection
                            title="Categoria"
                            options={['Todas', 'Trabalho', 'Pessoal', 'Estudos']}
                            selectedOption={categoriaFilter}
                            setSelectedOption={(value: string) => setStatusFilter(value as TipoStatus)}
                            name="categoria"
                        />

                        {/* Seção de filtros para prioridade */}
                        <FilterSection
                            title="Prioridade"
                            options={['Todas', 'Alta', 'Média', 'Baixa']}
                            selectedOption={prioridadeFilter}
                            setSelectedOption={(value: string) => setStatusFilter(value as TipoStatus)
                            }
                            name="prioridade"
                        />
                    </div>
                </div>

                {/* Resultado filtrado */}
                <div className="flex-1">
                    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                        <h2 className="text-lg font-medium">
                            Tarefas ({filteredTarefas.length})
                        </h2>
                    </div>

                    {/* Lista de tarefas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {filteredTarefas.length > 0 ? (
                            filteredTarefas.map((tarefa) => (
                                <div key={tarefa.id} className="bg-white rounded-lg shadow-md p-4">
                                    <div className="mb-2">
                                        <PriorityBadge priority={tarefa.prioridade}/>
                                    </div>
                                    <h3 className="text-lg font-medium mb-3">{tarefa.titulo}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        <CategoryBadge category={tarefa.categoria}/>
                                        <StatusBadge status={tarefa.status}/>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-8">
                                <p className="text-gray-500">
                                    Nenhuma tarefa encontrada com os filtros selecionados.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/*
        SEÇÃO 3: CÓDIGO DO FILTRO
        Exibe o código usado para implementar a funcionalidade de filtro
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Implementação de Filtros</h2>

                <p className="mb-4">
                    Abaixo está o código para implementar a funcionalidade de filtro:
                </p>

                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">1. Estados para os filtros</h3>
                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`// Estados para filtros
const [statusFilter, setStatusFilter] = useState<TipoStatus>('Todas');
const [categoriaFilter, setCategoriaFilter] = useState<TipoCategoria>('Todas');
const [prioridadeFilter, setPrioridadeFilter] = useState<TipoPrioridade>('Todas');`}
          </pre>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">2. Função para filtrar os itens</h3>
                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`// Função para filtrar tarefas
const filteredTarefas = tarefas.filter(tarefa => {
  return (statusFilter === 'Todas' || tarefa.status === statusFilter) &&
         (categoriaFilter === 'Todas' || tarefa.categoria === categoriaFilter) &&
         (prioridadeFilter === 'Todas' || tarefa.prioridade === prioridadeFilter);
});`}
          </pre>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-medium mb-3">3. Componente para os botões de rádio</h3>
                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`function RadioButton({ id, name, label, checked, onChange }: RadioButtonProps) {
  return (
    <div className="flex items-center mb-3">
      <input
        id={id}
        type="radio"
        name={name}
        checked={checked}
        onChange={() => onChange(label)}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
      />
      <label htmlFor={id} className="ml-3 block text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
}`}
          </pre>
                </div>

                <div>
                    <h3 className="text-lg font-medium mb-3">4. Componente de seção de filtro</h3>
                    <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
            {`function FilterSection({ title, options, selectedOption, setSelectedOption, name }: FilterSectionProps) {
  return (
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
        {title}:
      </h3>
      <div className="space-y-1">
        {options.map((option) => (
          <RadioButton
            key={\`\${name}-\${option}\`}
            id={\`\${name}-\${option}\`}
            name={name}
            label={option}
            checked={selectedOption === option}
            onChange={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
}`}
          </pre>
                </div>
            </section>

            {/*
        SEÇÃO 4: BOAS PRÁTICAS DE UX PARA FILTROS
        Dicas para melhorar a experiência do usuário em filtros
      */}
            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Boas Práticas para Filtros</h2>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">1</span>
                        <div>
                            <h3 className="font-medium">Forneça opções de filtro relevantes</h3>
                            <p className="text-gray-600">
                                Ofereça apenas filtros que fazem sentido para seus dados e que ajudarão os usuários a
                                encontrar o que procuram.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">2</span>
                        <div>
                            <h3 className="font-medium">Mantenha filtros simples e intuitivos</h3>
                            <p className="text-gray-600">
                                Filtros complexos podem confundir os usuários. Use rótulos claros e organize os filtros
                                em categorias lógicas.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">3</span>
                        <div>
                            <h3 className="font-medium">Mostre quais filtros estão ativos</h3>
                            <p className="text-gray-600">
                                Indique claramente quais filtros estão sendo aplicados para que os usuários entendam por
                                que estão vendo determinados resultados.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">4</span>
                        <div>
                            <h3 className="font-medium">Permita limpar todos os filtros facilmente</h3>
                            <p className="text-gray-600">
                                Ofereça uma opção para resetar todos os filtros de uma vez, facilitando o recomeço de
                                uma busca.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">5</span>
                        <div>
                            <h3 className="font-medium">Considere filtros responsivos para dispositivos móveis</h3>
                            <p className="text-gray-600">
                                Em telas pequenas, filtros podem ocupar muito espaço. Considere colocá-los em um menu
                                expansível ou
                                drawer para melhorar a experiência em dispositivos móveis.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">6</span>
                        <div>
                            <h3 className="font-medium">Mantenha o estado dos filtros nas sessões</h3>
                            <p className="text-gray-600">
                                Salve as seleções de filtro entre sessões para que os usuários não precisem reconfigurar
                                tudo quando retornarem ao site.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 p-1 rounded mr-3 mt-0.5">7</span>
                        <div>
                            <h3 className="font-medium">Mostre a contagem de resultados</h3>
                            <p className="text-gray-600">
                                Indicar quantos itens correspondem aos filtros atuais ajuda o usuário a decidir se
                                deseja refinar ainda mais ou ampliar os critérios.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}