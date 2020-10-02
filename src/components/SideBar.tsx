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
import React from "react";

interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <Box
      background="#fafbfc"
      maxW="300px"
      w="20%"
      h="100vh"
      top={0}
      position="fixed"
      padding="10px"
      zIndex={2}
    >
      <Box mb="40px" w="85%" mx="auto">
        <Heading size="lg">Wabbit</Heading>
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