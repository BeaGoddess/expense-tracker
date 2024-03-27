"use client";

import { toast } from "react-toastify";
import { Input, Button, Box, FormControl } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignUp as signup } from "@/hooks/useAuth";

interface FormValues {
  email: string;
  password: string;
  name: string;
  username: string;
  repeatPassword: string;
}

export default function FormSignUp() {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const validatePw = (pw: string, repeatPw: string) => {
    return pw === repeatPw;
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (validatePw(data.password, data.repeatPassword)) {
      const response = await signup(data);

      if (response?.error) {
        toast.error(response?.error);
      }
    } else {
      toast.error("Password doesn't match.");
    }
  };

  return (
    <Box as="form" width="full" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isRequired>
        <Input
          {...register("name", { required: true })}
          type="text"
          placeholder="Name"
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
          {...register("username", { required: true })}
          type="text"
          placeholder="Username"
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

      <FormControl isRequired>
        <Input
          {...register("repeatPassword", { required: true })}
          type="password"
          placeholder="Repeat password"
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
        variant="auth"
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
        {isSubmitting ? "Creating..." : "Create an account"}
      </Button>
    </Box>
  );
}
