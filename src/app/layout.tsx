import './globals.css';
import { auth } from '@/auth';
import { SessionWrapper } from '@/components/providers/SessionWrapper';

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
    <SessionWrapper session={session}>
      <LayoutWrapper components={components}>{children}</LayoutWrapper>
    </SessionWrapper>
  );
}
