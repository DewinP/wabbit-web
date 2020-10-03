import { Box } from "@chakra-ui/core";
import React from "react";

export type WrapperVariant = "small" | "regular";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "80%" : "400px"}
      w="80%"
      mt="8"
      mx="auto"
    >
      {children}
    </Box>
  );
};
