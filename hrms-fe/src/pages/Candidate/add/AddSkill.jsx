  
import React from "react";
import SkillService from "../../../../services/skillService";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";

export default function AddSkill({id}) {
  let skillService = new SkillService();
  const initialValues = {
    skillName: "",
  };
  const onSubmit = (values) => {
    values.id = id;
    console.log(values);
    skillService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Teknoloji Eklendi!"),
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
                name="skillName"
                type="text"
                label="Yetenek"
                placeholder="Yetenek"
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