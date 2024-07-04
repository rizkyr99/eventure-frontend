import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  debug: true,
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        try {
          const response = await fetch(
            'http://localhost:8080/api/v1/auth/login',
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ email, password }),
            }
          );

          if (!response.ok) {
            throw new Error('Failed to log in');
          }

          const { data } = await response.json();

          return {
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role,
            accessToken: data.token,
          };
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      return !!auth;
    },
    session: async ({ token, session }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role;
      }

      return session;
    },
    jwt: async ({ token, user }) => {
      if (user) token.role = user.role;
      console.log(token);
      return token;
    },
  },
  session: { strategy: 'jwt', maxAge: 60 * 60 * 1 },
  pages: {
    signIn: '/sign-in',
  },
  jwt: {
    maxAge: 60 * 60 * 1,
  },
});
