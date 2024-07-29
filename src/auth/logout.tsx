"use server";

import { signOut } from "@/auth/auth";

export async function logout() {
  "use server";
  await signOut({ redirectTo: "/" });
}
