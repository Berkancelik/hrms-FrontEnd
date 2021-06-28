import { useField } from "formik";
import React from "react";
import { FormSelect } from "semantic-ui-react";

export default function HrmsDropdown({ ...props }) {
  const [field, meta] = useField(props);
  console.log(field)
  console.log(meta)

  return <FormSelect {...field} {...props}  search selection></FormSelect>;
}