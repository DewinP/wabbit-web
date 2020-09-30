import { Box, Button } from "@chakra-ui/core";
import NextLink from "next/link";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { useChangePasswordMutation } from "../../generated/graphql";
import { toErrorMap } from "../../utils/toErrorMap";

export const ChangePassword: NextPage<{ token: string }> = ({ token }) => {
  const router = useRouter();
  const [tokenError, setTokenError] = useState("");
  const [, changePassword] = useChangePasswordMutation();
  return (
    <Wrapper variant="small">
      <Formik
        initialValues={{ newPassword: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await changePassword({
            token,
            newPassword: values.newPassword,
          });
          if (response.data?.changePassword.errors) {
            const errorMap = toErrorMap(response.data.changePassword.errors);
            if ("token" in errorMap) {
              setTokenError(errorMap.token);
            } else {
              setErrors(errorMap);
            }
          } else if (response.data?.changePassword.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="newPassword"
              disabled={tokenError ? true : false}
              placeholder="new password"
              label="New Passoword"
              type="password"
            />

            {tokenError ? (
              <>
                <Box color="red"> Token Expired</Box>

                <NextLink href="/login">
                  <Button mt={4} variantColor="gray" type="submit">
                    Go back to login
                  </Button>
                </NextLink>
              </>
            ) : (
              <Button
                mt={4}
                isLoading={isSubmitting}
                variantColor="teal"
                type="submit"
              >
                Change password
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

//get any query parameters from url
ChangePassword.getInitialProps = ({ query }) => {
  return {
    token: query.token as string,
  };
};

export default ChangePassword;
