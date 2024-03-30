import useSupabaseBrowser from "@/utils/supabase/client";
import { InsertTables, Tables } from "@/types/type";
import { useState } from "react";

export const useEarnings = () => {
  const client = useSupabaseBrowser();
  const [earnings, setEarnings] = useState<Tables<"earnings">[]>([]);

  const getEarnings = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const { data, error } = await client
        .from("earnings")
        .select("*")
        .eq("user_id", user?.id);

      if (data) {
        setEarnings(data);
      }
    }
  };

  const createEarnings = async (row: InsertTables<"earnings">) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { data: newEarnings, error } = await client
        .from("earnings")
        .insert({ user_id: userId, ...row })
        .select()
        .single();

      if (newEarnings) {
        setEarnings((prev) => [...prev, newEarnings]);

        return { success: true, earnings: newEarnings };
      }

      if (error) {
        return { error: error.message };
      }
    }
  };

  const deleteEarnings = async (id: number) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { error } = await client
        .from("expenses")
        .delete()
        .eq("id", id)
        .eq("user_id", userId);

      if (error) {
        return { error: error.message };
      }

      setEarnings((prev) => prev.filter((earning) => earning.id !== id));

      return { success: true };
    }
  };

  return {
    earnings,
    getEarnings,
    createEarnings,
    deleteEarnings,
  };
};
