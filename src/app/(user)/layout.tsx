"use server";

import "@/assets/index.css";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/sign-in");
  }

  return <section className="h-screen bg-white">{children}</section>;
}
