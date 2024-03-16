import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Item } from "@/types/navbar";

export default function ItemLink({
  item,
  capsule,
}: {
  item: Item;
  capsule: boolean;
}) {
  const pathname = usePathname();
  const LinkIcon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "text-lg font-medium text-white hover:bg-[#7574C7]/75 rounded-md transition-colors",
        {
          "text-[#7574C7] bg-white font-bold hover:bg-white":
            pathname === item.href,
        }
      )}
    >
      <div className="flex p-2 gap-6 items-center">
        <LinkIcon className="h-5 w-5 my-1" />
        <p
          className={cn(
            { "hidden md:block": capsule === false },
            { "hidden md:hidden": capsule === true }
          )}
        >
          {item.name}
        </p>
      </div>
    </Link>
  );
}
