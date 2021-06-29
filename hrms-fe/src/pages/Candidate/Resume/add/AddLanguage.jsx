import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import LanguageService from "../../../../services/languagService";

export default function AddLanguage({ resumeId }) {
  let languagService = new LanguageService();

  const initialValues = {
    languageName: "",
    level: "",
  };
  const onSubmit = (values) => {
    values.resumeId = resumeId;
    console.log(values);
    languagService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Yabancı Dil Eklendi"),
        window.location.reload()
      );
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Segment color="green">
          <Form className="ui form">
            <FormGroup widths="equal">
              <HrmsInput
                name="languageName"
                type="text"
                label="Yabancı Dil"
                placeholder="Yabancı Dil"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                name="level"
                type="text"
                label="Seviye"
                placeholder="Seviye"
              ></HrmsInput>
            </FormGroup>
            <Button type="submit" color="green">
              EKLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}