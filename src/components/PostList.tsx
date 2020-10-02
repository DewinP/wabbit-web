import React from "react";
import { usePostsQuery } from "../generated/graphql";
import { Wrapper } from "./Wrapper";

interface PostListProps {}

export const PostList: React.FC<PostListProps> = ({}) => {
  const [{ data }] = usePostsQuery();
  return (
    <Wrapper>
      {!data ? (
        <div>loading...</div>
      ) : (
        data.posts.map((p) => {
          return (
            <div key={p.id}>
              <div>{p.title}</div>
              <div>{p.body}</div>
            </div>
          );
        })
      )}
    </Wrapper>
  );
};
