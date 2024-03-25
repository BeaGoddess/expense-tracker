import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import Button from "../Button/Button";

interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
}

export default function TitleUser({ value }: TitleUserProps) {
  return (
    <Box bg={"#C0BAFF"} py={{ sm: 4, base: 2 }}>
      <Container maxW="container.xl" px={"24px"}>
        <Flex>
          <Box
            textColor={"#7574C7"}
            fontWeight={600}
            fontSize={{ base: "24px", sm: "36px" }}
            lineHeight={{ base: "32px", sm: "40px" }}
            textTransform={"capitalize"}
          >
            {value}
          </Box>
          <Spacer />
          <Button variant={"create"} text="Create" />
        </Flex>
      </Container>
    </Box>
  );
}
