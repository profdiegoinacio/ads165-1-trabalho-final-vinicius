'use client'

interface LogoProps {
    text: string;
}

export default function Logo({text}: LogoProps) {
    return (
        <div className="flex items-center justify-center h-16 bg-blue-950 dark:bg-blue-900">
            <span className="text-xl font-semibold">{text}</span>
        </div>
    );
}