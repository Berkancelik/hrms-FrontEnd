  
import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsTextInput from "../../../../utilities/customFormControls/HrmsTextInput";
import CoverLetterService from "../../../../services/coverLetterService";

export default function UpdateCoverLetter({ id, content }) {
  let coverLetterService = new CoverLetterService();
  const initialValues = {
    content: content,
  };
  const onSubmit = (values) => {
    values.id = id;

    console.log(values);
    coverLetterService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Ön Yazı Güncellendi"),
        window.location.reload()
      );
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="green">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsTextInput
                name="content"
                type="text"
                label="Önyazı"
                placeholder="Önyazı giriniz..."
              ></HrmsTextInput>
            </FormGroup>
            <Button type="submit" color="green">
              GÜNCELLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}