"use client";
import {
  Input,
  FormControl,
  FormLabel,
  ModalBody,
  Box,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useWallets } from "@/hooks/useWallets";

interface FormValues {
  name: string;
  balance: number;
}

interface FormWalletProps {
  onClose: () => void;
}

export default function FormWallet({ onClose }: FormWalletProps) {
  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
  } = useForm<FormValues>();

  const { createWallet } = useWallets();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await createWallet(data);

    if (response?.success) {
      onClose();
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <FormControl isRequired mb={4}>
          <FormLabel
            textTransform={"uppercase"}
            fontSize={"sm"}
            fontWeight={"semibold"}
          >
            Name
          </FormLabel>
          <Input
            {...register("name", { required: true })}
            type="text"
            placeholder="Name"
            variant="outline"
            bg={"rgba(192, 186, 255, 0.15)"}
            borderColor={"#7574C7"}
            color={"black"}
            focusBorderColor={"#7574C7"}
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel
            textTransform={"uppercase"}
            fontSize={"sm"}
            fontWeight={"semibold"}
          >
            Balance
          </FormLabel>

          <Input
            {...register("balance", { required: true })}
            type="number"
            step="0.01"
            placeholder="Balance"
            variant="outline"
            bg={"rgba(192, 186, 255, 0.15)"}
            borderColor={"#7574C7"}
            color={"black"}
            focusBorderColor={"#7574C7"}
            _placeholder={{ color: "gray.400" }}
          />
        </FormControl>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="ghost"
          fontSize="sm"
          rounded="3xl"
          w={"150px"}
          color="#7574C7"
          onClick={onClose}
          mr={3}
        >
          Cancel
        </Button>
        <Button
          isLoading={isSubmitting}
          disabled={isSubmitting}
          bg="#7574C7"
          w={"150px"}
          color="white"
          rounded="3xl"
          fontSize="sm"
          fontWeight="bold"
          textAlign="center"
          _hover={{
            bg: "#AEA9F2",
          }}
          type="submit"
        >
          Create
        </Button>
      </ModalFooter>
    </Box>
  );
}
