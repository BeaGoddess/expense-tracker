"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Flex, Box, Text } from "@chakra-ui/react";
interface TitleBarProps {
  setCapsule: React.Dispatch<React.SetStateAction<boolean>>;
  capsule: boolean;
}

export default function TitleBar({ setCapsule, capsule }: TitleBarProps) {
  return (
    <Flex
      direction="row"
      mb={{ base: 0, sm: 12 }}
      mt={{ base: 0, sm: 8 }}
      alignItems={{ base: "center", sm: "baseline" }}
      justifyContent="space-between"
      mr={{ base: 4, sm: 0 }}
    >
      <Box
        fontWeight="bold"
        fontSize={{ base: "lg", sm: "4xl" }}
        lineHeight={{ base: "normal", sm: "tight" }}
        color="white"
        borderRight={{ base: "1px solid white", sm: "none" }}
        pr={4}
        display={{ sm: capsule ? "none" : "block" }}
      >
        <Text>
          <Text color="#7574C7" as="span">
            E
          </Text>
          xpense
          <br />
          <Text color="#7574C7" as="span">
            T
          </Text>
          racker
        </Text>
      </Box>

      <Box
        cursor={"pointer"}
        display={{ base: "none", sm: "block" }}
        onClick={() => {
          setCapsule(!capsule);
        }}
      >
        <Bars3Icon className="h-8 w-8 text-white stroke-[3px] m-auto" />
      </Box>
    </Flex>
  );
}
