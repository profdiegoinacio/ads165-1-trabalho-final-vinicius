'use client'

import {ReactNode} from 'react';

interface ActivityItem {
    id: string | number;
    user: {
        name: string;
        avatar?: string;
        initials?: string;
    };
    action: string;
    target: string;
    time: string;
    icon?: ReactNode;
    iconColor?: string;
}

interface ActivityFeedProps {
    title: string;
    activities: ActivityItem[];
}

export default function ActivityFeed({title, activities}: ActivityFeedProps) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-lg font-medium text-gray-800 dark:text-white">{title}</h2>
            </div>

            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {activities.map((activity) => (
                    <div key={activity.id} className="px-4 py-3 flex">
                        {activity.icon ? (
                            <div
                                className={`flex-shrink-0 w-10 h-10 rounded-full ${activity.iconColor || 'bg-blue-100 dark:bg-blue-900'} flex items-center justify-center mr-3`}>
                                {activity.icon}
                            </div>
                        ) : activity.user.avatar ? (
                            <img
                                className="flex-shrink-0 w-10 h-10 rounded-full mr-3"
                                src={activity.user.avatar}
                                alt={activity.user.name}
                            />
                        ) : (
                            <div
                                className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center text-white font-bold mr-3">
                                {activity.user.initials}
                            </div>
                        )}

                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-800 dark:text-white">
                                <span className="font-medium">{activity.user.name}</span> {activity.action}{' '}
                                <span className="font-medium">{activity.target}</span>
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                {activity.time}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-center">
                <button
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
                    Ver todas as atividades
                </button>
            </div>
        </div>
    );
}