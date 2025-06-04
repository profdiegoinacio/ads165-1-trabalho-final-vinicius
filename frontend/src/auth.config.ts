// auth.config.ts
import type {NextAuthConfig} from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login', // Página de login customizada (opcional)
        // error: '/auth/error', // Página para erros de autenticação (opcional)
    },
    callbacks: {
        // O callback `authorized` é usado para proteger rotas via middleware
        authorized({auth, request: {nextUrl}}) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard'); // Exemplo de rota protegida

            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redireciona usuários não logados para a página de login
            } else if (isLoggedIn) {
                // Se logado e tentando acessar /login, redirecionar para dashboard (opcional)
                if (nextUrl.pathname === '/login' || nextUrl.pathname === '/register') {
                    return Response.redirect(new URL('/dashboard', nextUrl));
                }
            }
            return true; // Permite acesso a outras páginas (públicas ou não cobertas)
        },
        // O callback `jwt` é invocado sempre que um JWT é criado ou atualizado.
        // Aqui, pegamos o token do backend e o incorporamos ao token da sessão do Auth.js.
        async jwt({token, user, account}) {
            // `user` e `account` estão disponíveis apenas no login inicial.
            if (account && user) {
                // `user` aqui é o objeto retornado pelo `authorize` do CredentialsProvider
                // ou pelo provedor OAuth.
                // Assumimos que o `user` retornado pelo `authorize` já contém o token do backend
                // e outras informações como `roles`.
                return {
                    ...token,
                    accessToken: user.accessToken, // O JWT do Spring Boot
                    roles: user.roles,
                    // id: user.id, // Se você tiver um ID do usuário no backend
                    username: user.username, // Adicionando username
                };
            }
            return token;
        },
        // O callback `session` é invocado quando a sessão é acessada.
        // Ele permite que você exponha dados do token para o cliente.
        async session({session, token: jwtToken}) {
            // `jwtToken` é o token processado pelo callback `jwt`.
            if (jwtToken.accessToken) {
                session.accessToken = jwtToken.accessToken as string;
            }
            if (jwtToken.roles) {
                session.user.roles = jwtToken.roles as string[];
            }
            if (jwtToken.username) {
                session.user.username = jwtToken.username as string;
            }
            // session.user.id = jwtToken.id as string; // Se tiver ID
            return session;
        },
    },
    providers: [
        // Provedores (como Google, GitHub) serão adicionados aqui se necessário.
        // O CredentialsProvider será adicionado em `auth.ts`
    ],
} satisfies NextAuthConfig;