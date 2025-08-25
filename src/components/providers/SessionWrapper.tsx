'use client';

import { SessionProvider } from '@/auth/client';
import { Session } from '@/auth';

interface SessionWrapperProps {
  children: React.ReactNode;
  session: Session | null;
}

export function SessionWrapper({ children, session }: SessionWrapperProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
