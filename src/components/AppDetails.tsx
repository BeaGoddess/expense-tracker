import { Box, Text } from "@chakra-ui/react";

export default function AppDetails() {
  return (
    <Box
      bg="#7574C7"
      roundedTop="xl"
      roundedTopRight={{ base: "xl", md: "none" }}
      p={{ base: 6, md: 16 }}
      roundedBottomLeft={{ base: "none", md: "xl" }}
      w={{ md: "full" }}
      maxW={{ md: "50%" }}
    >
      <Box
        my={5}
        fontSize={{ base: "32px", md: "50px" }}
        fontWeight="bold"
        lineHeight="tight"
        textAlign="left"
        pt={{ md: 10 }}
      >
        <Text as="span" color="#AEA9F2">
          E
        </Text>
        xpense
        <Text as={"span"} display={{ base: "inline", md: "block" }}>
          {" "}
        </Text>
        <Text as="span" color="#AEA9F2">
          T
        </Text>
        racker
      </Box>

      <Box
        my={5}
        fontSize={{ base: "sm", md: "base" }}
        textAlign="justify"
        fontWeight="light"
        color="gray.100"
        pb={{ md: 10 }}
      >
        Welcome! This is a personal project created to easily manage your
        finances by tracking your expenses. Sign in to start taking control of
        your financial journey.
      </Box>
    </Box>
  );
}

/*

    <div className="bg-[#7574C7] rounded-t-xl p-6 md:rounded-l-xl md:rounded-tr-none md:p-16 md:w-full md:max-w-[50%]">
      <div className="my-5 md:text-[50px] font-bold text-[32px] leading-tight md:pt-10">
        <span className="text-[#AEA9F2]">E</span>xpense{" "}
        <span className="text-[#AEA9F2]">T</span>racker
      </div>

      <div className="text-justify my-5 md:text-base text-sm font-light md:pb-10">
        Welcome! This is a personal project created to easily manage your
        finances by tracking your expenses. Sign in to start taking control of
        your financial journey.
      </div>
    </div>

    */
