import { Link as ChakraLink, Box } from "@chakra-ui/core";
import React from "react";
import { PostItem } from "../components/PostItem";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();

  return (
    <Box border="1px solid #bdbdc2">
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.reverse().map((p) => {
          return <PostItem key={p.id} postInfo={p} />;
        })
      )}
    </Box>
  );
};

export default Index;
