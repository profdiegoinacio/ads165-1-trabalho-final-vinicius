// auth.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './auth.config'; // Importa a configuração base

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    ...authConfig, // Espalha a configuração base
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // Lógica para autenticar com seu backend Spring Boot
                if (!credentials?.username || !credentials?.password) {
                    return null;
                }

                try {
                    const res = await fetch(`http://localhost:8080/api/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            username: credentials.username,
                            password: credentials.password,
                        }),
                    });

                    if (!res.ok) {
                        // console.error("Auth failed:", await res.text());
                        return null; // Ou lançar um erro específico
                    }

                    const user = await res.json(); // Espera-se { token: "...", username: "...", roles: ["..."] }

                    if (user && user.token) {
                        // Retorna o objeto que será passado para o callback `jwt`
                        return {
                            id: user.username, // Auth.js precisa de um `id` no objeto User, usamos username
                            name: user.username, // Opcional, pode ser usado no frontend
                            username: user.username,
                            accessToken: user.token, // O JWT do Spring Boot
                            roles: user.roles, // Papéis do usuário
                        };
                    }
                    return null;
                } catch (error) {
                    console.error('Error during authentication with backend:', error);
                    return null; // Ou lançar um erro
                }
            },
        }),
        // Adicione outros provedores aqui (Google, GitHub, etc.)
        // Ex: GoogleProvider({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET })
    ],
    // Session strategy: JWT é o padrão e recomendado para esta arquitetura
    session: {
        strategy: 'jwt',
    },
    // Secret já está em authConfig, mas é bom lembrar que é essencial
    secret: process.env.AUTH_SECRET,
});