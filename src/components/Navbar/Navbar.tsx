"use client";

import TitleBar from "./TitleNavbar";
import Tabs from "./Tabs";
import { useState } from "react";
import { cn } from "@/lib/utils/cn";

export default function NavBar() {
  const [capsule, setCapsule] = useState(false);

  return (
    <div
      className={cn(
        "w-full sm:w-[280px] text-white bg-gradient-to-b from-[#8E8CDA] to-[#C0BAFF] p-3 flex flex-row sm:flex-col",
        {
          "w-full sm:w-[60px]": capsule === true,
        }
      )}
    >
      <TitleBar setCapsule={setCapsule} capsule={capsule} />
      <Tabs capsule={capsule} />
    </div>
  );
}
