import { IconType } from "react-icons";
import { FaShoppingBag, FaTwitch, FaMoneyBill } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdAttachMoney } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { SiRiotgames } from "react-icons/si";

export type IconNames =
  | "FaShoppingBag"
  | "HiShoppingCart"
  | "MdAttachMoney"
  | "FaTwitch"
  | "GiClothes"
  | "FaMoneyBill"
  | "SiRiotgames"
  | string;

export const iconsCategory: Record<IconNames, IconType> = {
  FaShoppingBag: FaShoppingBag,
  HiShoppingCart: HiShoppingCart,
  MdAttachMoney: MdAttachMoney,
  GiClothes: GiClothes,
  FaTwitch: FaTwitch,
  FaMoneyBill: FaMoneyBill,
  SiRiotgames: SiRiotgames,
};

export function getIconComponent(iconName: IconNames | null): IconType {
  return iconName ? iconsCategory[iconName] : RiShoppingCart2Fill;
}
