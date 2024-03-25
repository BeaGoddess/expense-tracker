import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Item } from "@/types/navbar";
import { Link, Text, Flex } from "@chakra-ui/react";

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
      as={NextLink}
      href={item.href}
      fontSize={"lg"}
      fontWeight={"medium"}
      _hover={{ bgColor: "rgba(117 116 199 / 0.75)" }}
      rounded={"md"}
      transition={"background-color 0.3s"}
      {...(pathname === item.href && {
        color: "#7574C7",
        bgColor: "white",
        fontWeight: "bold",
        _hover: { bgColor: "white" },
      })}
    >
      <Flex p={2} gap={6} align={"center"}>
        <LinkIcon className="h-5 w-5 my-1" />

        <Text display={capsule ? "none" : { base: "none", sm: "block" }}>
          {item.name}
        </Text>
      </Flex>
    </Link>
  );
}
