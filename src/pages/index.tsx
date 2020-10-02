import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
  Box,
} from "@chakra-ui/core";
import React from "react";
import { PostItem } from "../components/PostItem";
import { Wrapper } from "../components/Wrapper";
import { usePostsQuery } from "../generated/graphql";

const Index = () => {
  const [{ data }] = usePostsQuery();
  return (
    <Wrapper>
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map((p) => {
          return <PostItem key={p.id} postInfo={p} />;
        })
      )}
    </Wrapper>
  );
};

export default Index;
