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
  const session = await auth();
  const components = await getComponents({ includeContent: false });

  return (
    // Provide the session to the entire app
    <SessionProvider session={session}>
      <LayoutWrapper components={components}>{children}</LayoutWrapper>
    </SessionProvider>
  );
}
