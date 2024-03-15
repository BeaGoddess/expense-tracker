"use client";

import { signout } from "@/app/(auth)/action";
import { links as navLinks } from "@/types/navbar";
import ItemLink from "./ItemsTab";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

export default function Tabs() {
  return (
    <div className="justify-between flex-1 flex flex-col">
      <div className="flex flex-col gap-4">
        {navLinks.map((link) => {
          return <ItemLink key={link.name} item={link} />;
        })}
      </div>

      <div
        className="font-bold text-lg text-[#7574C7] cursor-pointer hover:bg-white rounded-md duration-700"
        onClick={() => signout()}
      >
        <div className="flex p-2 gap-6 items-center">
          <ArrowRightCircleIcon className="h-5 w-5" />
          <div> Sign out </div>
        </div>
      </div>
    </div>
  );
}
