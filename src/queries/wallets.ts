import { TypedSupabaseClient } from "@/types/type";

export async function getWallets(client: TypedSupabaseClient) {

  return await client.from("wallets").select("*");
}
