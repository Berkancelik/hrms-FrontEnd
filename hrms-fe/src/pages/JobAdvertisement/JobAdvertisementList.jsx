import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Segment, Header, Image, FormGroup } from "semantic-ui-react";
import { toast } from "react-toastify";
import CityService from "../../services/cityService";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobTitleService from "../../services/jobTitleService";
import WorkHourService from "../../services/workHourService";
import WorkTypeService from "../../services/workTypeService";
import HrmsDropdown from "../../utilities/customFormControls/HrmsDropdown";
import HrmsInput from "../../utilities/customFormControls/HrmsInput";
import HrmsTextInput from "../../utilities/customFormControls/HrmsTextInput";
import { useHistory } from "react-router-dom";

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

    let cityService = new CityService;
    cityService.getAll().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService;
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let workHourService = new WorkHourService;
    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
  }, []);

  const initialValues = {
    jobTitleId: "",
    cityId: "",
    openTitleCount: "",
    salaryMin: "",
    salaryMax: "",
    workTypeId: "",
    workHourId: "",
    deadline: "",
    description: "",
  };
  const history = useHistory();

  const validationSchema = Yup.object({
    jobTitleId: Yup.number().required("Lütfen pozisyon seçiniz!"),
    cityId: Yup.string().required("Lütfen şehir seçiniz!"),
    openTitleCount: Yup.number().required(
       "Açık pozisyon sayısı giriniz!"
    ),
    salaryMin: Yup.number().required(" Minimum maaş skalası giriniz!"),
    salaryMax: Yup.number().required("Maksimum maaş skalası giriniz!"),
    workTypeId: Yup.string().required("Bir çalışma türü seçiniz!"),
    workHourId: Yup.string().required("Bir çalışma zamanı seçiniz!"),
    deadline: Yup.date().required("Bitiş tarihini giriniz!"),
    description: Yup.string().required(" Lütfen açıklama giriniz!"),
  });

  const onSubmit = (values) => {
    values.employerId = 10;
    console.log(values);
    jobAdvertisementService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.warning("İlan Onaylandıktan Sonra Listelenecek"),
        history.push("/job-advertisements")

      );
  };

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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ setFieldValue }) => (
          <Segment color="red">
            <Form className="ui form">
              <FormGroup widths="equal">
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("jobTitleId", data.value)
                  }
                  name="jobTitleId"
                  label="Pozisyon"
                  placeholder="Pozisyon Seçiniz"
                  options={jobTitleOptions}
                />
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("cityId", data.value)
                  }
                  name="cityId"
                  label="Şehir"
                  placeholder="Şehir Seçiniz"
                  options={cityOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="openTitleCount"
                  type="number"
                  label="Açık Pozisyon Sayısı"
                  placeholder="Açık Pozisyon Sayısı"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="salaryMin"
                  type="number"
                  label="Minimum Maaş Skalası"
                  placeholder="Minimum Maaş Skalası"
                ></HrmsInput>
                <HrmsInput
                  name="salaryMax"
                  type="number"
                  label="Maksimum Maaş Skalası"
                  placeholder="Maksimum Maaş Skalası"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("workTypeId", data.value)
                  }
                  name="workTypeId"
                  label="Çalışma Türü"
                  placeholder="Çalışma Türü Seçiniz"
                  options={workTypeOptions}
                />
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("workHourId", data.value)
                  }
                  name="workHourId"
                  label="Çalışma Zamanı"
                  placeholder="Çalışma Zamanı Seçiniz"
                  options={workHourOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="deadline"
                  type="date"
                  label="Son Başvuru Tarihi"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsTextInput
                  name="description"
                  type="text"
                  label="Açıklama"
                  placeholder="Açıklama Yazınız..."
                ></HrmsTextInput>
              </FormGroup>
              <Button type="submit" color="green">
                YAYINLA
              </Button>
            </Form>
          </Segment>
        )}
      </Formik>
    </div>
  );
}