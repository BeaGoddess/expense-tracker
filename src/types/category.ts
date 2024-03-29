import { IconType } from "react-icons";
import { FaShoppingBag } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";
import { RiShoppingCart2Fill } from "react-icons/ri";

export type IconNames = "FaShoppingBag" | "HiShoppingCart" | string;

export const iconsCategory: Record<IconNames, IconType> = {
  FaShoppingBag: FaShoppingBag,
  HiShoppingCart: HiShoppingCart,
};

export function getIconComponent(iconName: IconNames | null): IconType {
  return iconName ? iconsCategory[iconName] : RiShoppingCart2Fill;
}
