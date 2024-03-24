import FormSignUp from "@/components/Forms/FormSignUp";
import { Text, Link, Flex } from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Flex
      bg="white"
      roundedBottom={{ base: "xl", md: "none" }}
      roundedRight={{ md: "xl" }}
      color="black"
      p={{ base: 8, md: 16 }}
      w="full"
      maxW={{ md: "50%" }}
      direction="column"
      justify="center"
      align="center"
    >
      <Text fontWeight="bold" fontSize="2xl" mb={6}>
        Sign up
      </Text>

      <FormSignUp />

      <Text color="gray.500" fontSize="sm" mt={1}>
        <Text as="span">Already have an account? </Text>
        <Link
          href="./sign-in"
          color="#7574C7"
          textDecoration="underline"
          fontWeight="semibold"
        >
          Sign in
        </Link>
      </Text>
    </Flex>
  );
}
