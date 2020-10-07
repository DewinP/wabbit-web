import { Button, Text, Flex, Avatar } from "@chakra-ui/core";
import React from "react";
import { Comment, User } from "../generated/graphql";
import { timeSinceCreated } from "../utils/timeSinceCreated";
import { timeSinceUpdated } from "../utils/timeSinceUpdated";
import { PostButtons } from "./PostButtons";

interface SingleCommentProps {
  creatorInfo: Pick<User, "id" | "username" | "avatar">;
  commentInfo: Pick<
    Comment,
    "id" | "createdAt" | "updatedAt" | "body" | "wasUpdated" | "votes"
  >;
}

export const SingleComment: React.FC<SingleCommentProps> = ({
  creatorInfo,
  commentInfo,
}) => {
  const TSC = timeSinceCreated(commentInfo.createdAt);
  let TSU = timeSinceUpdated(commentInfo.updatedAt);
  return (
    <Flex minH="100px">
      <Avatar size="sm" src={creatorInfo.avatar} mr={1} />
      <Flex direction="column">
        <Flex direction="row">
          <Flex align="center">
            <Button variant="link" mr={1}>
              <Text fontSize="14px" color="#f08a5d" fontWeight="medium">
                {creatorInfo.username}
              </Text>
            </Button>
            <Text fontSize="12px" fontWeight="light">
              {TSC}
            </Text>
            {commentInfo.wasUpdated ? (
              <Text as="i" fontSize="12px" ml={1} fontWeight="light">
                - edited {TSU}
              </Text>
            ) : null}
          </Flex>
        </Flex>

        <Text ml={3} fontWeight="light">
          {commentInfo.body}
        </Text>
        <PostButtons commentsAmmount={0} />
      </Flex>
    </Flex>
  );
};
