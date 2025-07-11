'use server';

import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import LayoutWrapper from '@/components/layout-wrapper';
import { getComponents } from '@/utils/ContentStack/getContentstackResources';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, components] = await Promise.all([
    auth(),
    getComponents({ includeContent: false }),
  ]);

  return (
    // Provide the session to the entire app
    // https://next-auth.js.org/getting-started/client#custom-base-path
    <SessionProvider session={session} basePath="/api/auth/callback/okta">
      <LayoutWrapper components={components}>{children}</LayoutWrapper>
    </SessionProvider>
  );
}
