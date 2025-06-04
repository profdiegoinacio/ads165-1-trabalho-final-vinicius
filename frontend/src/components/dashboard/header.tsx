'use client'

import DarkModeToggle from './dark-mode-toggle';

interface HeaderProps {
    title: string;
    darkMode: boolean;
    toggleDarkMode: () => void;
    onMenuClick: () => void;
}

export default function Header({title, darkMode, toggleDarkMode, onMenuClick}: HeaderProps) {
    return (
        <header className="bg-white dark:bg-gray-800 shadow-sm">
            <div className="px-4 py-3 flex items-center justify-between">
                {/* Botão do menu mobile */}
                <button
                    className="md:hidden text-gray-600 dark:text-gray-200 focus:outline-none"
                    onClick={onMenuClick}
                >
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>

                {/* Título da página */}
                <h1 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h1>

                {/* Toggle do modo escuro */}
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            </div>
        </header>
    );
}