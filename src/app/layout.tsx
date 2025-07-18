'use server';

import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

import LayoutWrapper from '@/components/layout-wrapper';
import { getComponentsService } from '@/lib/contentStack/contentStackService';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This can directly call the ContentStack SDK to fetch the content page since this is a server component

  const [session, components] = await Promise.all([
    auth(),
    getComponentsService({ includeContent: false }),
  ]);

  return (
    <SessionProvider session={session}>
      <LayoutWrapper components={components}>{children}</LayoutWrapper>
    </SessionProvider>
  );
}
