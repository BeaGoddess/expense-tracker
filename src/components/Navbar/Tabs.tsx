"use client";

import { signout } from "@/app/(auth)/action";
import { links as navLinks } from "@/types/navbar";
import ItemLink from "./ItemsTab";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils/cn";

interface TabsProps {
  capsule: boolean;
}

export default function Tabs({ capsule }: TabsProps) {
  return (
    <div className="justify-between flex-1 flex flex-row sm:flex-col">
      <div className="flex gap-4 flex-row sm:flex-col">
        {navLinks.map((link) => {
          return <ItemLink key={link.name} item={link} capsule={capsule} />;
        })}
      </div>

      <div
        className="font-bold text-lg text-[#7574C7] cursor-pointer hover:bg-white rounded-md duration-700"
        onClick={() => signout()}
      >
        <div className="flex p-2 gap-6 items-center">
          <ArrowRightCircleIcon className="h-5 w-5 my-1" />
          <div
            className={cn("hidden sm:block", {
              "sm:hidden": capsule,
            })}
          >
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
}
