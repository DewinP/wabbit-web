import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
} from "@chakra-ui/core";
import React from "react";
import { Post } from "../generated/graphql";
import { timeSinceCreated } from "../utils/timeSinceCreated";

import NextLink from "next/link";

interface PostItemProps {
  postInfo: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ postInfo }) => {
  const timeSincePost = timeSinceCreated(postInfo.createdAt);
  return (
    <Flex h="100px" align="center" m="1px" borderBottom="1px solid #bdbdc2">
      <Flex justify="center" direction="column" ml="30px">
        <NextLink href="/w/[id]" as={`/w/${postInfo.id}`}>
          <Link>
            <Text fontSize="18px" fontWeight="bold">
              {postInfo.title}
            </Text>
          </Link>
        </NextLink>

        <Flex direction="row">
          <Text fontSize="12px" fontWeight="light" mr={1}>
            {timeSincePost} by
          </Text>
          <Button variant="link">
            <Avatar size="2xs" src={postInfo.creator.avatar} mr={1} />
            <Text fontSize="12px" color="#f08a5d" fontWeight="bold">
              {postInfo.creator.username}
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        w="100px"
        ml="auto"
        borderLeft="1px solid #bdbdc2"
        align="center"
        justify="center"
        direction="column"
      >
        <Button size="sm" variant="ghost">
          <Icon name="chevron-up" size="2em" color="#00adb5" />
        </Button>
        <Text>{postInfo.votes}</Text>
        <Button size="sm" variant="ghost">
          <Icon name="chevron-down" size="2em" color="#f38181" />
        </Button>
      </Flex>
    </Flex>
  );
};
