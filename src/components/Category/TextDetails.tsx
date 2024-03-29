"use client";

import { Box, Stack, Text, Flex } from "@chakra-ui/react";
import Avatar from "./Avatar";

interface TextDetailsProps {
  name: string;
  icon: string | null;
  color: string;
  date: string;
}

export default function TextDetails({
  name,
  date,
  icon,
  color,
}: TextDetailsProps) {
  const parsedDate = new Date(date);
  const formattedDate = parsedDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Stack direction={"row"} spacing={3} align={"center"}>
      <Avatar icon={icon} color={color} name={name} />

      <Flex direction={"column"}>
        <Text>{name}</Text>
        <Text color={"gray.400"}>{formattedDate}</Text>
      </Flex>
    </Stack>
  );
}
