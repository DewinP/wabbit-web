import { Box, Flex } from "@chakra-ui/core";
import React from "react";
import { Body } from "./Body";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";
import { Wrapper, WrapperVariant } from "./Wrapper";

interface LayoutProps {
  Component: any;
  pageProps: any;
}

export const Layout: React.FC<LayoutProps> = ({ Component, pageProps }) => {
  return (
    <Flex direction="row">
      <SideBar />
      <Flex direction="column" w="100%">
        <Navbar />
        <Body>
          <Component {...pageProps} />
        </Body>
      </Flex>
    </Flex>
  );
};
