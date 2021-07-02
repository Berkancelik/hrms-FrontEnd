import React,{useState,useEffect} from 'react'
import { Button,Modal,Icon,Form,Input,Label,Segment,Container,Grid,Dropdown,Card} from 'semantic-ui-react'
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import JobExperienceService from '../../services/jobExperienceService';
import CandidateService from '../../services/candidateService';

export default function JobExperienceUpdate({jobExperience}) {

    const JobExperienceUpdateSchema = Yup.object().shape({
        companyName: Yup.string().required("Okul adı boş bırakılamaz!"),
        jobTitle:Yup.string().required("Bölüm adı boş bırakılamaz!"),
        startedDate:Yup.date().required("Başlangıç yılı boş bırakılamaz!"),
        endedDate:Yup.date().required("Bitiş yılı boş bırakılamaz!")
      });
      const history = useHistory();
      const formik = useFormik({
        initialValues: {
          id: jobExperience.id,
          companyName: jobExperience.companyName,
          jobTitle:jobExperience.jobTitle,
          startedDate:jobExperience.startedDate,
          endedDate:jobExperience.endedDate,
          candidate: "",
        },
        validationSchema: JobExperienceUpdateSchema,
        onSubmit: (values) => {
          let jobExperienceService = new JobExperienceService();
          jobExperienceService.update(values).then((result) => console.log(result.data.data));
          swal("Başarılı!", "İş deneyimi güncellendi!", "success");
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
    

    const[open,setOpen]=React.useState(false)
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
            style={{ marginBottom: "2em" }}
          >
            <Button.Content visible>Güncelle</Button.Content>
            <Button.Content hidden>
              <Icon name="edit" />
            </Button.Content>
          </Button>
        }
      >
        <Modal.Header>İş Deneyimi Güncelleme</Modal.Header>
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
                            <Icon name="building" />Şirket Adı:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Şirket Adı..."
                            value={formik.values.companyName}
                            name="companyName"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.companyName && formik.touched.companyName && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.companyName}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                            <Icon name="user" /> Pozisyon Adı:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Pozisyon Adı..."
                            value={formik.values.jobTitle}
                            name="jobTitle"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.jobTitle && formik.touched.jobTitle && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.jobTitle}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                            <Icon name="calendar alternate outline" /> Başlangıç Tarihi:
                          </Label>
                          <Input
                          type="date"
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Başlangıç Tarihi..."
                            value={formik.values.startedDate}
                            name="startedDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.startedDate && formik.touched.startedDate && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.startedDate}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="blue">
                            <Icon name="calendar alternate outline" /> Mezuniyet Tarihi:
                          </Label>
                          <Input
                          type="date"
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Bitiş Tarihi..."
                            value={formik.values.endedDate}
                            name="endedDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.endedDate && formik.touched.endedDate && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.endedDate}
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
    )
}