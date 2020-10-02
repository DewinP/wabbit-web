import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useToast,
} from "@chakra-ui/core";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { useForgotPasswordMutation } from "../generated/graphql";

const forgotPassword: React.FC<{}> = ({}) => {
  const [, forgotPassword] = useForgotPasswordMutation();
  const [completed, setCompleted] = useState(false);
  const toast = useToast();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => {
          await forgotPassword(values);
          setCompleted(true);
        }}
      >
        {({ isSubmitting }) =>
          completed ? (
            <Box>
              <Text color="gray.500">
                If an account with the email you provided exist. We'll send you
                an email to recover you password.
              </Text>
              <br />
              <Text>Please check you email inbox</Text>
            </Box>
          ) : (
            <>
              <Heading size="md">Forgot you password?</Heading>
              <Text mt={3} mb={3}>
                {" "}
                No worries! we can help you out. Enter your email address bellow
                and we'll email you the steps to getting you password back
              </Text>
              <Form>
                <InputField
                  name="email"
                  required
                  placeholder="email"
                  label="Email"
                  type="email"
                />
                <Button
                  mt={4}
                  isLoading={isSubmitting}
                  variantColor="teal"
                  type="submit"
                  onClick={() =>
                    toast({
                      title: "Email Sent.",
                      description:
                        "We've have sent you a email to recover your password",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  Email me
                </Button>
              </Form>
            </>
          )
        }
      </Formik>
    </Wrapper>
  );
};

export default forgotPassword;
