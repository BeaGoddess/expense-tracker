import { cn } from "@/lib/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Item } from "@/types/navbar";


export default function ItemLink({ item }: { item: Item }) {
  const pathname = usePathname();
  const LinkIcon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "text-lg font-medium text-white hover:bg-[#7574C7]/75 rounded-md duration-500",
        {
          "text-[#7574C7] bg-white font-bold hover:bg-white":
            pathname === item.href,
        }
      )}
    >
      <div className="flex p-2 gap-6 items-center">
        <LinkIcon className="h-5 w-5" />
        <p className="hidden md:block">{item.name}</p>
      </div>
    </Link>
  );
}
