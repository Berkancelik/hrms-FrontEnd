import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import LinkService from "../../../../services/linkService";

export default function UpdateLink({
  id,
  linkedin,
  github,
}) {
  let linkService = new LinkService();
  const initialValues = {
    linkedin: linkedin,
    github: github,
  };
  const onSubmit = (values) => {
    values.id = id;
    console.log(values);
    linkService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Hesaplar Güncellendi"),
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
            <Button style={{marginLeft:"265pt"}} type="submit" color="green">
              GÜNCELLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}