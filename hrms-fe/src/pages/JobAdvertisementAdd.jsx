import React, { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitleService";
import CityService from "../services/cityService";
import WorkHourService from "../services/workHourService";
import { Button, Dropdown, Input, TextArea, Form, Grid } from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";
import JobAdvertisementService from "../services/jobAdvertisementService";
import * as Yup from "yup";
import { useFormik } from "formik";
export default function JobAdvertisementAdd({triggerButton}) {


  const JobPostingAddSchema = Yup.object().shape({
    deadLine: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workHourId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openTitleCount: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
  });


  const formik = useFormik({
    initialValues: {
      deadLine: "",
      description: "",
      jobTitleId: "",
      workTypeId: "",
      workHourId: "",
      openTitleCount: "",
      cityId: "",
      maxSalary: "",
      minSalary: "",
      
    },
    validationSchema: JobPostingAddSchema,


    onSubmit: (values) => {
      values.employerId = 14; 

   console.log(values)
    }


  });



  
  let jobAdvertisementService = new JobAdvertisementService();
  
  const [cities, setCities] = useState([]);
  const [jobTitles, setJobTitles] = useState([]);
  const [workHours, setWorkHours] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);

  useEffect(() => {
  let jobTitleService = new jobTitleService();
  let cityService = new CityService();
  let workHourService = new WorkHourService();
  let workTypeService = new WorkTypeService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
    
  }, []);


  const workHourOption = workHours.map((workHour,index)=>({
    key: index,
    text:workHour.workHour,
    value: workHour.id
  }))


  const workTypeOption = workTypes.map((workType,index)=>({
    key: index,
    text:workType.workType,
    value: workType.id
  }))

  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const jobTitleOption = jobTitles.map((jobTitles, index) => ({
    key: index,
    text: jobTitles.jobTitle,
    value: jobTitles.id,
  }));

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  }


  return (

    <div >
     
      <div>
<Form onSubmit={formik.handleSubmit}>
  <Form.Field>
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
      <Dropdown
        clearable
        item
        placeholder="İş Başlığı"
        search
        selection
        onChange={(event, data) =>
          handleChangeSemantic(data.value, "jobTitleId")
        }
        onBlur={formik.onBlur}
        id="jobTitleId"
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
    <Dropdown
            clearable
            item
            placeholder="Çalışma Tipi"
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
            <div className={"ui pointing red basic label"}>{formik.errors.workTypeId}</div>
          )}
        </Form.Field>

        <Form.Field>
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
            <div className={"ui pointing red basic label"}>{formik.errors.workHourId}</div>
          )}
        </Form.Field>

        <Form.Field>
          
        <Grid stackable>
        <Grid.Column width={8}>
          <Input
            style={{ width: "100%" }}
            type="number"
            placeholder="Minimum Maaş"
            value={formik.values.salaryMin}
            name="minSalary"  
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </Input>
          {formik.errors.minSalary && formik.touched.minSalary && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.minSalary}
            </div>
          )}
          </Grid.Column>
          <Grid.Column width={8}>
          <Input
            style={{ width: "100%" }}
            type="number"
            placeholder="Maksimum Maaş"
            value={formik.values.maxSalary}
            name="maxSalary"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
          </Input>
          {formik.errors.maxSalary && formik.touched.maxSalary && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.maxSalary}
            </div>
          )}
          </Grid.Column>
          </Grid>
        </Form.Field>

        

        <Form.Field>
        <Grid stackable>
        <Grid.Column width={8}>
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
          {formik.errors.openTitleCount && formik.touched.openTitleCount && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.openTitleCount}
            </div>
          )}
          </Grid.Column>
          <Grid.Column width={8}>
          <Input
            style={{ width: "100%" }}
            type="date"
            error={Boolean(formik.errors.deadLine)}
            onChange={(event, data) =>
              handleChangeSemantic(data.value, "deadLine")
            }
            value={formik.values.deadLine}
            onBlur={formik.handleBlur}
            name="deadLine"
            placeholder="Son başvuru tarihi"
          />
          {formik.errors.deadLine && formik.touched.deadLine && (
            <div className={"ui pointing red basic label"}>
              {formik.errors.deadLine}
            </div>
          )}
          </Grid.Column>
          </Grid>
        </Form.Field>

        <Form.Field>
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
          primary
          type="submit"
          style={{ marginLeft: "20px" }}
        />
</Form>

</div>


    </div>
  );
}