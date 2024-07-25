'use server';

import { signIn } from '@/auth/auth';

export async function login() {
  'use server';
  console.log(process.env.NEXT_PUBLIC_OKTA_ISSUER);
  await signIn('okta');
}
