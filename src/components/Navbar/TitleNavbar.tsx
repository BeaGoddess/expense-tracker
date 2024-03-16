"use client";

import { cn } from "@/lib/utils/cn";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface TitleBarProps {
  setCapsule: React.Dispatch<React.SetStateAction<boolean>>;
  capsule: boolean;
}

export default function TitleBar({ setCapsule, capsule }: TitleBarProps) {
  return (
    <div className="flex sm:mb-12 my-0 sm:mt-8 items-center sm:items-baseline mr-4">
      <div
        className={cn(
          "font-bold sm:text-4xl text-lg leading-tight text-white border-r border-white sm:border-r-0  pr-4",
          {
            "sm:hidden": capsule === true,
          },
          {
            "sm:block": capsule === false,
          }
        )}
      >
        <span className="text-[#7574C7]">E</span>xpense{" "}
        <span className="text-[#7574C7]">T</span>racker
      </div>

      <div
        onClick={() => {
          setCapsule(!capsule);
          console.log("Alterou?", capsule);
        }}
        className="cursor-pointer sm:block hidden"
      >
        <Bars3Icon className="h-8 w-8 mt-2 text-white stroke-[3px] m-auto" />
      </div>
    </div>
  );
}
