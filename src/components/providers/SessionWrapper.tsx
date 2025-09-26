'use client';

import { SessionProvider } from '@/client/auth';
import { Session } from '@/client/auth/types';

interface SessionWrapperProps {
  children: React.ReactNode;
  session: Session | null;
}

export function SessionWrapper({ children, session }: SessionWrapperProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
