import React, { useState, useEffect } from "react";
import {Button,Modal,Icon,Label,Form,Input,Segment,Container,Card,Grid,Dropdown,} from "semantic-ui-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import CandidateService from "../../../../services/candidateService";

export default function UpdateResume({ candidate }) {
  const UpdateResumeSchema = Yup.object().shape({
    email: Yup.string().required("Mail boş bırakılamaz!"),
    dateOfBirth: Yup.date().required("Doğum tarihi boş bırakılamaz!"),
  });
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      password: candidate.password,
      firstName: candidate.firstName,
      nationalId: candidate.nationalId,
      lastName: candidate.lastName,
      id: candidate.id,
      email: candidate.email,
      dateOfBirth: candidate.dateOfBirth,
      candidate: candidate.firstName,
      createdDate: candidate.createdDate,
    },
    validationSchema: UpdateResumeSchema,
    onSubmit: (values) => {
      let candidateService = new CandidateService();
      candidateService
        .update(values)
        .then((result) => console.log(result.data.data));
      swal("Başarılı!", "İletişim bilgisi güncellendi!", "success");
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
        <Modal.Header>İletişim Bilgisi Güncelleme</Modal.Header>
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
                            value={formik.values.candidate}
                            options={getCandidates}
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
                            <Icon name="user" /> Soyisim:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Soyisim..."
                            value={formik.values.lastName}
                            name="lastName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.lastName &&
                            formik.touched.lastName && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.lastName}
                              </div>
                            )}
                        </Form.Field>

                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="mail" /> Email:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Mail..."
                            value={formik.values.email}
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.email && formik.touched.email && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.email}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="key" /> Şifre:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Şifre..."
                            value={formik.values.password}
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.password &&
                            formik.touched.password && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.password}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="circle" /> Tc:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Tc..."
                            value={formik.values.nationalId}
                            name="nationalId"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.nationalId &&
                            formik.touched.nationalId && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.nationalId}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="calendar alternate outline" /> Doğum
                            Tarihi:
                          </Label>
                          <Input
                            type="date"
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Tarih..."
                            value={formik.values.dateOfBirth}
                            name="dateOfBirth"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.dateOfBirth &&
                            formik.touched.dateOfBirth && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.dateOfBirth}
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