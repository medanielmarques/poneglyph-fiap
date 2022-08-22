import NextAuth from 'next-auth';
import ProvidersGithub from 'next-auth/providers/github';
import ProvidersGoogle from 'next-auth/providers/google';
import ProvidersApple from 'next-auth/providers/apple';

export default NextAuth({
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
  secret: process.env.NEXT_AUTH_SECRET,
  theme: {
    colorScheme: 'light',
    logo: 'https://res.cloudinary.com/du39ecvjf/image/upload/v1616871437/Mesavip/Main/logo_ifyju9.png',
  },
  callbacks: {
    session(session) {
      console.log(session);

      return { ...session, expires: '2d' };
    },
  },
});
