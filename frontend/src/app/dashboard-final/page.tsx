'use client'

import {useEffect, useState} from 'react';
import Sidebar from '@/components/dashboard/sidebar';
import Header from '@/components/dashboard/header';
import PageContent from '@/components/dashboard/page-content';
import StatsGrid from '@/components/dashboard/stats-grid';
import StatCard from '@/components/dashboard/stat-card';
import ChartCard from '@/components/dashboard/chart-card';
import LineChart from '@/components/dashboard/line-chart';
import DataTable from '@/components/dashboard/datatable';
import ActivityFeed from '@/components/dashboard/activity-feed';
import {activityData, tableData, tableHeaders} from "@/data/data";

export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    // Efeito para aplicar a classe 'dark' ao elemento html
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Função para alternar entre modo claro e escuro
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
            {/* Sidebar Mobile */}
            <Sidebar
                isMobile={true}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            {/* Sidebar Desktop */}
            <Sidebar isMobile={false}/>

            {/* Conteúdo principal */}
            <div className="flex flex-col flex-1 md:ml-64">
                {/* Header */}
                <Header
                    title="Dashboard"
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                    onMenuClick={() => setSidebarOpen(true)}
                />

                {/* Conteúdo principal */}
                <PageContent>
                    {/* Grid de estatísticas */}
                    <StatsGrid>
                        <StatCard
                            title="Total de Vendas"
                            value="R$ 24.500,00"
                            change="+12% comparado ao mês anterior"
                            isPositive={true}
                            icon={
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            }
                        />
                        <StatCard
                            title="Novos Clientes"
                            value="128"
                            change="+8% comparado ao mês anterior"
                            isPositive={true}
                            icon={
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            }
                        />
                        <StatCard
                            title="Taxa de Conversão"
                            value="25.6%"
                            change="-2.3% comparado ao mês anterior"
                            isPositive={false}
                            icon={
                                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            }
                        />
                    </StatsGrid>

                    {/* Grid de dois painéis */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                        <div className="lg:col-span-2">
                            <ChartCard title="Vendas dos Últimos 7 Dias" filters={true}>
                                <LineChart/>
                            </ChartCard>
                        </div>
                        <div>
                            <ActivityFeed title="Atividades Recentes" activities={activityData}/>
                        </div>
                    </div>

                    {/* Tabela de pedidos recentes */}
                    <div className="mb-6">
                        <DataTable
                            title="Pedidos Recentes"
                            headers={tableHeaders}
                            data={tableData}
                        />
                    </div>
                </PageContent>
            </div>
        </div>
    );
}