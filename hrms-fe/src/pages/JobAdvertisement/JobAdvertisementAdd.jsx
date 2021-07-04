import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom';
import { useFormik } from "formik";
import { Button, Dropdown, Input, TextArea, Card, Form, Grid,Segment,Container,Label,Icon } from "semantic-ui-react";
import JobAdvertisementService from '../../services/jobAdvertisementService';
import CityService from '../../services/cityService';
import WorkTypeService from '../../services/workTypeService';
import WorkHourService from '../../services/workHourService';
import JobTitleService from '../../services/jobTitleService';
import EmployerService from "../../services/employerService";
import * as moment from 'moment'
import swal from "sweetalert";

export default function JobAdvertisementAdd() {
  let jobAdvertisementService = new JobAdvertisementService()

  const JobAdvertAddSchema = Yup.object().shape({
      deadline: Yup.string().nullable().required("Son başvuru tarihi boş bırakılamaz!"),
      description: Yup.string().required("İş açıklaması boş bırakılamaz!"),
      jobTitle: new Yup.ObjectSchema().required("İş pozisyonu bilgisi boş geçilemez!"),
      workHour: new Yup.ObjectSchema().required("Çalışma zamanı tipi boş bırakılamaz!"),
      workType: new Yup.ObjectSchema().required("Çalışma tipi boş bırakılamaz!"),
      openTitleCount: Yup.string().required("Kişi sayısı boş bırakılamaz!"),
      city: new Yup.ObjectSchema().required("Şehir bilgisi boş bırakılamaz!"),
  });

  const history = useHistory()

  const formik = useFormik({
      initialValues: {
          employer:"",
          description: "",
          jobTitle: "",
          workHour: "",
          workType: "",
          openTitleCount: "",
          city: "",
          salaryMin: "",
          salaryMax: "",
          deadline:moment().format("YYYY-MM-DD")
       
      },
      validationSchema: JobAdvertAddSchema,
      onSubmit: (values) => {
          jobAdvertisementService.addJobAdvertisement(values).then((result) => console.log(result.data.data));
          swal("Başarılı!", "İş ilanı eklendi!", "success");
          history.push("/jobadd");
      },
  });

  const[employers,setEmployers]=useState([]);
  const [workHours, setworkHours] = useState([]);
  const [workTypes, setworkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setjobTitles] = useState([]);

  useEffect(() => {
      let workHourService = new WorkHourService()
      let workTypeService = new WorkTypeService()
      let cityService = new CityService()
      let titleService = new JobTitleService()
      let employerService=new EmployerService()

      workHourService.getWorkHours().then(result => setworkHours(result.data.data))
      workTypeService.getWorkTypes().then(result => setworkTypes(result.data.data))
      cityService.getAll().then(result => setCities(result.data.data))
      titleService.getJobTitles().then(result => setjobTitles(result.data.data))
      employerService.getEmployers().then(result=>setEmployers(result.data.data))
  }, [])

  const getWorkHours  = workHours.map((workHour, index) => ({
      key: index,
      text: workHour.workHour,
      value: workHour,
  }));
  const getWorkTypes  = workTypes.map((workType, index) => ({
      key: index,
      text: workType.workType,
      value: workType,
  }));
  const getCities  = cities.map((city, index) => ({
      key: index,
      text: city.cityName,
      value: city,
  }));
  const getJobTitles  = jobTitles.map((jobTitle, index) => ({
      key: index,
      text: jobTitle.jobTitle,
      value: jobTitle,
  }));
  const getEmployers  = employers.map((employer, index) => ({
    key: index,
    text: employer.companyName,
    value: employer,
}));

  const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
  }

  return (
      <div>
         <Segment style={{ padding: "10em 0em" }} vertical>
        <Container>
          <Card fluid color = 'blue'>
          <Card.Header
              textAlign="center"
              style={{ fontSize: "2em", marginBottom: "1em", marginTop: "1em" }}
            >
              İş İlanı Ekle
            </Card.Header>
              <Card.Content>
                  <Form onSubmit={formik.handleSubmit}><Form.Field style={{ marginBottom: "1rem" }}>
                  <Label basic color="blue">
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
                          {formik.errors.employer && formik.touched.employer && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.employer}
                              </div>
                          )}
                      </Form.Field>

                      <Form.Field style={{ marginBottom: "1rem" }}>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> Şehir:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="Şehir Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "city")
                              }
                              onBlur={formik.onBlur}
                              id="title"
                              value={formik.values.city}
                              options={getCities}
                          />
                          {formik.errors.city && formik.touched.city && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.city}
                              </div>
                          )}
                      </Form.Field>
                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> İş Pozisyonu:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="İş Pozisyonu Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "jobTitle")
                              }
                              onBlur={formik.onBlur}
                              id="city"
                              value={formik.values.jobTitle}
                              options={getJobTitles}
                          />
                          {formik.errors.jobTitle && formik.touched.jobTitle && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.jobTitle}
                              </div>
                          )}
                      </Form.Field>
                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> Çalışma Tipi:
                  </Label>
                          <Dropdown
                            style={{
                              marginRight: "1em",
                              marginTop: "1em",
                              fontWeight: "lighter",
                            }}
                              clearable
                              item
                              placeholder="Çalışma Tipi Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "workType")
                              }
                              onBlur={formik.onBlur}
                              id="workType"
                              value={formik.values.workType}
                              options={getWorkTypes}
                          />
                          {formik.errors.workType && formik.touched.workType && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.workType}
                              </div>
                          )}
                      </Form.Field>
                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="list alternate" /> Çalışma Zamanı Tipi:
                  </Label>
                          <Dropdown
                           style={{
                            marginRight: "1em",
                            marginTop: "1em",
                            fontWeight: "lighter",
                          }}
                              clearable
                              item
                              placeholder="Çalışma Zamanı Tipi Seçiniz..."
                              search
                              selection
                              onChange={(event, data) =>
                                  handleChangeSemantic(data.value, "workHour")
                              }
                              onBlur={formik.onBlur}
                              id="workHour"
                              value={formik.values.workHour}
                              options={getWorkHours}
                          />
                          {formik.errors.workHour && formik.touched.workHour && (
                              <div className={"ui pointing red basic label"}>{formik.errors.workHour}</div>
                          )}
                      </Form.Field>
                      <Form.Field>
                          <Grid stackable>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="lira" /> Minimum Maaş:
                      </Label>
                                  <Input
                                       style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="number"
                                      placeholder="Minimum Maaş..."
                                      value={formik.values.salaryMin}
                                      name="salaryMin"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                  >
                                  </Input>
                                  {formik.errors.salaryMin && formik.touched.salaryMin && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.salaryMin}
                                      </div>
                                  )}
                              </Grid.Column>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="lira" /> Maximum Maaş:
                      </Label>
                                  <Input
                                       style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="number"
                                      placeholder="Maximum Maaş..."
                                      value={formik.values.salaryMax}
                                      name="salaryMax"
                                      onChange={formik.handleChange}
                                      onBlur={formik.handleBlur}
                                  >
                                  </Input>
                                  {formik.errors.salaryMax && formik.touched.salaryMax && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.salaryMax}
                                      </div>
                                  )}
                              </Grid.Column>
                          </Grid>
                      </Form.Field>

                      <Form.Field>
                          <Grid stackable>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="user" />Alınacak Personel Sayısı:
                      </Label>
                                  <Input
                                      style={{ marginRight: "1em", marginTop: "1em" }}
                                      id="openTitleCount"
                                      name="openTitleCount"
                                      error={Boolean(formik.errors.openTitleCount)}
                                      onChange={formik.handleChange}
                                      value={formik.values.openTitleCount}
                                      onBlur={formik.handleBlur}
                                      type="number"
                                      placeholder="Personel Sayısı..."
                                  />
                                  {formik.errors.openTitleCount && formik.touched.openTitleCount && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.openTitleCount}
                                      </div>
                                  )}
                              </Grid.Column>
                              <Grid.Column width={8}>
                              <Label basic color="blue">
                        <Icon name="calendar alternate outline" /> Son Başvuru
                        Tarihi:
                      </Label>
                                  <Input 
                                        style={{ marginRight: "1em", marginTop: "1em" }}
                                      type="date"
                                      error={Boolean(formik.errors.deadline)}
                                      onChange={(event, data) =>
                                          handleChangeSemantic(data.value, "deadline")
                                      }
                                      value={formik.values.deadline}
                                      onBlur={formik.handleBlur}
                                      name="deadline"
                                      placeholder="Son Başvuru Tarihi..."
                                  />
                                  {formik.errors.deadline && formik.touched.deadline && (
                                      <div className={"ui pointing red basic label"}>
                                          {formik.errors.deadline}
                                      </div>
                                  )}
                              </Grid.Column>
                          </Grid>
                      </Form.Field>

                      <Form.Field>
                      <Label basic color="blue">
                    <Icon name="briefcase" /> İş Tanımı:
                  </Label>
                          <TextArea
                              placeholder="İş Tanımı..."
                              style={{ marginRight: "1em", marginTop: "1em" }}
                              error={Boolean(formik.errors.description).toString()}
                              value={formik.values.description}
                              name="description"
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                          />
                          {formik.errors.description && formik.touched.description && (
                              <div className={"ui pointing red basic label"}>
                                  {formik.errors.description}
                              </div>
                          )}
                      </Form.Field>
                      <Button
                  type="submit"
                  animated
                  basic
                  color="blue"
                  size="massive"
                  style={{ marginBottom: "0.4em" }}
                >
                  <Button.Content visible>Ekle</Button.Content>
                  <Button.Content hidden>
                    <Icon name="check" />
                  </Button.Content>
                </Button>
                  </Form>
              </Card.Content>
          </Card>
          </Container>
        </Segment>
      </div>
  )
}