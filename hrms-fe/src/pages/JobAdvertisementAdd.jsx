import React from "react";
import { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitleService";
import CityService from "../services/cityService";
import WorkTypeService from "../services/workTypeService";
import WorkHourService from "../services/workHourService";
import { useFormik } from "formik";
import * as Yup from "yup";
import JobAdvertisementService from "../services/jobAdvertisementService";
import { Form, Button, Segment, Header, Image } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function JobAdvertisementAdd() {
  let jobAdvertisementService = new JobAdvertisementService();

  const [jobTitles, setJobTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workHours, setWorkHours] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));

    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let workHourService = new WorkHourService();
    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
  }, []);

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleReset,
    handleChange,
    handleBlur,
    onBlur,
    setFieldValue,
    dirty,
    isSubmitting,
  } = useFormik({
    initialValues: {
      jobTitleId: "",
      cityId: "",
      openTitleCount: "",
      minSalary: "",
      maxSalary: "",
      workTypeId: "",
      workHourId: "",
      deadline: "",
      description: "",
    },
    validationSchema: Yup.object({
      jobTitleId: Yup.number().required("Bir pozisyon seçiniz!"),
      cityId: Yup.string().required("Bir şehir seçiniz!"),
      openTitleCount: Yup.number().required(
        "Açık pozisyon sayısı giriniz!"
      ),
      minSalary: Yup.number().required("Minimum maaş skalası giriniz!"),
      maxSalary: Yup.number().required("Maksimum maaş skalası giriniz!"),
      workTypeId: Yup.string().required("Bir çalışma türü seçiniz!"),
      workHourId: Yup.string().required("Bir çalışma zamanı seçiniz!"),
      deadline: Yup.date().required("Bitiş tarihini giriniz!"),
      description: Yup.string().required("Açıklama giriniz!"),
    }),
    onSubmit: (values) => {
      values.employerId = 10;
      console.log(values);
      jobAdvertisementService
        .add(values)
        .then(
          (result) => console.log(result.data.data),
          toast.warning("İLAN ONAY BEKLİYOR")
        );
    },
  });

  const jobTitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.id,
    text: jobTitle.jobTitle,
    value: jobTitle.id,
  }));

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.id,
  }));

  const workTypeOptions = workTypes.map((workType) => ({
    key: workType.id,
    text: workType.workType,
    value: workType.id,
  }));

  const workHourOptions = workHours.map((workHour) => ({
    key: workHour.id,
    text: workHour.workHour,
    value: workHour.id,
  }));

  return (
    <div className="form">
      <Header as="h2" inverted color="red" textAlign="center">
        <Header.Content>
          <Image src="https://techyhood.com/wp-content/uploads/2012/11/HRMS.png"size="tiny" />
        </Header.Content>
        <Header.Content>İŞ İLANI YAYINLAMA</Header.Content>
      </Header>

      <Segment color="red">
        <Form onSubmit={handleSubmit}>
          <Form.Group widths="equal">
            <Form.Select
              id="id"
              onChange={(fieldName, data) =>
                setFieldValue("id", data.value)
              }
              onBlur={onBlur}
              value={values.id}
              options={jobTitleOptions}
              label="Pozisyon"
              placeholder="Pozisyon Seçiniz"
              search
              selection
              error={
                errors.id &&
                touched.id &&
                errors.id
              }
            ></Form.Select>
            <Form.Select
              id="cityId"
              onChange={(fieldName, data) =>
                setFieldValue("cityId", data.value)
              }
              onBlur={onBlur}
              value={values.cityId}
              options={cityOptions}
              label="Şehir"
              placeholder="Şehir Seçiniz"
              search
              selection
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="openTitleCount"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.openTitleCount}
              fluid
              label="Açık Pozisyon Sayısı"
              placeholder="Açık Pozisyon Sayısı"
              error={
                errors.openTitleCount &&
                touched.openTitleCount &&
                errors.openTitleCount
              }
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="minSalary"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.minSalary}
              fluid
              label="Minimum Maaş Skalası"
              placeholder="Minimum Maaş Skalası"
              error={errors.minSalary && touched.minSalary && errors.minSalary}
            ></Form.Input>
            <Form.Input
              id="maxSalary"
              type="number"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.maxSalary}
              fluid
              label="Maksimum Maaş Skalası"
              placeholder="Maksimum Maaş Skalası"
              error={errors.maxSalary && touched.maxSalary && errors.maxSalary}
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Select
              id="id"
              onChange={(fieldName, data) =>
                setFieldValue("id", data.value)
              }
              onBlur={onBlur}
              value={values.id}
              options={workTypeOptions}
              label="Çalışma Türü"
              placeholder="Çalışma Türü Seçiniz"
              search
              selection
              error={
                errors.id && touched.id && errors.id
              }
            ></Form.Select>
            <Form.Select
              id="workHourId"
              onChange={(fieldName, data) =>
                setFieldValue("workHourId", data.value)
              }
              onBlur={onBlur}
              value={values.workHourId}
              options={workHourOptions}
              label="Çalışma Zamanı"
              placeholder="Çalışma Zamanı Seçiniz"
              search
              selection
              error={
                errors.id && touched.id && errors.id
              }
            ></Form.Select>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              id="deadline"
              type="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.deadline}
              fluid
              label="Son Başvuru Tarihi"
              error={errors.deadline && touched.deadline && errors.deadline}
            ></Form.Input>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.TextArea
              id="description"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              fluid
              label="Açıklama"
              placeholder="Açıklama Yazınız..."
              error={
                errors.description &&
                touched.description &&
                errors.description
              }
            ></Form.TextArea>
          </Form.Group>
          <Button
            handleReset={handleReset}
            type="submit"
            disabled={!dirty || isSubmitting}
            primary
          >
            YAYINLA
          </Button>
        </Form>
      </Segment>
    </div>
  );
}