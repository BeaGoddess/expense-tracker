"use client";

import useSupabaseBrowser from "@/utils/supabase/client";
import { getWallets } from "@/queries/wallets";
import { useQuery } from "@tanstack/react-query";

function useWallets() {
  const client = useSupabaseBrowser();
  const queryKey = ["wallets"];

  const queryFn = async () => {
    return getWallets(client).then((result) => result.data);
  };

  return useQuery({ queryKey, queryFn });
}

export default useWallets;
