declare global {
  namespace NodeJS {
    interface ProcessEnv {
      AUTH_SECRET: string;
      NEXT_PUBLIC_CONTENTSTACK_API_KEY: string;
      NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN: string;
      NEXT_PUBLIC_ENVIRONMENT: 'dev' | 'main' | 'production' | 'staging';
      OKTA_CLIENT_ID: string;
      OKTA_CLIENT_SECRET: string;
      OKTA_ISSUER: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }
