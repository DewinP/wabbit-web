import { Box } from "@chakra-ui/core";
import React from "react";

export type WrapperVariant = "small" | "regular" | "body";
interface WrapperProps {
  variant?: WrapperVariant;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  variant = "regular",
}) => {
  return (
    <Box
      maxW={variant === "regular" ? "800px" : "400px"}
      w="80%"
      mt="8"
      mx="auto"
    >
      {children}
    </Box>
  );
};
