'use client'

import {useState, useEffect} from 'react';
import AuthStatus from "@/components/auth/auth-status";

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
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Mobile sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 dark:bg-blue-950 text-white transform transition-transform duration-300 ease-in-out md:hidden ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                {/* Logo */}
                <div className="flex items-center justify-between h-16 bg-blue-950 dark:bg-blue-900 px-4">
                    <span className="text-xl font-semibold">DataVision</span>
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
                    <a href="#"
                       className="flex items-center px-4 py-3 text-white bg-blue-800 dark:bg-blue-700 rounded-lg group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span>Dashboard</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <span>Analytics</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <span>Clients</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span>Orders</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                    </a>
                </nav>

                {/* User profile in sidebar footer */}
                <div className="px-4 py-4 border-t border-blue-800 dark:border-blue-700">
                    <div className="flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center text-xl font-bold">
                            JD
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-blue-300">admin@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop sidebar */}
            <div
                className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-blue-900 dark:bg-blue-950 text-white">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 bg-blue-950 dark:bg-blue-900">
                    <span className="text-xl font-semibold">DataVision</span>
                </div>

                {/* Navigation */}
                <nav className="flex-1 px-2 py-4 space-y-2 overflow-y-auto">
                    <a href="#"
                       className="flex items-center px-4 py-3 text-white bg-blue-800 dark:bg-blue-700 rounded-lg group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        <span>Dashboard</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                        </svg>
                        <span>Analytics</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        <span>Clients</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                        </svg>
                        <span>Orders</span>
                    </a>

                    <a href="#"
                       className="flex items-center px-4 py-3 text-white hover:bg-blue-800 dark:hover:bg-blue-700 rounded-lg transition-colors group">
                        <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span>Settings</span>
                    </a>
                </nav>

                {/* User profile in sidebar footer */}
                <div className="px-4 py-4 border-t border-blue-800 dark:border-blue-700">
                    <div className="flex items-center">
                        <div
                            className="w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center text-xl font-bold">
                            JD
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium">John Doe</p>
                            <p className="text-xs text-blue-300">admin@example.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 md:pl-64">
                {/* Header */}
                <header
                    className="w-full h-16 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-between px-4 md:px-6 transition-colors">
                    {/* Mobile menu button */}
                    <button
                        className="text-gray-600 dark:text-gray-300 md:hidden focus:outline-none"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>

                    {/* Search bar */}
                    <div className="relative mx-4 md:ml-6 flex-1 max-w-md">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                            </svg>
                        </div>
                        <input
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md leading-5 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
                            type="search" placeholder="Search..."/>
                    </div>

                    {/* Header right icons */}
                    <div className="flex items-center">
                        {/* Theme toggle button */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors mr-2"
                        >
                            {darkMode ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                                </svg>
                            )}
                        </button>

                        {/* Notification bell */}
                        <button
                            className="p-2 text-gray-600 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 relative">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                            </svg>
                            <span
                                className="absolute top-1 right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
                        </button>

                        {/* User dropdown */}
                        <div className="ml-4 relative flex-shrink-0">
                            <div className="flex items-center cursor-pointer">
                                <div className="hidden md:block mr-3 text-right">
                                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200">John Doe</div>
                                    <AuthStatus  />
                                </div>
                                <div
                                    className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white text-lg font-bold">
                                    JD
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-100 dark:bg-gray-900 transition-colors">
                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        {/* Visitors Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Total Visitors</div>
                                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">24,563</div>
                                    <div className="flex items-center text-green-500 text-sm mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span>12.5%</span>
                                    </div>
                                </div>
                                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Revenue Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Revenue</div>
                                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">$18,276</div>
                                    <div className="flex items-center text-green-500 text-sm mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span>8.3%</span>
                                    </div>
                                </div>
                                <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Bounce Rate Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Bounce Rate</div>
                                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">42.34%</div>
                                    <div className="flex items-center text-red-500 text-sm mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span>3.2%</span>
                                    </div>
                                </div>
                                <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                                    <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Customers Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition-colors">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-gray-500 dark:text-gray-400 text-sm">Customers</div>
                                    <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">1,432</div>
                                    <div className="flex items-center text-green-500 text-sm mt-1">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd"
                                                  d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"></path>
                                        </svg>
                                        <span>4.6%</span>
                                    </div>
                                </div>
                                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                                    <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none"
                                         stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                        {/* Main Chart */}
                        <div
                            className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 lg:col-span-2 transition-colors">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Visitor
                                    Traffic</h3>
                                <div className="flex space-x-2">
                                    <button
                                        className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 rounded-md focus:outline-none transition-colors">Day
                                    </button>
                                    <button
                                        className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md focus:outline-none transition-colors">Week
                                    </button>
                                    <button
                                        className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md focus:outline-none transition-colors">Month
                                    </button>
                                </div>
                            </div>

                            {/* Chart Placeholder */}
                            <div
                                className="h-72 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-colors">
                                <div className="text-center">
                                    <div className="text-gray-400 dark:text-gray-300">Chart Visualization</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">(In a real app, you
                                        would use a chart library)
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Recent Activity */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition-colors">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4">Recent
                                Activity</h3>

                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-md">
                                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">New order
                                            #1234
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">By Customer Smith
                                        </div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">35 minutes ago
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-md">
                                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">New
                                            message received
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">From support team
                                        </div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">2 hours ago</div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-md">
                                        <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">New user
                                            registered
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">user@example.com</div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">4 hours ago</div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-yellow-100 dark:bg-yellow-900 p-2 rounded-md">
                                        <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400" fill="none"
                                             stroke="currentColor" viewBox="0 0 24 24"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">System
                                            alert
                                        </div>
                                        <div className="text-xs text-gray-500 dark:text-gray-400">Server load high</div>
                                        <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">5 hours ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden transition-colors">
                        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200">Recent Orders</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead
                                    className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th className="px-5 py-3">Order ID</th>
                                    <th className="px-5 py-3">Customer</th>
                                    <th className="px-5 py-3">Product</th>
                                    <th className="px-5 py-3">Date</th>
                                    <th className="px-5 py-3">Amount</th>
                                    <th className="px-5 py-3">Status</th>
                                    <th className="px-5 py-3">Action</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">#1234</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">John Smith</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Premium Plan</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Jan 12, 2023</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">$59.99</td>
                                    <td className="px-5 py-4">
                                        <span
                                            className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">Completed</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors">View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">#1235</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Sarah Johnson</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Basic Plan</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Jan 11, 2023</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">$29.99</td>
                                    <td className="px-5 py-4">
                                        <span
                                            className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300">Completed</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors">View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">#1236</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Alex Brown</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Standard Plan</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Jan 10, 2023</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">$39.99</td>
                                    <td className="px-5 py-4">
                                        <span
                                            className="px-2 py-1 text-xs rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300">Pending</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors">View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">#1237</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Emma Wilson</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Premium Plan</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Jan 10, 2023</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">$59.99</td>
                                    <td className="px-5 py-4">
                                        <span
                                            className="px-2 py-1 text-xs rounded-full bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300">Failed</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors">View
                                        </button>
                                    </td>
                                </tr>
                                <tr className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                    <td className="px-5 py-4 font-medium text-gray-900 dark:text-white">#1238</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Michael Davis</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Standard Plan</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">Jan 9, 2023</td>
                                    <td className="px-5 py-4 text-gray-600 dark:text-gray-300">$39.99</td>
                                    <td className="px-5 py-4">
                                        <span
                                            className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">Processing</span>
                                    </td>
                                    <td className="px-5 py-4">
                                        <button
                                            className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-200 transition-colors">View
                                        </button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div
                            className="px-5 py-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 transition-colors">
                            <div className="text-sm text-gray-700 dark:text-gray-300">
                                Showing <span className="font-medium">1</span> to <span
                                className="font-medium">5</span> of <span className="font-medium">25</span> results
                            </div>
                            <div className="flex-1 flex justify-end">
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                     aria-label="Pagination">
                                    <a href="#"
                                       className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <span className="sr-only">Previous</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900 text-sm font-medium text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-800 transition-colors">1</a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">2</a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">3</a>
                                    <span
                                        className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300">...</span>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">8</a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">9</a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">10</a>
                                    <a href="#"
                                       className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                        <span className="sr-only">Next</span>
                                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                             fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}