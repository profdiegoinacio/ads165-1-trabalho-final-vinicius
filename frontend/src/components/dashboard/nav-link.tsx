'use client'

import {ReactNode} from 'react';

interface NavLinkProps {
    href: string;
    icon: ReactNode;
    children: ReactNode;
    isActive?: boolean;
}

export default function NavLink({href, icon, children, isActive = false}: NavLinkProps) {
    const baseClasses = "flex items-center px-4 py-3 text-white rounded-lg transition-colors group";
    const activeClasses = "bg-blue-800 dark:bg-blue-700";
    const hoverClasses = "hover:bg-blue-800 dark:hover:bg-blue-700";

    const classes = isActive
        ? `${baseClasses} ${activeClasses}`
        : `${baseClasses} ${hoverClasses}`;

    return (
        <a href={href} className={classes}>
            <span className="mr-3">{icon}</span>
            <span>{children}</span>
        </a>
    );
}