import React, { useState, useEffect } from "react";
import {Modal,Button,Icon,Label,Dropdown,Card,Grid,Segment,Container,Form, TextArea,} from "semantic-ui-react";
import CoverLetterService from "../../../../services/coverLetterService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import CandidateService from "../../../../services/candidateService";

export default function UpdateCoverLetter({ coverLetter }) {
  const CoverLetterUpdateSchema = Yup.object().shape({
    coverLetter: Yup.string().required("Dil adı boş bırakılamaz!"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: coverLetter.id,
      coverLetter: coverLetter.content,
      candidate: "",
    },
    validationSchema: CoverLetterUpdateSchema,
    onSubmit: (values) => {
      let coverLetterService = new CoverLetterService();

      coverLetterService
        .update(values)
        .then((result) => console.log(result.data.data));
      swal("Başarılı!", "Ön Yazı güncellendi!", "success");
      history.push("/resume/1");
    },
  });

  const [candidates, setcandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidates()
      .then((result) => setcandidates(result.data.data));
  }, []);

  const getCandidates = candidates.map((candidate, index) => ({
    key: index,
    text: candidate.firstName,
    value: candidate,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Modal
        onSubmit={formik.handleSubmit}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button
            type="submit"
            animated
            basic
            color="violet"
            size="large"
            style={{ marginLeft: "60em" }}
          >
            <Button.Content visible>Güncelle</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Ön Yazı Güncelleme</Modal.Header>
        <Modal.Description>
          <Container>
            <Segment circle="true" vertical style={{ padding: "3em 0em" }}>
              <Grid>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={14}>
                  <Card fluid color="blue">
                    <Card.Content>
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                          <Label basic color="blue">
                            <Icon name="list alternate" /> İsim:
                          </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                            clearable
                            item
                            placeholder="İsim Seçiniz..."
                            search
                            selection
                            onChange={(event, data) =>
                              handleChangeSemantic(data.value, "candidate")
                            }
                            onBlur={formik.onBlur}
                            id="candidate"
                            options={getCandidates}
                            value={formik.values.candidate}
                           
                          />
                          {formik.errors.candidate &&
                            formik.touched.candidate && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.candidate}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="pencil" /> Ön Yazı:
                          </Label>
                          <TextArea
                            placeholder="Ön Yazı..."
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            error={Boolean(
                              formik.errors.content
                            ).toString()}
                            value={formik.values.content}
                            name="coverLetter"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          />
                          {formik.errors.content &&
                            formik.touched.content && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.content}
                              </div>
                            )}
                        </Form.Field>
                        <Modal.Actions>
                          <Button
                            onClick={() => setOpen(false)}
                            animated
                            basic
                            color="blue"
                            size="massive"
                            style={{
                              marginBottom: "0.4em",
                              marginLeft: "19.8em",
                            }}
                          >
                            <Button.Content visible>Vazgeç</Button.Content>
                            <Button.Content hidden>
                              <Icon name="delete" />
                            </Button.Content>
                          </Button>
                          <Button
                            type="submit"
                            animated
                            basic
                            color="blue"
                            size="massive"
                            style={{
                              marginBottom: "0.4em",
                              marginRigth: "10em",
                            }}
                          >
                            <Button.Content visible>Kaydet</Button.Content>
                            <Button.Content hidden>
                              <Icon name="check" />
                            </Button.Content>
                          </Button>
                        </Modal.Actions>
                      </Form>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid>
            </Segment>
          </Container>
        </Modal.Description>
      </Modal>
    </div>
  );
}