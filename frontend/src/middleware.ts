// middleware.ts
import NextAuth from 'next-auth';
import { authConfig } from './auth.config'; // Ajuste o caminho

export default NextAuth(authConfig).auth; // Exporta a função `auth` do `authConfig`

// Configuração do matcher para especificar quais rotas o middleware deve proteger
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: [
        '/dashboard/:path*', // Protege todas as sub-rotas de /dashboard
        // '/admin/:path*', // Exemplo de outra rota protegida
        // Evitar aplicar a rotas estáticas e de API do NextAuth
        '/((?!api/auth|_next/static|_next/image|.*\\.png$).*)',
    ],
};