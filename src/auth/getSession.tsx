"use server";

import { auth } from "@/auth/auth";

export async function getSession() {
  "use server";
  const session = await auth();
  return session;
}
