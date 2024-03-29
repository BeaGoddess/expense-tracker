import useSupabaseBrowser from "@/utils/supabase/client";
import { InsertTables, Tables } from "@/types/type";
import { useEffect, useState } from "react";

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
        setWallets((prev) => [...prev, newWallet]);

        return { success: true, wallet: newWallet };
      }

      if (error) {
        return { error: error.message };
      }
    }
  };

  const deleteWallet = async (walletId: number) => {
    const {
      data: { user },
    } = await client.auth.getUser();

    if (user) {
      const userId = user?.id;

      const { error } = await client
        .from("wallets")
        .delete()
        .eq("id", walletId)
        .eq("user_id", userId);

      if (error) {
        return { error: error.message };
      }

      setWallets((prevWallets) =>
        prevWallets.filter((wallet) => wallet.id !== walletId)
      );

      return { success: true };
    }
  };

  const refreshWallets = async () => {
    await getWallets();
  };

  return {
    wallets,
    getWallets,
    createWallet,
    deleteWallet,
    refreshWallets,
  };
};
