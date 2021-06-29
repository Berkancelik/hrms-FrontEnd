import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import WorkExperienceService from "../../../../services/workExperienceService";
import { useState } from "react";
import { useEffect } from "react";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import HrmsDropdown from "../../../../utilities/customFormControls/HrmsDropdown";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import JobTitleService from "../../../../services/jobTitleService";
import { toast } from "react-toastify";

export default function UpdateJobExperience({id,companyName,jobTitleId,startedDate,endedDate}) {
  let workExperienceService = new WorkExperienceService();

  const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setJobTitles(result.data.data));
  }, []);

  const initialValues = {
    companyName: companyName,
    jobTitleId: jobTitleId,
    startedDate: startedDate,
    endedDate: endedDate,
  };
  const onSubmit = (values) => {
    values.id = id
    console.log(values);
    workExperienceService
      .update(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("İş Deneyimi Güncellendi"),
        window.location.reload()
      );
  };

  const jobTitleOptions = jobTitles.map((jobTite) => ({
    key: jobTite.id,
    text: jobTite.jobTite,
    value: jobTite.id,
  }));
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ setFieldValue }) => (
          <Segment color="green">
            <Form className="ui form">
              <FormGroup widths="equal">
                <HrmsInput
                  name="companyName"
                  type="text"
                  label="Çalışma Yeri"
                  placeholder="Çalışma Yeri"
                ></HrmsInput>
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsDropdown
                  onChange={(fieldName, data) =>
                    setFieldValue("id", data.value)
                  }
                  name="id"
                  label="Pozisyon"
                  placeholder="Pozisyon Seçiniz"
                  options={jobTitleOptions}
                />
              </FormGroup>
              <FormGroup widths="equal">
                <HrmsInput
                  name="startedDate"
                  type="date"
                  label="Başlangıç Tarihi"
                ></HrmsInput>
                <HrmsInput
                  name="endedDate"
                  type="date"
                  label="Bitiş Tarihi"
                ></HrmsInput>
              </FormGroup>
              <Button type="submit" color="green">
                GÜNCELLE
              </Button>
            </Form>
          </Segment>
        )}
      </Formik>
    </div>
  );
}