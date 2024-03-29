import useSupabaseBrowser from "@/utils/supabase/client";
import { Tables } from "@/types/type";
import { useState } from "react";

export const useCategories = () => {
  const client = useSupabaseBrowser();
  const [categories, setCategories] = useState<Tables<"categories">[]>([]);

  const getCategories = async () => {
    const { data, error } = await client.from("categories").select("*");

    if (data) {
      setCategories(data);
    }
  };

  return {
    categories,
    getCategories,
  };
};
