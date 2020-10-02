import React from "react";
import { Wrapper } from "./Wrapper";

interface BodyProps {}

export const Body: React.FC<BodyProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
