"use client";

import { IconNames, getIconComponent } from "@/types/category";
import { Tooltip, Flex } from "@chakra-ui/react";

interface AvatarProps {
  icon: IconNames | null;
  color: string;
  name: string;
}

export default function Avatar({ icon, color, name }: AvatarProps) {
  const IconComponent = getIconComponent(icon);

  return (
    <Tooltip label={name} hasArrow openDelay={500}>
      <Flex
        bg={color}
        rounded={"full"}
        h={10}
        w={10}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {IconComponent && <IconComponent size={20} color="white" />}
      </Flex>
    </Tooltip>
  );
}
