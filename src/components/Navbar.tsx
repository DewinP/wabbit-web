import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  console.log(data?.me?.avatar);
  //data is loading
  if (fetching) {
    //user not logged in
  } else if (!data?.me) {
    //user is logged in
    body = (
      <>
        <NextLink href="/login">
          <Link mr={3}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex align="center">
        <Menu>
          <MenuButton as={Button} variant="link" rightIcon="arrow-down">
            <Avatar mr={1} size="xs" src={data.me.avatar} />
            {data.me.username}
          </MenuButton>
          <MenuList>
            <MenuGroup title="Profile">
              <MenuItem>My Profile</MenuItem>
              <MenuItem>User Settings </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem onClick={() => logout()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    );
  }
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1}
      borderBottom="1px solid #bdbdc2"
      p="5px"
      w="100%"
      bg="white"
      ml="auto"
    >
      <Flex align="center">
        <InputGroup w="50%">
          <InputLeftElement
            children={<Icon name="search" color="gray.300" />}
          />
          <Input placeholder="Find a community or post" variant="unstyled" />
        </InputGroup>
        <Box ml={"auto"} mr="10px">
          {body}
        </Box>
      </Flex>
    </Box>
  );
};
