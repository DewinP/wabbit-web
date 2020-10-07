import { Box, Button, Flex, Textarea } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React from "react";
import { useCreateCommentMutation } from "../generated/graphql";
import createPost from "../pages/create-post";
import { InputField } from "./InputField";

interface CommentReplyBoxProps {
  variant: "comment" | "reply";
  postId: number;
}

export const CommentReplyBox: React.FC<CommentReplyBoxProps> = ({
  variant,
  postId,
}) => {
  const [, createComment] = useCreateCommentMutation();
  return (
    <Flex direction="column" mt="20px">
      <Formik
        initialValues={{ postId: postId, body: "" }}
        onSubmit={async (values, { setErrors, resetForm }) => {
          const { error } = await createComment({
            body: values.body,
            postId: values.postId,
          });
          if (error) {
            console.log(error);
          }
          resetForm({});
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="body"
              placeholder="What are your thoughts on this?"
              textarea
              comment
            />
            <Flex justify="flex-end">
              <Button
                mt={2}
                isLoading={isSubmitting}
                variantColor="teal"
                type="submit"
              >
                COMMENT
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
