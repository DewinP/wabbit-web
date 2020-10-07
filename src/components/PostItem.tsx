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
import { Post, useGetCommentsByPostIdQuery } from "../generated/graphql";
import { timeSinceCreated } from "../utils/timeSinceCreated";

import NextLink from "next/link";
import { PostButtons } from "./PostButtons";

interface PostItemProps {
  postInfo: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ postInfo }) => {
  const timeSincePost = timeSinceCreated(postInfo.createdAt);
  const [{ data }] = useGetCommentsByPostIdQuery({
    variables: { postId: postInfo.id },
  });
  let commentsLength = data?.getCommentsByPostId.length;
  return (
    <Flex align="center" m="1px" borderBottom="1px solid #bdbdc2">
      <Flex justify="center" direction="column" ml="30px" mt="25px">
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
            <Text fontSize="12px" color="#f08a5d" fontWeight="medium">
              {postInfo.creator.username}
            </Text>
          </Button>
        </Flex>
        <PostButtons commentsAmmount={commentsLength} />
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
          <Icon name="chevron-up" size="2em" />
        </Button>
        <Text>{postInfo.votes}</Text>
        <Button size="sm" variant="ghost">
          <Icon name="chevron-down" size="2em" />
        </Button>
      </Flex>
    </Flex>
  );
};
