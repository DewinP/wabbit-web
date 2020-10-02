import React from "react";
import { Body } from "./Body";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  variant?: WrapperVariant;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <SideBar />

      <Body>{children}</Body>
    </>
  );
};
