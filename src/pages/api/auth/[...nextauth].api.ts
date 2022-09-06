import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import ProvidersGithub from 'next-auth/providers/github';
import ProvidersGoogle from 'next-auth/providers/google';
import { prisma } from 'server/prisma';

export const authOptions: NextAuthOptions = {
  providers: [
    ProvidersGithub({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    ProvidersGoogle({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  theme: {
    colorScheme: 'light',
    logo: 'https://res.cloudinary.com/du39ecvjf/image/upload/v1616871437/Mesavip/Main/logo_ifyju9.png',
  },
  callbacks: {
    session({ session, user }: any) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
};

export default NextAuth(authOptions);
