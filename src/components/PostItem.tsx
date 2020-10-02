import { Box, Flex, Image, Text } from "@chakra-ui/core";
import React from "react";
import { Post } from "../generated/graphql";
import { timeSinceCreated } from "../utils/timeSinceCreated";

interface PostItemProps {
  postInfo: Post;
}

export const PostItem: React.FC<PostItemProps> = ({ postInfo }) => {
  const timeSincePost = timeSinceCreated(postInfo.createdAt);
  return (
    <Flex h="100px" border="1px solid #bdbdc2" align="center">
      <Image src="https://picsum.photos/125/75" p="10px" borderRadius="12px" />
      <Flex justify="center" direction="column">
        <Text fontSize="18px" fontWeight="bold">
          {postInfo.title}
        </Text>
        <Flex>
          <Text fontSize="12px" fontWeight="bold">
            {timeSincePost} by
          </Text>
        </Flex>
      </Flex>
      <Flex
        h="100%"
        w="100px"
        ml="auto"
        borderLeft="1px solid #bdbdc2"
        align="center"
        justify="center"
      >
        {postInfo.votes}
      </Flex>
    </Flex>
  );
};
