'use client';

import {
  Button,
  Box,
  Container,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import CustomModal from "../Modal/CustomModal";

interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
}

export default function TitleUser({ value }: TitleUserProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

          <Button
            bg="white"
            color="black"
            w={{ base: "100px", sm: "150px" }}
            fontSize="sm"
            _focus={{
              outline: "none",
            }}
            cursor="pointer"
            onClick={onOpen}
          >
            Create
          </Button>

          {value === "wallets" && <CustomModal isOpen={isOpen} onClose={onClose} />}
        </Flex>
      </Container>
    </Box>
  );
}
