'use client'

import {ReactNode} from 'react';

interface ChartCardProps {
    title: string;
    children: ReactNode;
    filters?: boolean;
}

export default function ChartCard({title, children, filters = false}: ChartCardProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h2>

                {filters && (
                    <div className="flex space-x-2">
                        <button
                            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                            Diário
                        </button>
                        <button
                            className="px-3 py-1 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                            Semanal
                        </button>
                        <button
                            className="px-3 py-1 text-xs text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
                            Mensal
                        </button>
                    </div>
                )}
            </div>

            <div className="h-60">
                {children}
            </div>
        </div>
    );
}