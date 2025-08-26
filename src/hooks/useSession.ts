'use client';

import { useMemo } from 'react';
import { Session } from '@/auth';
import { useSession as useAuthSession } from '@/auth/client';

export type LGSession = Partial<Session> & { isLoggedIn?: boolean };

export const useSession = (): LGSession => {
  // Get the session from SessionProvider in layout.tsx
  const { data: session } = useAuthSession();

  // This prevents a new object from being created on every render
  return useMemo(() => {
    return { ...session, isLoggedIn: !!session?.user };
  }, [session]);
};
