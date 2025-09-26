'use server';

import { auth } from '@/lib/auth';

export async function getSession() {
  'use server';
  const session = await auth(); // server side
  return session;
}
