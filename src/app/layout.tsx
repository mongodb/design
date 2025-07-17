'use server';

import './globals.css';
import { auth } from '@/auth';
import LayoutWrapper from '@/components/layout-wrapper';
import { getComponents } from '@/lib/contentStackService';
// import { getComponents } from '@/utils/ContentStack/contentstackClient';
import { ComponentFields } from '@/utils/ContentStack/types';
import { SessionProvider } from 'next-auth/react';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const components = await getComponents({ includeContent: false });

  const components = await getComponents({ includeContent: false });

  console.log({ components });

  // const session = await auth();

  // const [session, components] = await Promise.all([
  //   auth(),
  //   getComponents({ includeContent: false }),
  // ]);

  return (
    // Provide the session to the entire app
    // <SessionProvider session={session}>
    <LayoutWrapper components={components}>{children}</LayoutWrapper>
    // </SessionProvider>
  );
}
