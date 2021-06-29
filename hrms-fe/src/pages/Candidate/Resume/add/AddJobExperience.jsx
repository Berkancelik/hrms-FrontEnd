import React from "react";
import { Formik, Form } from "formik";
import JobExperienceService from "../../../../services/jobExperienceService";
import { useState } from "react";
import { useEffect } from "react";
import HrmsInput from "../../../../utilities/customFormControls/HrmsInput";
import HrmsDropdown from "../../../../utilities/customFormControls/HrmsDropdown";
import { FormGroup, Button, Segment } from "semantic-ui-react";
import JobTitleService from "../../../../services/jobTitleService";
import { toast } from "react-toastify";

export default function AddJobExperience({ id }) {
  let jobExperienceService = new JobExperienceService();

  const [jobTitles, setjobTitles] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getjobTitles()
      .then((result) => setjobTitles(result.data.data));
  }, []);

  const initialValues = {
    companyName: "",
    jobTitleId: "",
    startedDate: "",
    endedDate: "",
  };
  const onSubmit = (values) => {
    values.id = id;
    console.log(values);
    jobExperienceService
      .add(values)
      .then(
        (result) => console.log(result.data.data),
        toast.success("İş Deneyimi Eklendi"),
        window.location.reload()
      );
  };

  const jobtitleOptions = jobTitles.map((jobTitle) => ({
    key: jobTitle.jobTitleId,
    text: jobTitle.positionName,
    value: jobTitle.jobTitleId,
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
                    setFieldValue("jobTitleId", data.value)
                  }
                  name="jobTitleId"
                  label="Pozisyon"
                  placeholder="Pozisyon Seçiniz"
                  options={jobtitleOptions}
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
              <Button style={{marginLeft:"295pt"}} type="submit" color="green">
                EKLE
              </Button>
            </Form>
          </Segment>
        )}
      </Formik>
    </div>
  );
}