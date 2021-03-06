import React from "react";
import { Formik, Form } from "formik";
import { Wrapper } from "../components/Wrapper";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/core";
import { InputField } from "../components/InputField";
import { useRegisterMutation } from "../generated/graphql";
import { toErrorMap } from "../utils/toErrorMap";
import { useRouter } from "next/router";
import NextLink from "next/link";

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const router = useRouter();
  const [, register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Heading mb={5} bg="tomato" textAlign="center" color="white">
        JOIN WABBIT!
      </Heading>
      <Formik
        initialValues={{ username: "", email: "", password: "", avatar: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({ options: values });
          //keys line up exactly with the values of the mutation so i can pass just the object values
          if (response.data?.register.errors) {
            //graphql error: [{field: "username", message:"something w"}]
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>
            <Box mt={4}>
              <InputField
                name="avatar"
                placeholder="https://example.com/example.jpg"
                label="Profile Picture URL"
              />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              isLoading={isSubmitting}
              variantColor="teal"
              type="submit"
            >
              Register
            </Button>
            <Flex justify="flex-end">
              <NextLink href="/forgot-password">
                <Link>Login instead?</Link>
              </NextLink>
            </Flex>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
