import {
  Box,
  Heading,
  Text,
  Divider,
  List,
  ListIcon,
  ListItem,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Avatar,
  PseudoBox,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  const router = useRouter();
  return (
    <Box
      background="#fafbfc"
      maxW="300px"
      mr="auto"
      w="20%"
      h="100vh"
      padding="10px"
      position="sticky"
      top={0}
    >
      <Box mb="40px" w="85%" mx="auto">
        <Button variant="ghost">
          <Heading onClick={() => router.push("/")} size="lg">
            Wabbit
          </Heading>
        </Button>
      </Box>
      <Box w="85%" mx="auto" mb="30px">
        <Heading size="sm"> FAVORITES</Heading>
        <Divider />
        <List spacing={5}>
          <ListItem>
            <Flex justify="space-between">
              <Button variant="link">Movies</Button>
              <Icon name="star" focusable size="15px" />
            </Flex>
          </ListItem>
        </List>
      </Box>
      <Box w="85%" mx="auto">
        <Heading size="sm"> SUBSCRIPTIONS</Heading>
        <Divider />
        <List spacing={5}>
          <ListItem>
            <Flex justify="space-between">
              <Button variant="link">Gaming</Button>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex justify="space-between">
              <Button variant="link">Programming</Button>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex justify="space-between">
              <Button variant="link">Movies</Button>
              <Icon name="star" focusable size="15px" />
            </Flex>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
