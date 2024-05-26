import { useSupabaseServer } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const client = useSupabaseServer();
  const { data, error } = await client.from("categories").select("*");
  if (error) {
    return Response.json({ error: error.message });
  }

  if (data) {
    return Response.json(data);
  }
}
