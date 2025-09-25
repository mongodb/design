'use server';

import { signOut } from './auth';

export async function logout() {
  'use server';
  await signOut({ redirect: false });
}
