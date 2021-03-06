import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/core";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  label?: string;
  textarea?: boolean;
  comment?: boolean;
};
//I want my input field component to take any props that a regular input component would take

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  textarea,
  comment,
  ...props
}) => {
  let InputOrTextarea = Input;
  let minDinamicH = "40px";
  if (textarea) {
    InputOrTextarea = Textarea;
    minDinamicH = comment ? "200px" : "400px";
  }

  const [field, { error }] = useField(props);
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <InputOrTextarea
        {...field}
        {...props}
        id={field.name}
        minH={minDinamicH}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
