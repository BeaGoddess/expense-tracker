"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useSupabaseServer } from "@/utils/supabase/server";

export async function useSignIn(formData: FormData) {
  const supabase = useSupabaseServer();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    if (error.status === 400) {
      return { error: error.message };
    }

    redirect("/error");
  }

  redirect("/");
  
}

export async function useSignUp(formData: FormData) {
  const supabase = useSupabaseServer();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        name: formData.get("name") as string,
        username: formData.get("username") as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    if (error.status === 400) {
      return { error: error.message };
    }

    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/");
}

export async function useSignOut() {
  const supabase = useSupabaseServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    if (error.status === 400) {
      return { error: error.message };
    }

    redirect("/error");
  }

  redirect("/sign-in");
}
