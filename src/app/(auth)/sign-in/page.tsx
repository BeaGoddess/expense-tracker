import FormSignIn from "@/components/Forms/FormSignIn";
import { Box, Link, Text } from "@chakra-ui/react";

export default function SignInPage() {
  return (
    <Box
      bg="white"
      roundedBottom={{ md: "none", base: "xl" }}
      roundedRight={{ md: "xl" }}
      color="black"
      p={{ base: 8, md: 16 }}
      w="full"
      maxW={{ md: "50%" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
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
    </Box>
  );
}
