// pages/conceitos/01-conceitos-basicos.tsx
'use client'

export default function ConceitosBasicos() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Conceitos Básicos do Tailwind CSS</h1>
      
      {/* 
        SEÇÃO 1: INTRODUÇÃO AO TAILWIND
        O Tailwind CSS é um framework CSS utilitário que permite construir designs 
        personalizados diretamente no seu HTML usando classes utilitárias.
      */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">O que é Tailwind CSS?</h2>
        <p className="mb-4">
          Tailwind CSS é um framework utilitário de CSS que permite criar designs
          personalizados sem sair do seu HTML, usando classes predefinidas.
        </p>
        
        {/* 
          EXEMPLO: Classes utilitárias vs. CSS tradicional
          Aqui mostramos como o Tailwind difere do CSS tradicional
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium mb-2">CSS Tradicional:</h3>
            <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`.button {
  padding: 0.5rem 1rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 0.25rem;
  font-weight: 500;
}`}
            </pre>
          </div>
          
          <div className="bg-blue-50 p-4 rounded">
            <h3 className="font-medium mb-2">Tailwind CSS:</h3>
            <pre className="bg-gray-800 text-white p-3 rounded text-sm overflow-x-auto">
              {`<button class="px-4 py-2 bg-blue-500 
  text-white rounded font-medium">
  Botão
</button>`}
            </pre>
          </div>
        </div>
        
        <p>
          O Tailwind permite estilizar elementos diretamente no HTML sem escrever CSS 
          personalizado, acelerando o desenvolvimento e promovendo consistência.
        </p>
      </section>
      
      {/* 
        SEÇÃO 2: CLASSES UTILITÁRIAS BÁSICAS
        Aqui mostramos as classes mais comuns do Tailwind e como usá-las
      */}
      <section className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Classes Utilitárias Básicas</h2>
        
        {/* Demonstração de margens e preenchimento */}
        <h3 className="text-xl font-medium mb-3">Espaçamento</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="mb-2">Margens (m):</p>
            <div className="flex flex-wrap gap-2">
              {/* m = margin em todas as direções */}
              <div className="m-4 bg-blue-500 text-white p-2">m-4</div>
              {/* mt = margin-top */}
              <div className="mt-8 bg-blue-500 text-white p-2">mt-8</div>
              {/* mr = margin-right */}
              <div className="mr-6 bg-blue-500 text-white p-2">mr-6</div>
            </div>
          </div>
          
          <div>
            <p className="mb-2">Preenchimento (p):</p>
            <div className="flex flex-wrap gap-2">
              <div className="p-4 bg-green-500 text-white">p-4</div>
              <div className="px-6 bg-green-500 text-white">px-6</div>
              <div className="py-3 bg-green-500 text-white">py-3</div>
            </div>
          </div>
        </div>
        
        {/* Demonstração de cores */}
        <h3 className="text-xl font-medium mb-3">Cores</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="mb-2">Cores de texto:</p>
            <div className="space-y-2">
              <p className="text-blue-500">text-blue-500</p>
              <p className="text-red-600">text-red-600</p>
              <p className="text-green-700">text-green-700</p>
            </div>
          </div>
          
          <div>
            <p className="mb-2">Cores de fundo:</p>
            <div className="space-y-2">
              <div className="bg-blue-200 p-2">bg-blue-200</div>
              <div className="bg-red-300 p-2">bg-red-300</div>
              <div className="bg-green-400 p-2">bg-green-400</div>
            </div>
          </div>
        </div>
        
        {/* Demonstração de tipografia */}
        <h3 className="text-xl font-medium mb-3">Tipografia</h3>
        <div className="space-y-3 mb-6">
          <p className="text-xs">text-xs (extra pequeno)</p>
          <p className="text-sm">text-sm (pequeno)</p>
          <p className="text-base">text-base (base)</p>
          <p className="text-lg">text-lg (grande)</p>
          <p className="text-xl">text-xl (extra grande)</p>
          <p className="font-bold">font-bold</p>
          <p className="italic">italic</p>
        </div>
      </section>
      
      {/* 
        SEÇÃO 3: VANTAGENS E DESVANTAGENS
        Discute os prós e contras do Tailwind CSS
      */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Vantagens e Desvantagens</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-3 text-green-600">Vantagens</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Desenvolvimento mais rápido</li>
              <li>Não precisa criar nomes de classes</li>
              <li>HTML e CSS juntos em um só lugar</li>
              <li>Sistema de design consistente</li>
              <li>Arquivo CSS final menor (com purge)</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-3 text-red-600">Desvantagens</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML pode ficar com muitas classes</li>
              <li>Curva de aprendizado inicial</li>
              <li>Pode dificultar a separação de responsabilidades</li>
              <li>Arquivos HTML mais verbosos</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}