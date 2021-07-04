import React, { useEffect, useState } from "react";
import {
  Segment,
  Button,
  Container,
  Icon,
  Form,
  Input,
  Label,
  Card,
  Grid,
  Modal,
  Dropdown,
} from "semantic-ui-react";
import LanguageService from "../../../services/languageService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import CandidateService from "../../../services/candidateService";

export default function UpdateLanguage({ language }) {
  const UpdateLanguageSchema = Yup.object().shape({
    language: new Yup.ObjectSchema().required("Dil adı boş bırakılamaz!"),
    level: Yup.number().required("Dil seviyesi boş bırakılamaz!"),
  });

  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      id: language.id,
      language: language.languageName,
      level: language.level,
      candidateId:language.candidate
    },
    validationSchema: UpdateLanguageSchema,
    onSubmit: (values) => {
      let resumeLanguageService = new LanguageService();

      resumeLanguageService.updateLanguages(values).then(result=>console.log(result.data.data))
          swal("Başarılı!", "Dil bilgisi güncellendi!", "success");
      history.push("/resume/1");
    },
  });

  const[languages,setLanguages]=useState([])
  const [candidates, setcandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    let languageService=new LanguageService();
    languageService.getForeignLanguage().then(result=>setLanguages(result.data.data))
    candidateService.getCandidates().then((result) => setcandidates(result.data.data));
  }, []);

  const getCandidates = candidates.map((candidate, index) => ({
    key: index,
    text: candidate.firstName,
    value: candidate,
  }));

  const getLanguages = languages.map((language, index) => ({
    key: index,
    text: language.languageName,
    value: language,
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
            style={{ marginBottom: "2em" }}
          >
            <Button.Content visible>Güncelle</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>Dil Bilgisi Güncelleme</Modal.Header>
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
                            <Icon name="language" /> Dil Adı:
                          </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                            clearable
                            item
                            placeholder="Dil Seçiniz..."
                            search
                            selection
                            onChange={(event, data) =>
                              handleChangeSemantic(data.value, "language")
                            }
                            onBlur={formik.onBlur}
                            id="candidate"
                            value={formik.values.language}
                            options={getLanguages}
                          />
                          {formik.errors.language &&
                            formik.touched.language && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.language}
                              </div>
                            )}
                        </Form.Field>

                        <Form.Field style={{ marginBottom: "1rem" }}>
                          <Label basic color="blue">
                            <Icon name="time" /> Dil Seviyesi:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            type="number"
                            placeholder="Dil Seviyesi..."
                            value={formik.values.level}
                            name="level"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.level && formik.touched.level && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.level}
                            </div>
                          )}
                        </Form.Field>
                        <Modal.Actions >
          <Button
        
            onClick={() => setOpen(false)}
            animated
            basic
            color="blue"
            size="massive"
            style={{ marginBottom: "0.4em",marginLeft:"19.8em"}}
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
            style={{ marginBottom: "0.4em",marginRigth:"10em"}}
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