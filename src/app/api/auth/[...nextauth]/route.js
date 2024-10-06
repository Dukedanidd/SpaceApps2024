import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub; // Agrega el ID del usuario a la sesión
      return session;
    },
  },
}

export const GET = NextAuth(authOptions)
export const POST = NextAuth(authOptions)