import "@/assets/index.css";
import NavBar from "@/components/Navbar/Navbar";
import { Flex } from "@chakra-ui/react";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      minH={"calc(100dvh)"}
      minW="fit-content"
      color="black"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <NavBar />
      <div className="bg-slate-100 flex-1 flex flex-col min-h-[calc(100dvh)] sm:pt-0 pt-[76px]">
        {children}
      </div>
    </Flex>
  );
}
