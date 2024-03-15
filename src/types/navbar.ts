import {
  HomeIcon,
  WalletIcon,
  BanknotesIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export interface Item {
  name: string;
  href: string;
  icon:
    | typeof HomeIcon
    | typeof WalletIcon
    | typeof BanknotesIcon
    | typeof UserIcon;
}

export const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Wallets", href: "/wallets", icon: WalletIcon },
  { name: "Transactions", href: "/transactions", icon: BanknotesIcon },
  { name: "Profile", href: "/profile", icon: UserIcon },
];
