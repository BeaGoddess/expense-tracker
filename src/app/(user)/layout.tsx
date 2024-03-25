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
      minH="100vh"
      minW="fit-content"
      color="black"
      flexDirection={{ base: "column", sm: "row" }}
    >
      <NavBar />
      <div className="bg-slate-100 flex-1 flex flex-col overflow-y-auto sm:pt-0 pt-[75px]">
        {children}
      </div>
    </Flex>
  );
}
