// Exemplo: components/AuthStatus.tsx
'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function AuthStatus() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (session) {
        return (
            <>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                    <p>Signed in as {session.user?.username || session.user?.email}</p>
                    {session.user?.roles && <p>Roles: {session.user.roles.join(', ')}</p>}
                    <button onClick={() => signOut({ callbackUrl: '/' })}>Sign out</button>
                </div>
            </>
        );
    }

    return (
        <>
            <div className="text-xs text-gray-500 dark:text-gray-400">
                <p>Not signed in</p>
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        </>
    );
}