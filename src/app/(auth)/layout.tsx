import AppDetails from "@/components/AppDetails";
import { Flex } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      minH="100vh"
      bgGradient="linear(to-r, #8E8CDA, #C0BAFF)"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        w="full"
        flexDir={{ base: "column", md: "row" }}
        maxW={{ md: "900px" }}
        m={2}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          pauseOnFocusLoss={false}
          limit={5}
        />
        <AppDetails />
        {children}
      </Flex>
    </Flex>
  );
}
