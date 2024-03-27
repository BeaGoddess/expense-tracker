import useSupabaseBrowser from "@/utils/supabase/client";
import { InsertTables, Tables } from "@/types/type";
import { useEffect, useState } from "react";

type WalletValues = {
  name: string;
  balance: string;
};

export const useWallets = () => {
  const client = useSupabaseBrowser();
  const [wallets, setWallets] = useState<Tables<"wallets">[]>([]);

  const getWallets = async () => {
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

  const createWallet = async (row: InsertTables<"wallets">) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { data: newWallet, error } = await client
        .from("wallets")
        .insert({ user_id: userId, ...row })
        .select()
        .single();

      if (newWallet) {
        setWallets([...wallets, newWallet]);
        return { success: true, wallet: newWallet };
      }

      if (error) {
        return { error: error.message };
      }
    }
  };

  useEffect(() => {
    getWallets();
  }, [wallets]);

  return {
    wallets,
    getWallets,
    createWallet,
    setWallets,
  };
};
