"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const supabase = createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/sign-in");
      } else {
        setAuthenticated(true);
      }
    };

    checkUser();
  }, [router]);

  if (!authenticated) {
    return null;
  }

  return <section className="h-screen bg-white">{children}</section>;
}
