import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
  // Configure one or more authentication providers
  providers: [
    Providers.Okta({
      clientId: process.env.OKTA_CLIENTID,
      clientSecret: process.env.OKTA_CLIENTSECRET,
      domain: process.env.OKTA_DOMAIN,
    }),
    // ...add more providers here
  ],
};

const handler = (req, res) => NextAuth(req, res, options);

export { handler as GET, handler as POST };
