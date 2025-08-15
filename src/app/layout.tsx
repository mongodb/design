'use server';

import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from '@/auth/client';

import LayoutWrapper from '@/components/layout-wrapper';
import { fetchComponentsService } from '@/lib/contentStack/contentStackService';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This can directly call the ContentStack SDK to fetch the content page since this is a server component

  const [session, components] = await Promise.all([
    auth(),
    fetchComponentsService({ includeContent: false }),
  ]);

  return (
    <SessionProvider session={session}>
      <LayoutWrapper components={components}>{children}</LayoutWrapper>
    </SessionProvider>
  );
}
