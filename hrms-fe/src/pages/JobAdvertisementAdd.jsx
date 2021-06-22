import React, { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitleService";
import CityService from "../services/cityService";
import WorkHourService from "../services/workHourService";
import {Button, Dropdown,Input,TextArea,Card,Form, Grid,} from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

export default function JobAdvertisementAdd() {
  let jobAdvertisementService = new JobAdvertisementService();
  const AddJobAdvSchema = Yup.object().shape({
    deadline: Yup.date()
      .nullable()
      .required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Açıklama alanı boş bırakılamaz!"),
    jobTitleId: Yup.string().required("Pozisyon boş bırakılamaz!"),
    workHourId: Yup.string().required("Çalışma zamanı boş bırakılanaz!"),
    workTypeId: Yup.string().required("Çalışma tipi boş bırakılamaz!"),
    openTitleCount: Yup.string()
      .required("Posizyon sayısı zorunludur")
      .min(1, "Posizyon kotası 1 den küçük olamaz"),
    cityId: Yup.string().required("Şehir alanı boş bırakılamaz"),
    salaryMin: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
    salaryMax: Yup.number()
      .min(0, "0 Dan az olamaz")
      .required("Bu alan zorunludur"),
  });

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      description: "",
      jobTitleId: "",
      workHourId: "",
      workTypeId: "",
      openTitleCount: "",
      cityId: "",
      salaryMin: "",
      salaryMax: "",
      deadline: "",
    },
    validationSchema: AddJobAdvSchema,
    onSubmit: (values) => {
      values.employerId = 6;
      jobAdvertisementService
        .add(values)
        .then((result) => console.log(result.data.data));
      alert("İş ilanı eklendi, personelin onayı ardından listelenecektir");
      history.push("/job-advertisements");
    },
  });

  const [workHours, setWorkHours] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workHourService = new WorkHourService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
    cityService.getAll().then((result) => setCities(result.data.data));
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  const workHourOption = workHours.map((workHour, index) => ({
    key: index,
    text: workHour.workHour,
    value: workHour.id,
  }));
  const workTypeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));
  const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.jobTitle,
    value: jobTitle.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Card fluid>
        <Card.Content header="İş ilanı Ekle" />
        <Card.Content>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Field style={{ marginBottom: "1rem" }}>
              <label>İş Posisyonu</label>
              <Dropdown
                clearable
                item
                placeholder="İş pozisyonu"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "jobTitleId")
                }
                onBlur={formik.onBlur}
                id="jobtitleId"
                value={formik.values.jobTitleId}
                options={jobTitleOption}
              />
              {formik.errors.jobTitleId && formik.touched.jobTitleId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobTitleId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Şehir</label>
              <Dropdown
                clearable
                item
                placeholder="Şehir"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                value={formik.values.cityId}
                options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.cityId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Çalışma yeri</label>
              <Dropdown
                clearable
                item
                placeholder="Çalışma yeri"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workTypeId")
                }
                onBlur={formik.onBlur}
                id="workTypeId"
                value={formik.values.workTypeId}
                options={workTypeOption}
              />
              {formik.errors.workTypeId && formik.touched.workTypeId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workTypeId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <label>Çalışma Süresi</label>
              <Dropdown
                clearable
                item
                placeholder="Çalışma Süresi"
                search
                selection
                onChange={(event, data) =>
                  handleChangeSemantic(data.value, "workHourId")
                }
                onBlur={formik.onBlur}
                id="workHourId"
                value={formik.values.workHourId}
                options={workHourOption}
              />
              {formik.errors.workHourId && formik.touched.workHourId && (
                <div className={"ui pointing red basic label"}>
                  {formik.errors.workHourId}
                </div>
              )}
            </Form.Field>
            <Form.Field>
              <Grid stackable>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı MİNİMUM
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MİNİMUM"
                    value={formik.values.salaryMin}
                    name="salaryMin"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
                  {formik.errors.salaryMin && formik.touched.salaryMin && (
                    <div className={"ui pointing red basic label"}>
                      {formik.errors.salaryMin}
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Maaş aralığı MAKSİMUM
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="number"
                    placeholder="Maaş aralığı MAKSİMUM"
                    value={formik.values.salaryMax}
                    name="salaryMax"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></Input>
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
                  <label style={{ fontWeight: "bold" }}>
                    Açık Posisyon sayısı
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    id="openTitleCount"
                    name="openTitleCount"
                    error={Boolean(formik.errors.openTitleCount)}
                    onChange={formik.handleChange}
                    value={formik.values.openTitleCount}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık Posisyon sayısı"
                  />
                  {formik.errors.openTitleCount &&
                    formik.touched.openTitleCount && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.openTitleCount}
                      </div>
                    )}
                </Grid.Column>
                <Grid.Column width={8}>
                  <label style={{ fontWeight: "bold" }}>
                    Son başvuru tarihi
                  </label>
                  <Input
                    style={{ width: "100%" }}
                    type="date"
                    error={Boolean(formik.errors.deadline)}
                    onChange={(event, data) =>
                      handleChangeSemantic(data.value, "deadline")
                    }
                    value={formik.values.deadline}
                    onBlur={formik.handleBlur}
                    name="deadline"
                    placeholder="Son başvuru tarihi"
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
              <label>Açıklama</label>
              <TextArea
                placeholder="Açıklama"
                style={{ minHeight: 100 }}
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
              content="Ekle"
              labelPosition="right"
              icon="add"
              positive
              type="submit"
              style={{ marginLeft: "20px" }}
            />
          </Form>
        </Card.Content>
      </Card>
    </div>
  );
}
