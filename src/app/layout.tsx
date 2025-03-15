'use server';

import './globals.css';
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import LayoutWrapper from '@/components/layout-wrapper';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth(); // server side

  return (
    // Provide the session to the entire app
    <SessionProvider session={session}>
      <LayoutWrapper>{children}</LayoutWrapper>
    </SessionProvider>
  );
}
