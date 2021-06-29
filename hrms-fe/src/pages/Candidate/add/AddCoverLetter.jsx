import React from "react";
import CoverLetterService from "../../../../services/coverLetterService";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsTextInput from "../../../../utilities/customFormControls/HrmsTextInput";

export default function AddCoverLetter({resumeId}) {
  let coverLetterService = new CoverLetterService();
  const initialValues = {
    content: "",
  };
  const onSubmit = (values) => {
    values.resumeId = resumeId;
    console.log(values);
    coverLetterService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Ön Yazı Eklendi"),
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
                label="Ön Yazı"
                placeholder="Ön Yazıyı Buraya Giriniz.."
              ></HrmsTextInput>
            </FormGroup>
            <Button style={{marginLeft:"295pt"}} type="submit" color="green">
              EKLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}