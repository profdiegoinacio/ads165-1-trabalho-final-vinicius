'use client'

import Logo from './logo';
import Navigation from './navigation';
import UserProfile from './user-profile';

interface SidebarProps {
    isMobile?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
}

export default function Sidebar({isMobile = false, isOpen = false, onClose}: SidebarProps) {
    if (!isMobile) {
        return (
            <div
                className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-blue-900 dark:bg-blue-950 text-white">
                <Logo text="DataVision"/>
                <Navigation/>
                <UserProfile initials="JD" name="John Doe" email="admin@example.com"/>
            </div>
        );
    }

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
                    onClick={onClose}
                ></div>
            )}

            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 dark:bg-blue-950 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {/* Logo com botão de fechar */}
                <div className="flex items-center justify-between h-16 bg-blue-950 dark:bg-blue-900 px-4">
                    <span className="text-xl font-semibold">DataVision</span>
                    <button
                        className="text-white focus:outline-none"
                        onClick={onClose}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                <Navigation/>
                <UserProfile initials="JD" name="John Doe" email="admin@example.com"/>
            </div>
        </>
    );
}