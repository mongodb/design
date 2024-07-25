import NextAuth from 'next-auth';
import Okta from '@auth/core/providers/okta';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Okta({
      clientId: process.env.secrets.OKTA_CLIENT_ID,
      clientSecret: process.env.secrets.OKTA_CLIENT_SECRET,
      issuer: process.env.secrets.OKTA_ISSUER,
    }),
  ],
});
