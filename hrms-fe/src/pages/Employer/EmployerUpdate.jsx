import React,{useState,useEffect} from 'react'
import {Container,Segment,Card, Icon, Label, Modal, Button, Input, Form, Dropdown,Grid} from "semantic-ui-react";
  import * as Yup from "yup";
import { useFormik } from "formik";
import swal from "sweetalert";
import EmployerService from '../../services/employerService';
export default function EmployerUpdate({employer}) {

    const EmployerUpdateSchema = Yup.object().shape({
        companyName: Yup.string().required("Şirket adı boş bırakılamaz!"),
        email:Yup.string().required("Mail adresi boş bırakılamaz!"),
        phoneNumber:Yup.string().required("Telefon Numarası boş bırakılamaz!"),
        password:Yup.string().required("Şifre bilgisi boş bırakılamaz!"),
        webAddress:Yup.string().required("Şirket web adresi boş bırakılamaz!")
      });
      const formik = useFormik({
        initialValues: {
          id: employer.id,
          companyName: employer.companyName,
          email:employer.email,
          phoneNumber:employer.phoneNumber,
          password:employer.password,
          webAddress:employer.webAddress,
          createdDate:employer.createdDate,
          employerUpdate:employer.employerUpdate,
          employer: "",
        },
        validationSchema: EmployerUpdateSchema,
        onSubmit: (values) => {
          let employerService = new EmployerService();
          employerService.updateWaiting(values).then((result) => console.log(result.data.data));
          swal("Başarılı!", "Güncelleme isteği alındı.Sistem personeli tarafından onaylandıktan sonra bilgileriniz güncellenecektir!", "success");
        },
      });

      const [employers, setEmployers] = useState([])

      useEffect(() => {
          let employerService=new EmployerService();
          employerService.getEmployers().then(result=>setEmployers(result.data.data))
      }, [])

      const getEmployers = employers.map((employer, index) => ({
        key: index,
        text: employer.companyName,
        value: employer,
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
                color="orange"
                size="massive"
                style={{ marginBottom: "1em" }}
              >
                <Button.Content visible>Güncelle</Button.Content>
                <Button.Content hidden>
                  <Icon name="edit" />
                </Button.Content>
              </Button>
        }
      >
        <Modal.Header>Şirket Bilgi Güncelleme</Modal.Header>
        <Modal.Description>
        <Container>
            <Segment circle="true" vertical style={{ padding: "3em 0em" }}>
              <Grid>
                <Grid.Column width={1}></Grid.Column>
                <Grid.Column width={14}>
                  <Card fluid color="orange">
                    <Card.Content>
                      <Form onSubmit={formik.handleSubmit}>
                        <Form.Field>
                          <Label basic color="orange">
                            <Icon name="list alternate" /> Şirket:
                          </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                            clearable
                            item
                            placeholder="Şirket Seçiniz..."
                            search
                            selection
                            onChange={(event, data) =>
                              handleChangeSemantic(data.value, "employer")
                            }
                            onBlur={formik.onBlur}
                            id="employer"
                            value={formik.values.employer}
                            options={getEmployers}
                          />
                          {formik.errors.employer &&
                            formik.touched.employer && (
                              <div className={"ui pointing red basic label"}>
                                {formik.errors.employer}
                              </div>
                            )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="orange">
                            Mail:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="SMail..."
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
                        <Label basic color="orange">
                             Şifre:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Şifre..."
                            value={formik.values.password}
                            name="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.password && formik.touched.password && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.password}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="orange">
                             Telefon Numarası:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Telefon..."
                            value={formik.values.phoneNumber}
                            name="phoneNumber"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.phoneNumber}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="orange">
                             Web Adresi:
                          </Label>
                          <Input
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Web..."
                            value={formik.values.webAddress}
                            name="webAddress"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.webAddress && formik.touched.webAddress && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.webAddress}
                            </div>
                          )}
                        </Form.Field>
                        <Form.Field style={{ marginBottom: "1rem" }}>
                        <Label basic color="orange">
                             Kuruluş Tarihi:
                          </Label>
                          <Input
                          type="date"
                            style={{ marginRight: "1em", marginTop: "1em" }}
                            placeholder="Başlangıç Tarihi..."
                            value={formik.values.createdDate}
                            name="createdDate"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                          ></Input>
                          {formik.errors.createdDate && formik.touched.createdDate && (
                            <div className={"ui pointing red basic label"}>
                              {formik.errors.createdDate}
                            </div>
                          )}
                        </Form.Field>
                        <Modal.Actions>
                          <Button
                            onClick={() => setOpen(false)}
                            animated
                            basic
                            color="orange"
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
                            color="orange"
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