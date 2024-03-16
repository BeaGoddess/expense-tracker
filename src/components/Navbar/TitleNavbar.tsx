"use client";

import { cn } from "@/lib/utils/cn";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface TitleBarProps {
  setCapsule: React.Dispatch<React.SetStateAction<boolean>>;
  capsule: boolean;
}

export default function TitleBar({ setCapsule, capsule }: TitleBarProps) {
  return (
    <div className="flex mt-8 mb-12">
      <div
        className={cn(
          "font-bold text-4xl leading-tight text-white ",
          {
            "hidden md:hidden": capsule === true,
          },
          {
            "hidden md:block": capsule === false,
          }
        )}
      >
        <span className="text-[#7574C7]">E</span>xpense{" "}
        <span className="text-[#7574C7]">T</span>racker
      </div>

      <div
        onClick={() => {
          capsule = !capsule;
          setCapsule(capsule);
        }}
        className="cursor-pointer md:visible invisible"
      >
        <Bars3Icon className="h-8 w-8 mt-2 text-white stroke-[3px] m-auto" />
      </div>
    </div>
  );
}
