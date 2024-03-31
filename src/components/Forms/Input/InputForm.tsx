import {
  FormControl,
  FormLabel,
  Input,
  InputProps,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

interface CustomInputProps extends InputProps {
  name: string;
  label: string;
  placeholder?: string;
}

export default function InputForm({
  name,
  label,
  type,
  placeholder,
  ...props
}: CustomInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const validatePositiveNumber = (value: string) => {
    if (value && type === "number" && parseFloat(value) < 0) {
      return "Please enter a positive number";
    }
    return true;
  };

  const validation =
    type === "number" ? { validate: validatePositiveNumber } : {};

  let errorMessage: string | undefined;
  if (errors[name]) {
    errorMessage = errors[name]?.message as string | undefined;
  }

  return (
    <FormControl isInvalid={!!errorMessage} isRequired>
      <FormLabel
        textTransform={"uppercase"}
        fontSize={"sm"}
        fontWeight={"semibold"}
      >
        {label}
      </FormLabel>
      <Input
        {...register(name, { required: true, ...validation })}
        type={type}
        placeholder={placeholder || name}
        variant="outline"
        bg={"rgba(192, 186, 255, 0.15)"}
        borderColor={"#7574C7"}
        color={"black"}
        focusBorderColor={"#7574C7"}
        _placeholder={{ color: "gray.400" }}
        {...props}
      />

      {errorMessage && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}
