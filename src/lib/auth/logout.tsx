'use server';

import { signOut } from '@/lib/auth';

export async function logout() {
  'use server';
  await signOut({ redirect: false });
}
