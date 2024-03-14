import TitleBar from "./TitleNavbar";
import {
  HomeIcon,
  WalletIcon,
  BanknotesIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export default function NavBar() {
  return (
    <div className="w-[280px] text-white h-full bg-gradient-to-b from-[#8E8CDA] to-[#C0BAFF] p-6 ">
      <TitleBar />
      <div className="my-4 font-medium text-lg text-white">
        <div className="flex p-2 gap-6 items-center">
          <HomeIcon className="h-5 w-5" />
          <div> Home </div>
        </div>
      </div>

      <div className="my-4 font-bold bg-white text-[#7574C7] rounded-md text-lg">
        <div className="flex p-2 gap-6 items-center">
          <WalletIcon className="h-5 w-5" />

          <div> Wallets </div>
        </div>
      </div>

      <div className="my-4 font-medium text-lg">
        <div className="flex p-2 gap-6 items-center">
          <BanknotesIcon className="h-5 w-5" />
          <div> Transactions </div>
        </div>
      </div>

      <div className="my-4 font-medium text-lg">
        <div className="flex p-2 gap-6 items-center">
          <UserIcon className="h-5 w-5" />
          <div> Profile </div>
        </div>
      </div>
    </div>
  );
}
