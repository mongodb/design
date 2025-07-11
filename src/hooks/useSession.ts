'use client';

import { Session } from '@/auth';
import { useSession as useAuthSession } from 'next-auth/react';

export type LGSession = Partial<Session> & { isLoggedIn?: boolean };

export const useSession = (): LGSession => {
  // Get the session from SessionProvider in layout.tsx
  const { data: session } = useAuthSession();

  return { ...session, isLoggedIn: !!session?.user };
};
