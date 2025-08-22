import NextAuth from 'next-auth';
import Okta from '@auth/core/providers/okta';

// Debug: Log environment variables in staging only
if (process.env.NEXT_PUBLIC_ENVIRONMENT === 'staging') {
  console.log('🌈Auth Environment Check:', {
    oktaClientId: process.env.OKTA_CLIENT_ID
      ? `${process.env.OKTA_CLIENT_ID.substring(0, 4)}...`
      : 'undefined',
    oktaClientSecret: process.env.OKTA_CLIENT_SECRET
      ? `${process.env.OKTA_CLIENT_SECRET.substring(0, 4)}...`
      : 'undefined',
    oktaIssuer: process.env.OKTA_ISSUER
      ? `${process.env.OKTA_ISSUER.substring(0, 10)}...`
      : 'undefined',
    authSecret: process.env.AUTH_SECRET
      ? `${process.env.AUTH_SECRET.substring(0, 4)}...`
      : 'undefined',
    authUrl: process.env.AUTH_URL
      ? `${process.env.AUTH_URL.substring(0, 15)}...`
      : 'undefined',
    nextAuthUrl: process.env.NEXTAUTH_URL
      ? `${process.env.NEXTAUTH_URL.substring(0, 15)}...`
      : 'undefined',
  });
}

const AUTH_OPTIONS = {
  providers: [
    Okta({
      clientId: process.env.OKTA_CLIENT_ID,
      clientSecret: process.env.OKTA_CLIENT_SECRET,
      issuer: process.env.OKTA_ISSUER,
    }),
  ],
  trustHost: true,
  secret: process.env.AUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(AUTH_OPTIONS);
