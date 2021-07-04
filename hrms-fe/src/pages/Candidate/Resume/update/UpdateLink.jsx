import React from "react";
import { Formik, Form } from "formik";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import SkillService from "../../../../services/skillService";


export default function UpdateTechnology({id,skillName}) {
  let skillService = new SkillService();
  const initialValues = {
    skillName: skillName,
  };
  const onSubmit = (values) => {
    values.id=id;
    console.log(values);
    skillService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Teknoloji Güncellendi"),
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
            <Button style={{marginLeft:"266pt"}} type="submit" color="green">
              GÜNCELLE
            </Button>
          </Form>
        </Segment>
      </Formik>
    </div>
  );
}