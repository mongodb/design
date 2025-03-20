'use client';

import { useEffect, useMemo, useState } from 'react';
import { getSession, Session } from '@/auth';

export type LGSession = Partial<Session> & { isLoggedIn?: boolean };

export const useSession = (): LGSession => {
  const [session, setSession] = useState<Session | undefined>();

  useEffect(() => {
    getSession().then(response => {
      if (response !== null) {
        setSession(response);
      }
    });
  }, []);

  // This prevents a new object from being created on every render
  return useMemo(() => {
    return { ...session, isLoggedIn: !!session?.user };
  }, [session]);
};
