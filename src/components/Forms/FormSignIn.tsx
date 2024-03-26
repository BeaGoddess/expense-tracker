"use client";
import { toast } from "react-toastify";
import { useSignIn as signin } from "@/hooks/auth";
import { Input, Button, Box, FormControl } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
interface FormValues {
  email: string;
  password: string;
}

export default function FormSignIn() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const response = await signin(data);

    if (response?.error) {
      toast.error(response?.error);
    }
  };

  return (
    <Box as="form" width="full" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <Input
          {...register("email", { required: true })}
          type="email"
          placeholder="Email"
          p={2}
          w="full"
          focusBorderColor="transparent"
          variant="unstyled"
          bg="rgba(174, 169, 242, 0.2)"
          rounded="lg"
          mb={4}
          color="gray.500"
          fontSize="sm"
          pl={4}
        />
      </FormControl>

      <FormControl isRequired>
        <Input
          {...register("password", { required: true })}
          type="password"
          placeholder="Password"
          p={2}
          w="full"
          focusBorderColor="transparent"
          variant="unstyled"
          bg="rgba(174, 169, 242, 0.2)"
          rounded="lg"
          mb={4}
          color="gray.500"
          fontSize="sm"
          pl={4}
        />
      </FormControl>

      <Button
        isLoading={isSubmitting}
        type="submit"
        disabled={isSubmitting}
        bg="#7574C7"
        p={2}
        w="full"
        mb={4}
        color="white"
        rounded="3xl"
        fontSize="sm"
        fontWeight="bold"
        textAlign="center"
        _hover={{
          bg: "#AEA9F2",
        }}
      >
        {isSubmitting ? "Logging in..." : "Login"}
      </Button>
    </Box>
  );
}
