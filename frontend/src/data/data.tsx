
export const tableHeaders = [
    {key: 'cliente', label: 'Cliente'},
    {key: 'pedido', label: 'Pedido'},
    {key: 'valor', label: 'Valor'},
    {key: 'status', label: 'Status'},
    {key: 'data', label: 'Data'}
];

export const tableData = [
    {
        cliente: 'Maria Silva',
        pedido: '#2536',
        valor: 'R$ 125,00',
        status: (
            <span
                className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Completo
                </span>
        ),
        data: '12/06/2023'
    },
    {
        cliente: 'João Santos',
        pedido: '#2537',
        valor: 'R$ 420,50',
        status: (
            <span
                className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Processando
                </span>
        ),
        data: '12/06/2023'
    },
    {
        cliente: 'Ana Ferreira',
        pedido: '#2538',
        valor: 'R$ 232,00',
        status: (
            <span
                className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                Pendente
                </span>
        ),
        data: '12/06/2023'
    },
    {
        cliente: 'Carlos Oliveira',
        pedido: '#2539',
        valor: 'R$ 1.250,00',
        status: (
            <span
                className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                Completo
                </span>
        ),
        data: '11/06/2023'
    },
    {
        cliente: 'Márcia Costa',
        pedido: '#2540',
        valor: 'R$ 540,00',
        status: (
            <span
                className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                Cancelado
                </span>
        ),
        data: '11/06/2023'
    }
];

// Dados mockados para feed de atividades
export const activityData = [
    {
        id: 1,
        user: {
            name: 'Carlos Oliveira',
            initials: 'CO'
        },
        action: 'realizou um pedido',
        target: '#2539',
        time: 'há 2 horas'
    },
    {
        id: 2,
        user: {
            name: 'Ana Silva',
            initials: 'AS'
        },
        action: 'atualizou o perfil',
        target: 'da empresa',
        time: 'há 3 horas'
    },
    {
        id: 3,
        user: {
            name: 'Rafael Mendes',
            initials: 'RM'
        },
        action: 'cancelou o pedido',
        target: '#2532',
        time: 'há 5 horas'
    },
    {
        id: 4,
        user: {
            name: 'Juliana Costa',
            initials: 'JC'
        },
        action: 'adicionou um produto ao',
        target: 'carrinho',
        time: 'há 6 horas'
    }
];