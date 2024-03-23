import useSupabaseBrowser from "@/utils/supabase/client";
import { Tables } from "@/types/type";
import { useState } from "react";

export const useWallets = () => {
  const client = useSupabaseBrowser();
  const [wallets, setWallets] = useState<Tables<"wallets">[]>([]);

  const getWalles = async () => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const { data, error } = await client
        .from("wallets")
        .select("*")
        .eq("user_id", user?.id);
      if (data) {
        setWallets(data);
      }
    }

  };

  return {
    wallets,
    getWalles,
  };
};
