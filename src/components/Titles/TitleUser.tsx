"use client";

import {
  Button,
  Box,
  Container,
  Flex,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import ModalWallet from "../Modal/ModalWallet";
import ModalTransaction from "../Modal/ModalTransaction";

interface TitleUserProps {
  value: "wallets" | "transactions" | "profile";
  onCreate: () => void;
}

export default function TitleUser({ value, onCreate }: TitleUserProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderModal = () => {
    if (value === "wallets") {
      return (
        <ModalWallet
          isOpen={isOpen}
          onClose={onClose}
          onCreate={onCreate}
        />
      );
    }

    if (value === "transactions") {
      return (
        <ModalTransaction
          isOpen={isOpen}
          onClose={onClose}
          onCreate={onCreate}
        />
      );
    }

    return null;
  };

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

          {renderModal()}
        </Flex>
      </Container>
    </Box>
  );
}
