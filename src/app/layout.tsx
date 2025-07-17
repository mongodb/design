'use server';

import './globals.css';
import LayoutWrapper from '@/components/layout-wrapper';
import { getComponents } from '@/utils/ContentStack/contentstackClient';
import { ComponentFields } from '@/utils/ContentStack/types';

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let components: ComponentFields[] = [];
  try {
    components = await getComponents({ includeContent: false });
    console.log('Components fetched successfully');
  } catch (error) {
    console.error('Error fetching components in RootLayout:', error);
  }

  // console.log({ components });

  return (
    // Provide the session to the entire app
    // <SessionProvider session={session}>
    <LayoutWrapper components={components}>{children}</LayoutWrapper>
    // </SessionProvider>
    // <html>
    //   <body>
    //     <div>hi</div>
    //   </body>
    // </html>
  );
}
