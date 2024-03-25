import FormSignIn from "@/components/Forms/FormSignIn";
import { Flex, Link, Text } from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Flex
      bg="white"
      roundedBottom={"xl"}
      roundedBottomLeft={{ base: "xl", md: "none" }}
      roundedTopRight={{ md: "xl" }}
      color="black"
      p={{ base: 8, md: 16 }}
      w="full"
      maxW={{ md: "50%" }}
      direction="column"
      justify="center"
      align="center"
    >
      <Text fontWeight="bold" fontSize="2xl" mb={6}>
        Sign in
      </Text>
      <FormSignIn />

      <Text color="gray.500" fontSize="sm" mt={1}>
        <Text as="span">Don’t have an account? </Text>
        <Link
          href="./sign-up"
          color="#7574C7"
          textDecoration="underline"
          fontWeight="semibold"
        >
          Sign up
        </Link>
      </Text>
    </Flex>
  );
}
