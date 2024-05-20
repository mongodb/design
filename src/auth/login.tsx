"use server";

import { signIn } from "@/auth/auth";

export async function login() {
  "use server";
  await signIn("okta");
}
