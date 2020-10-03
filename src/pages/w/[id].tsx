import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core";
import { useRouter } from "next/router";
import React from "react";
import { Wrapper } from "../../components/Wrapper";
import { usePostQuery } from "../../generated/graphql";
import { timeSinceCreated } from "../../utils/timeSinceCreated";

const Post = ({}) => {
  const router = useRouter();
  const intId =
    typeof router.query.id === "string" ? parseInt(router.query.id) : -1;
  const [{ data, fetching, error }] = usePostQuery({
    pause: intId === -1,
    variables: {
      id: intId,
    },
  });

  const postInfo = data?.post;
  const TSC = timeSinceCreated(postInfo?.createdAt);

  if (fetching) {
    return <Box>...Loading</Box>;
  }

  if (error) {
    return <Box>Error</Box>;
  }

  return (
    <>
      <Button variant="ghost" size="xs" onClick={() => router.back()}>
       < GO BACK
      </Button>
      <Flex mb="10px">
        <Text mr={1}>Posted by</Text>
        <Button mr={1} variant="link">
          u/{postInfo?.creator.username}
        </Button>
        <Text>{TSC}</Text>
      </Flex>

      <Heading mb="20px" size="lg">
        {postInfo?.title}
      </Heading>

      <Text>{postInfo?.body}</Text>
    </>
  );
};

export default Post;
