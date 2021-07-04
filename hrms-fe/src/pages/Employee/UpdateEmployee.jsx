import React from "react";
import EmployeeService from "../../services/employeeService";
import { Formik,Form } from "formik";
import { Segment, FormGroup,Button} from "semantic-ui-react";
import { toast } from "react-toastify";
import HrmsInput from "../../utilities/customFormControls/HrmsInput"

export default function UpdateSystemPersonnal({
  userId,
  firstName,
  lastName,
  email,
}) {
  let employeeService = new EmployeeService();

  const initialValues = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  const onSubmit = (values) => {
    values.userId = userId;
    console.log(values);
    employeeService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Bilgiler Güncellendi"),
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
                name="firstName"
                type="text"
                label="Ad"
                placeholder="Adınız"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                name="lastName"
                type="text"
                label="Soyad"
                placeholder="Soyadınız"
              ></HrmsInput>
            </FormGroup>
            <FormGroup widths="equal">
              <HrmsInput
                name="email"
                type="text"
                label="E-posta Adresi"
                placeholder="E-posta adresiniz"
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