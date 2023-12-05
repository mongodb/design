import NextAuth from 'next-auth';
import Okta from 'next-auth/providers/okta';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Okta({
      clientId: process.env.OKTA_OAUTH2_CLIENT_ID as string,
      clientSecret: process.env.OKTA_OAUTH2_CLIENT_SECRET as string,
      issuer: process.env.OKTA_OAUTH2_ISSUER as string,
      checks: 'state',
    }),
  ],
  // secret is read from process.env.NEXTAUTH_SECRET by default
  // https://next-auth.js.org/configuration/options#secret
};

export default NextAuth(authOptions);
