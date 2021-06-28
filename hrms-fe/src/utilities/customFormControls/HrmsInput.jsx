import { useField } from "formik";
import React from "react";
import { FormInput} from "semantic-ui-react";

export default function HrmsInput({...props }) {
  const [field, meta] = useField(props);
  console.log(field);
  console.log(meta);

  return (
    <FormInput
      {...field}
      {...props}
      error={meta.error && meta.touched && meta.error}
    ></FormInput>
  );
}