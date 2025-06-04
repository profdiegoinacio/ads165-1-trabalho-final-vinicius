'use client'

import {ReactNode} from 'react';

interface StatsGridProps {
    children: ReactNode;
    columns?: number;
}

export default function StatsGrid({children, columns = 3}: StatsGridProps) {
    const gridClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    };

    return (
        <div className={`grid ${gridClasses[columns as keyof typeof gridClasses]} gap-4 mb-6`}>
            {children}
        </div>
    );
}