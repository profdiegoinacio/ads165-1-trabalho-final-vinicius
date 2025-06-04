'use client'

import {ReactNode} from 'react';

interface StatCardProps {
    title: string;
    value: string;
    change?: string;
    isPositive?: boolean;
    icon?: ReactNode;
}

export default function StatCard({title, value, change, isPositive = true, icon}: StatCardProps) {
    const changeColor = isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';

    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white mb-2">{title}</h2>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">{value}</p>
                    {change && (
                        <p className={`text-sm ${changeColor} mt-2`}>{change}</p>
                    )}
                </div>
                {icon && (
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        {icon}
                    </div>
                )}
            </div>
        </div>
    );
}