import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import FormWallet from "../Forms/FormWallet";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  name: string;
  balance: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"lg"} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader pb={2}>
          <Text borderBottom={"1px"} pb={2} borderColor={"gray.200"}>
            Creating a new wallet
          </Text>
        </ModalHeader>
        <ModalCloseButton
          color={"gray"}
          _hover={{ bg: "transparent", color: "black" }}
          mt={2}
        />

        <FormWallet onClose={onClose} />
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
