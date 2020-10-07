import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { CommentReplyBox } from "../../components/CommentReplyBox";
import { PostButtons } from "../../components/PostButtons";
import { SingleComment } from "../../components/SingleComment";
import {
  useGetCommentsByPostIdQuery,
  usePostQuery,
} from "../../generated/graphql";
import { timeSinceCreated } from "../../utils/timeSinceCreated";

const Post = ({}) => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;

  const postInfo = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  })[0];

  const commentInfo = useGetCommentsByPostIdQuery({
    variables: { postId: intId },
  })[0];

  let commentsLength = commentInfo.data?.getCommentsByPostId.length;
  const TSC = timeSinceCreated(postInfo.data?.post?.createdAt);

  if (postInfo.fetching) {
    return <Box>...Loading</Box>;
  }

  if (postInfo.error) {
    return <Box>Error</Box>;
  }

  return (
    <Box mb="50px">
      <Button
        variant="ghost"
        leftIcon="arrow-back"
        onClick={() => router.back()}
        color="tomato"
        size="xs"
      >
        GO BACK
      </Button>
      <Flex mb="10px">
        <Text fontSize="xs" mr={1}>
          Posted by
        </Text>
        <Button mr={1} variant="link" size="xs">
          u/{postInfo.data?.post.creator.username}
        </Button>
        <Text fontSize="xs">{TSC}</Text>
      </Flex>

      <Flex>
        <Heading mb="20px" size="lg">
          {postInfo?.data?.post.title}
        </Heading>
      </Flex>

      <Text>{postInfo?.data?.post.body}</Text>

      <PostButtons commentsAmmount={commentsLength} />
      <CommentReplyBox variant="comment" postId={intId} />
      <Box mb="25px" />

      {commentInfo.data?.getCommentsByPostId.map((c) => {
        console.log("helo");
        return (
          <SingleComment key={c.id} creatorInfo={c.creator} commentInfo={c} />
        );
      })}

      {commentsLength === 0 ? (
        <Flex direction="column" align="center">
          <Heading mb="40px">NO COMMENTS YET</Heading>
          <Text fontSize="25px" color="grey">
            Be the first one to comment
          </Text>
        </Flex>
      ) : null}
    </Box>
  );
};

export default Post;
