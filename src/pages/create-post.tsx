import { Box, Button, Divider, Flex, Link, Textarea } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../components/InputField";
import { Layout } from "../components/Layout";
import { Wrapper } from "../components/Wrapper";
import { useCreatePostMutation } from "../generated/graphql";

const createPost: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, createPost] = useCreatePostMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ title: "", body: "" }}
        onSubmit={async (values, { setErrors }) => {
          const { error } = await createPost({ options: values });

          if (error?.message.includes("not authenticated")) {
            router.push("/login");
          } else {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="title" placeholder="post title" label="Title" />
            <Box>
              <InputField name="body" placeholder="...content here" textarea />
            </Box>
            <Button
              mt={4}
              isLoading={isSubmitting}
              variantColor="teal"
              type="submit"
            >
              publish
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default createPost;
