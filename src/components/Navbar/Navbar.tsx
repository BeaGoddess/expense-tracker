"use client";

import TitleBar from "./TitleNavbar";
import Tabs from "./Tabs";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";

export default function NavBar() {
  const [capsule, setCapsule] = useState(false);

  return (
    <Flex
      w={{ base: "full", sm: "250px" }}
      direction={{ base: "row", sm: "column" }}
      position={{ base: "fixed", sm: "static" }}
      h={{ base: "70px", sm: "calc(100dvh)" }}
      overflow={"hidden"}
      top={0}
      p={3}
      bgGradient="linear(to-b, #8E8CDA, #C0BAFF)"
      color="white"
      zIndex={10}
      {...(capsule && { w: "60px" })}
    >
      <TitleBar setCapsule={setCapsule} capsule={capsule} />
      <Tabs capsule={capsule} />
    </Flex>
  );
}
