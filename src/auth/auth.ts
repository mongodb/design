import NextAuth from 'next-auth';
import Okta from '@auth/core/providers/okta';

const AUTH_OPTIONS = {
  providers: [
    Okta({
      clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_OKTA_CLIENT_SECRET,
      issuer: process.env.NEXT_PUBLIC_OKTA_ISSUER,
    }),
  ],
  trustHost: true,
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(AUTH_OPTIONS);
