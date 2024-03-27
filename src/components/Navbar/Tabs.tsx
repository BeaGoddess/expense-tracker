"use client";

import { useSignOut as signout } from "@/hooks/useAuth";
import { links as navLinks } from "@/types/navbar";
import ItemLink from "./ItemsTab";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { Flex, Box, Text } from "@chakra-ui/react";

interface TabsProps {
  capsule: boolean;
}

export default function Tabs({ capsule }: TabsProps) {
  return (
    <Flex
      justify={"space-between"}
      flex={1}
      direction={{ base: "row", sm: "column" }}
    >
      <Flex gap={4} direction={{ base: "row", sm: "column" }}>
        {navLinks.map((link) => {
          return <ItemLink key={link.name} item={link} capsule={capsule} />;
        })}
      </Flex>

      <Box
        fontWeight="bold"
        fontSize="lg"
        color="#7574C7"
        cursor="pointer"
        borderRadius={"md"}
        transitionDuration={"700ms"}
        _hover={{ bgColor: "white" }}
        onClick={() => signout()}
      >
        <Flex p={2} align={"center"} gap={6}>
          <ArrowRightCircleIcon className="h-5 w-5 my-1" />
          <Text display={{ base: "none", sm: capsule ? "none" : "block" }}>
            Sign out
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
