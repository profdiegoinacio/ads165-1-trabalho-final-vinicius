'use client'

interface UserProfileProps {
    initials: string;
    name: string;
    email: string;
}

export default function UserProfile({initials, name, email}: UserProfileProps) {
    return (
        <div className="px-4 py-4 border-t border-blue-800 dark:border-blue-700">
            <div className="flex items-center">
                <div
                    className="w-10 h-10 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center text-xl font-bold">
                    {initials}
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-xs text-blue-300">{email}</p>
                </div>
            </div>
        </div>
    );
}