import useSupabaseBrowser from "@/utils/supabase/client";
import { InsertTables, Tables } from "@/types/type";
import { useState } from "react";

export const useExpenses = () => {
  const client = useSupabaseBrowser();
  const [expenses, setExpenses] = useState<Tables<"expenses">[]>([]);

  const getExpenses = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const { data, error } = await client
        .from("expenses")
        .select("*")
        .eq("user_id", user?.id);

      if (data) {
        setExpenses(data);
      }
    }
  };

  const createExpense = async (row: InsertTables<"expenses">) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { data: newExpense, error } = await client
        .from("expenses")
        .insert({ user_id: userId, ...row })
        .select()
        .single();

      if (newExpense) {
        setExpenses((prev) => [...prev, newExpense]);

        return { success: true, expense: newExpense };
      }

      if (error) {
        return { error: error.message };
      }
    }
  };

  const deleteExpense = async (expenseId: number) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { error } = await client
        .from("expenses")
        .delete()
        .eq("id", expenseId)
        .eq("user_id", userId);

      if (error) {
        return { error: error.message };
      }

      setExpenses((prev) => prev.filter((expense) => expense.id !== expenseId));

      return { success: true };
    }
  };

  return {
    expenses,
    getExpenses,
    createExpense,
    deleteExpense,
  };
};
