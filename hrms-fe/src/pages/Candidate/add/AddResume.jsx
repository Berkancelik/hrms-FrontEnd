import React from "react";
import { Formik, Form } from "formik";
import { Button, Segment, FormGroup, Message } from "semantic-ui-react";
import { toast } from "react-toastify";
import ResumeService from "../../../services/resumeService";

export default function AddResume({ id }) {
  let resumeService = new ResumeService();

  const initialValues = {
    id: "",
  };

  const onSubmit = (values) => {
    values.id = id;
    console.log(values);
    resumeService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("Özgeçmiş Oluşturuldu!"),
        window.location.reload()
      );
  };
  return (
    <div className="form">
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className="ui form">
          <Segment color="green">
            <FormGroup widths="equal">
              <Message size="huge" positive>
                Yeni bir özgeçmiş oluşturmak mı istiyorsun?
                Oluşturulan özgeçmişi daha sonra düzeltilebilir.
              </Message>
            </FormGroup>
            <Button style={{ marginLeft: "313pt" }} type="submit" color="green">
              OLUŞTUR
            </Button>
          </Segment>
        </Form>
      </Formik>
    </div>
  );
}