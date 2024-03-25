import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";

export default function WalletsNotFound() {
  return (
    <Flex
      flex={1}
      direction={"column"}
      justify={"center"}
      align={"center"}
      color={"black"}
    >
      <Image
        src={"/user/wallets-not-found.png"}
        width={350}
        height={350}
        alt="Not found"
      />

      <Text fontWeight={"bold"} fontSize={"xl"} mb={2}>
        No Wallets Found
      </Text>

      <Text lineHeight={7} width={"350px"} textAlign={"center"}>
        It seems you haven&apos;t created a wallet yet... <Box as="br" /> Start
        to create one.
      </Text>
    </Flex>
  );
}
