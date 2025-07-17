'use server';

import './globals.css';

import LayoutWrapper from '@/components/layout-wrapper';
import { getComponentsService } from '@/lib/contentStack/contentStackService';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This can directly call the ContentStack SDK to fetch the content page since this is a server component
  const components = await getComponentsService({ includeContent: false });

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
