import { Box, Button, Flex, Link } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;
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
      <Flex>
        <Box mr={3}>{data.me.username}</Box>
        <Button
          variant="link"
          isLoading={logoutFetching}
          onClick={() => logout()}
        >
          logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex p={3} bg="tomato">
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
