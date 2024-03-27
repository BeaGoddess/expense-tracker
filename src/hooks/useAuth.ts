"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { useSupabaseServer } from "@/utils/supabase/server";

interface FormValuesSignIn {
  email: string;
  password: string;
}

interface FormValuesSignUp {
  email: string;
  password: string;
  name: string;
  username: string;
  repeatPassword: string;
}

export async function useSignIn(formData: FormValuesSignIn) {
  const supabase = useSupabaseServer();

  const data = {
    email: formData.email,
    password: formData.password,
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

export async function useSignUp(formData: FormValuesSignUp) {
  const supabase = useSupabaseServer();

  const data = {
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        name: formData.name,
        username: formData.username,
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
