'use client';

import { useEffect, useState } from 'react';
import { getSession, Session } from '@/auth';

export const useSession = () => {
  const [session, setSession] = useState<Session | undefined>();

  useEffect(() => {
    getSession().then(response => {
      if (response !== null) {
        setSession(response);
      }
    });
  }, []);

  return session;
};
