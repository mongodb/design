'use server';

import { signIn } from './auth';

export async function login() {
  'use server';
  await signIn('okta');
}
