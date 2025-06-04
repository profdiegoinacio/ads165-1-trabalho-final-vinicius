'use client'

import {ReactNode} from 'react';

interface PageContentProps {
    children: ReactNode;
}

export default function PageContent({children}: PageContentProps) {
    return (
        <main className="flex-1 p-4 overflow-y-auto">
            {children}
        </main>
    );
}