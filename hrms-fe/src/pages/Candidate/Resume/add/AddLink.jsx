import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import Linkervice from "../../../../services/linkervice";

export default function AddLink({ resumeId }) {
  let linkervice = new Linkervice();
  const initialValues = {
    linkedin: "",
    github: "",
  };
  const onSubmit = (values) => {
    values.resumeId = resumeId;
    console.log(values);
    linkervice
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Hesaplar Eklendi"),
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
                icon="linkedin"
                iconPosition="left"
                name="linkedin"
                type="text"
                label="LinkedIn Hesabı"
                placeholder="LinkedIn hesabı"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                icon="github"
                iconPosition="left"
                name="github"
                type="text"
                label="GitHub Hesabı"
                placeholder="GitHub hesabı"
              ></HrmsInput>
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