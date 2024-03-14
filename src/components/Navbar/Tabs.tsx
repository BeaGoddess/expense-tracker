"use client";

import { signout } from "@/app/(auth)/action";
import {
  HomeIcon,
  WalletIcon,
  BanknotesIcon,
  UserIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/solid";

export default function Tabs() {
  return (
    <div className="justify-between flex-1 flex flex-col">
      <div className="flex flex-col gap-4">
        <div className="font-medium text-lg text-white">
          <div className="flex p-2 gap-6 items-center">
            <HomeIcon className="h-5 w-5" />
            <div> Home </div>
          </div>
        </div>

        <div className="font-bold bg-white text-[#7574C7] rounded-md text-lg">
          <div className="flex p-2 gap-6 items-center">
            <WalletIcon className="h-5 w-5" />

            <div> Wallets </div>
          </div>
        </div>

        <div className="font-medium text-lg">
          <div className="flex p-2 gap-6 items-center">
            <BanknotesIcon className="h-5 w-5" />
            <div> Transactions </div>
          </div>
        </div>

        <div className="font-medium text-lg">
          <div className="flex p-2 gap-6 items-center">
            <UserIcon className="h-5 w-5" />
            <div> Profile </div>
          </div>
        </div>
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
