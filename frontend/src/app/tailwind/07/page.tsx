// pages/conceitos/07-typescript-react.tsx
'use client'

export default function TypeScriptReact() {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">TypeScript no React - Conceitos Básicos</h1>

            {/*
        SEÇÃO 1: INTRODUÇÃO AO TYPESCRIPT NO REACT
        Explica os benefícios e conceitos básicos
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Por que usar TypeScript com React?</h2>

                <p className="mb-4">
                    TypeScript é uma linguagem que estende JavaScript adicionando tipagem estática.
                    Quando combinado com React, TypeScript oferece diversos benefícios:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-blue-50 p-4 rounded">
                        <h3 className="font-medium mb-2">Vantagens para Desenvolvedores</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Autocompletar e IntelliSense avançados no editor</li>
                            <li>Detecção de erros durante a compilação</li>
                            <li>Refatoração mais segura</li>
                            <li>Melhor documentação do código</li>
                            <li>Melhor experiência para equipes grandes</li>
                        </ul>
                    </div>

                    <div className="bg-green-50 p-4 rounded">
                        <h3 className="font-medium mb-2">Vantagens para o Projeto</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Código mais robusto e previsível</li>
                            <li>Menos bugs relacionados a tipos</li>
                            <li>Melhor manutenção a longo prazo</li>
                            <li>Facilita a entrada de novos desenvolvedores</li>
                            <li>Evolução mais segura da base de código</li>
                        </ul>
                    </div>
                </div>

                <p>
                    No contexto do exercício TaskFlow, TypeScript nos ajudará a definir claramente os tipos
                    de dados para tarefas, propriedades de componentes e funções, tornando o desenvolvimento
                    mais seguro e produtivo.
                </p>
            </section>

            {/*
        SEÇÃO 2: TIPOS BÁSICOS
        Mostra os tipos básicos do TypeScript
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipos Básicos em TypeScript</h2>

                <p className="mb-4">
                    TypeScript oferece vários tipos primitivos e compostos para representar dados:
                </p>

                <div className="space-y-4 mb-6">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Tipos Primitivos</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Tipos primitivos
const isActive: boolean = true;
const age: number = 30;
const name: string = "João";

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Ana", "Pedro", "Maria"];

// Tipo "any" - evite quando possível
const dynamicValue: any = "Isso pode ser qualquer coisa";

// Tipo "unknown" - mais seguro que "any"
const userInput: unknown = getExternalData();
if (typeof userInput === "string") {
  // TypeScript sabe que userInput é uma string neste bloco
  console.log(userInput.toUpperCase());
}

// União de tipos
const id: string | number = Math.random() > 0.5 ? 100 : "abc123";`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">Interfaces e Types</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Interface - define a estrutura de um objeto
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Propriedade opcional com ?
  readonly createdAt: Date; // Propriedade somente leitura
}

// Type - similar à interface, mas com mais flexibilidade
type Status = "pending" | "active" | "completed"; // Union type

// Type com outras construções
type UserWithStatus = User & {
  status: Status;
};

// Exemplo de uso
const user: User = {
  id: 1,
  name: "Maria Silva",
  email: "maria@example.com",
  createdAt: new Date()
};

const userStatus: Status = "active";`}
            </pre>
                    </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded">
                    <h3 className="font-medium mb-2">Interface vs Type</h3>
                    <p className="mb-2">
                        Ambos podem ser usados para definir tipos de objetos, mas têm diferenças sutis:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Interface</strong>: Pode ser estendida com <code>extends</code>, pode ser declarada
                            múltiplas vezes para acumular definições
                        </li>
                        <li><strong>Type</strong>: Mais flexível, pode representar unions, intersections, etc. Não pode
                            ser reaberta para adição após declaração
                        </li>
                    </ul>
                    <p className="mt-2">
                        Recomendação: Para objetos e componentes React, prefira <code>interface</code> pela clareza e
                        extensibilidade.
                    </p>
                </div>
            </section>

            {/*
        SEÇÃO 3: TIPAGEM DE COMPONENTES REACT
        Mostra como tipar componentes React com TypeScript
      */}
            <section className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-semibold mb-4">Tipagem de Componentes React</h2>

                <p className="mb-4">
                    O TypeScript é particularmente útil para definir propriedades (props) de componentes React:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-2">Componente Funcional com Props</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Definição da interface para props
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}

// Componente funcional com props tipadas
function Button({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  // O TypeScript valida o uso correto das props
  return (
    <button 
      onClick={onClick}
      disabled={disabled}
      className={\`px-4 py-2 rounded \${
        variant === 'primary' ? 'bg-blue-500 text-white' :
        variant === 'secondary' ? 'bg-gray-200 text-gray-800' :
        'bg-red-500 text-white'
      }\`}
    >
      {text}
    </button>
  );
}

// Uso do componente
<Button 
  text="Clique Aqui" 
  onClick={() => alert('Clicado!')} 
  variant="primary"
/>`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">Componente com Children</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode; // Tipo para qualquer conteúdo React válido
  className?: string;
}

function Card({ title, children, className = '' }: CardProps) {
  return (
    <div className={\`bg-white rounded-lg shadow-md p-4 \${className}\`}>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

// Uso do componente
<Card title="Exemplo de Card">
  <p>Este é o conteúdo do card.</p>
  <button>Ação</button>
</Card>`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">Tipagem de Eventos</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`// Exemplo com evento de formulário
function SearchForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Agora temos acesso aos métodos específicos de FormEvent
    const form = event.currentTarget;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    console.log(input.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="search" 
        className="border rounded px-3 py-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded ml-2">
        Buscar
      </button>
    </form>
  );
}

// Exemplo com evento de input
function TextInput() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Acesso tipado ao valor
    const value = event.target.value;
    console.log(value);
  };
  
  return (
    <input 
      type="text" 
      onChange={handleChange} 
      className="border rounded px-3 py-2"
    />
  );
}`}
            </pre>
                    </div>
                </div>
            </section>

            {/*
        SEÇÃO 4: HOOKS COM TYPESCRIPT
        Mostra como usar hooks do React com TypeScript
      */}
            <section className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Hooks com TypeScript</h2>

                <p className="mb-4">
                    TypeScript oferece tipagem para hooks React, tornando seu uso mais seguro:
                </p>

                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium mb-2">useState com TypeScript</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`import { useState } from 'react';

// Definição de tipo para o objeto task
interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function TaskManager() {
  // useState com tipo explícito
  const [tasks, setTasks] = useState<Task[]>([]);
  
  // TypeScript infere o tipo como string
  const [newTaskTitle, setNewTaskTitle] = useState('');
  
  // TypeScript infere o tipo como boolean
  const [isLoading, setIsLoading] = useState(false);
  
  // Tipagem ajuda a garantir que apenas dados válidos sejam adicionados
  const addTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        completed: false
      };
      
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };
  
  return (
    <div>
      <input
        type="text"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        className="border rounded px-3 py-2"
      />
      <button 
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Adicionar
      </button>
      
      <ul className="mt-4">
        {tasks.map(task => (
          <li key={task.id} className="mb-2">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => {
                setTasks(tasks.map(t => 
                  t.id === task.id ? { ...t, completed: !t.completed } : t
                ));
              }}
              className="mr-2"
            />
            <span className={task.completed ? 'line-through' : ''}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
            </pre>
                    </div>

                    <div>
                        <h3 className="text-lg font-medium mb-2">useEffect com TypeScript</h3>
                        <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        setError(null);
        
        // Simula uma chamada de API
        const response = await fetch(\`/api/users/\${userId}\`);
        
        if (!response.ok) {
          throw new Error('Falha ao carregar usuário');
        }
        
        const userData: User = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, [userId]); // dependência tipada
  
  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;
  if (!user) return <div>Usuário não encontrado</div>;
  
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}`}
            </pre>
                    </div>

                    <div className="bg-blue-50 p-4 rounded">
                        <h3 className="font-medium mb-2">Dicas para TypeScript no React</h3>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Use <code>interface</code> para definir props de componentes</li>
                            <li>Especifique tipos para estados complexos com <code>useState&lt;Type&gt;</code></li>
                            <li>Utilize <code>ReactNode</code> para tipagem de children</li>
                            <li>Aproveite os tipos específicos de eventos
                                como <code>React.ChangeEvent&lt;HTMLInputElement&gt;</code></li>
                            <li>Crie arquivos <code>.d.ts</code> para declarações de tipos globais</li>
                            <li>Configure corretamente o <code>tsconfig.json</code> para seu projeto</li>
                            <li>Evite o uso de <code>any</code> quando possível, preferindo <code>unknown</code> quando
                                necessário
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}