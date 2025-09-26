'use server';

import { signIn } from '@/lib/auth';

export async function login() {
  'use server';
  await signIn('okta');
}
