import "./css/JobAdvertAdd.css";

import React, { useState, useEffect } from "react";
import {Button,Checkbox,Dropdown,Input,Label, Message, Modal, TextArea,} from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CityService from "../../services/cityService";
import JobTitleService from "../../services/jobTitleService";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import WorkingTypeService from "../../services/workingTypeService";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function AddJobPostingModal({ triggerButton }) {
  let jobAdvertisementService = new JobAdvertisementService();

  const [jobTitles, setjobTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [workingTypes, setWorkingTypes] = useState([]);

  useEffect(() => {
    fetchJobAdvertisements();
    fetchCities();
    fetchWorkingTypes();
  }, []);

  const fetchWorkingTypes = () => {
    let workingTypeService = new WorkingTypeService();
    workingTypeService
      .getAll()
      .then((result) => setWorkingTypes(result.data.data));
  };

  const fetchJobAdvertisements = () => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getAll()
      .then((result) => setjobTitles(result.data.data));
  };

  const fetchCities = () => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  };

  const jobTitlesOptions = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.name,
    value: jobTitle.id,
  }));
  const citiesOptions = cities.map((city, index) => ({
    key: index,
    text: city.name,
    value: city.id,
  }));

  const workingtypeOptions = workingTypes.map(
    (workingtype, index) => ({
      key: index,
      text: workingtype.name,
      value: workingtype.id,
    })
  );

  const addJobAdvertisementSchema = Yup.object().shape({
    jobTitleId: Yup.number().required("İş pozisyonu seçilmesi gerekiyor!"),
    cityId: Yup.number().required("Şehir seçilmesi gerekiyor!"),
    workingtypeId: Yup.number().required(
      "İstihdam türü seçilmesi gerekiyor!"
    ),
    minSalary: Yup.number().min(0, "En az maaş 0'dan küçük olamaz!"),
    maxSalary: Yup.number().min(0, "En çok maaş 0'dan küçük olamaz!"),
    openPositionCount: Yup.number()
      .min(0, "Açık pozisyon sayısı 0'dan küçük olamaz!")
      .required("Açık pozisyon sayısı boş bırakılamaz!"),
    applicationDeadline: Yup.date()
      .nullable()
      .required("Son başvuru tarihi seçilmesi gerekiyor!"),
    jobDescription: Yup.string().required("İş açıklaması boş bırakılamaz!"),
  });

  const formik = useFormik({
    initialValues: {
      jobTitleId: "",
      cityId: "",
      workingtypeId: "",
      minSalary: "",
      maxSalary: "",
      openPositionCount: "",
      deadline: "",
      jobDescription: "",
      isRemote: false,
    },
    validationSchema: addJobAdvertisementSchema,
    onSubmit: (values) => {
      let jobAdvertisement = {
        jobTitle: {
          id: values.jobTitleId,
        },
        city: {
          id: values.cityId,
        },
        workingtype: {
          id: values.workingtypeId,
        },
        employer: {
          id: 3, // fakeid
        },
        minSalary: values.minSalary,
        maxSalary: values.maxSalary,
        openPositionCount: values.openTitleCount,
        deadline: values.deadline,
        description: values.description,
        isRemote: values.isRemote,
      };
      jobAdvertisementService.add(jobAdvertisement).then((result) => console.log(result));
    },
  });

  const handleFormErrorMessages = () => {
    let errorMessages = Object.keys(formik.errors).map((key, i) => {
      return formik.errors[key];
    });
    return errorMessages;
  };

  const [open, setOpen] = useState(false);

  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={triggerButton}
        size="tiny"
        closeIcon
      >
        <Modal.Header>İş ilanı ekle</Modal.Header>
        <Modal.Content>
          <form onSubmit={formik.handleSubmit}>
            <Modal.Description>
              <div style={{ marginBottom: "1rem" }}>
                {handleFormErrorMessages().length > 0 && (
                  <Message
                    error
                    header="Aşağıdaki uyarıları dikkate alınız!"
                    list={handleFormErrorMessages()}
                  />
                )}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="Pozisyon seçin"
                  search
                  selection
                  error={formik.errors.jobTitleId ? true : false}
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "jobTitleId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="jobTitleId"
                  value={formik.values.jobTitleId}
                  options={jobTitlesOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  placeholder="Şehir seçin"
                  search
                  error={formik.errors.cityId ? true : false}
                  selection
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "cityId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="cityId"
                  value={formik.values.cityId}
                  options={citiesOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <Dropdown
                  className="width-100-percent"
                  item
                  error={formik.errors.workingtypeId ? true : false}
                  placeholder="İstihdam türü seçin"
                  search
                  selection
                  onChange={(event, data) => {
                    handleChangeSemantic(data.value, "workingtypeId");
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.onBlur}
                  id="workingtypeId"
                  value={formik.values.workingtypeId}
                  options={workingtypeOptions}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="width-40-percent display-inline-block"
                  style={{ marginRight: "5rem" }}
                >
                  <Input
                    labelPosition="right"
                    type="number"
                    placeholder="En az maaş"
                    error={formik.errors.minSalary ? true : false}
                    value={formik.values.minSalary}
                    name="minSalary"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                </div>
                <div className="width-40-percent display-inline-block">
                  <Input
                    labelPosition="right"
                    type="number"
                    placeholder="En fazla maaş"
                    error={formik.errors.maxSalary ? true : false}
                    value={formik.values.maxSalary}
                    name="maxSalary"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    onBlur={formik.handleBlur}
                  >
                    <input />
                    <Label>₺</Label>
                  </Input>
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <div
                  className="display-inline-block"
                  style={{ width: "43%", marginRight: "3rem" }}
                >
                  <Input
                    className="width-100-percent"
                    name="openPositionCount"
                    error={formik.errors.openPositionCount ? true : false}
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleFormErrorMessages();
                    }}
                    value={formik.values.openPositionCount}
                    onBlur={formik.handleBlur}
                    type="number"
                    placeholder="Açık pozisyon sayısı"
                  />
                </div>
                <div className="display-inline-block" style={{ width: "46%" }}>
                  <SemanticDatepicker
                    error={formik.errors.deadline ? true : false}
                    onChange={(event, data) => {
                      handleChangeSemantic(data.value, "deadline");
                      handleFormErrorMessages();
                    }}
                    value={formik.values.deadline}
                    onBlur={formik.handleBlur}
                    name="deadline"
                    placeholder="Son başvuru tarihi"
                  />
                </div>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <TextArea
                  placeholder="İş açıklaması (tüm detaylarıyla)"
                  className="width-100-percent"
                  style={{ minHeight: 100 }}
                  value={formik.values.description}
                  name="description"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleFormErrorMessages();
                  }}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div style={{  float: "right", padding: "1rem",
                  borderTop: "1px solid #EBEBEBEB",
                }}
                className="width-100-percent"
              >
                <div style={{ float: "right" }}>
                  <Checkbox   toggle
                    name="isRemote"  onChange={(event, data) => {
                      handleChangeSemantic(data.checked, "isRemote");
                    }}
                    onBlur={formik.handleBlur}
                    label="Uzaktan"
                  />
                  <Button content="Ekle"  labelPosition="right"  icon="add" positive type="submit"  style={{ marginLeft: "20px" }}  />
                </div>
              </div>
            </Modal.Description>
          </form>
        </Modal.Content>
      </Modal>
    </div>
  );
}
