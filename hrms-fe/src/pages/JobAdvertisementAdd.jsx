import { useToasts } from "react-toast-notifications";
import { Formik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AdvertisementService from "../../services/advertisementService";
import { useSelector } from "react-redux";
import HRMSCustomField from "../../utils/CustomFormControls/HRMSCustomField";
export default function AddJobAdvertisement() {
  const { cities, error, pending } = useSelector((state) => state.allCities);
  const { workTypes, errorWorkTypes, pendingworkTypes } = useSelector((state) => state.workTypes);
  const { jobTitles, errorJobtitles, pendingJobTitles } = useSelector((state) => state.jobTitles);
  const { addToast } = useToasts();
  const initialValues = {
    city: "",
    jobtitle: "",
    workType: "",
    description: "",
    openTitleCount: 1,
    salaryMax: 0,
    salaryMin: 0,
    deadline: new Date(),
  };
  const schema = Yup.object({
    city: Yup.string().required("Lütfen Şehir Seçiniz"),
    jobtitle: Yup.string().required("Lütfen Pozisyon Seçiniz"),
    workType: Yup.string().required("Lütfen İş Türü Seçiniz"),
    description: Yup.string().required("Lütfen Açıklama Giriniz"),
    openTitleCount: Yup.number().required("Lütfen Pozisyon Sayısını Giriniz"),
    salaryMax: Yup.number(),
    salaryMin: Yup.number(),
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          let advertisementService = new AdvertisementService();
          values.city = JSON.parse(values.city);
          values.jobtitle = JSON.parse(values.jobtitle);
          values.workType = JSON.parse(values.workType);
          advertisementService.add(values).then((result) => {
            addToast(result.data.message, { appearance: result.data.success ? "success" : "error", autoDismiss: true });
          });
        }}
        handleChange={(change) => console.log(change)}
      >
        {({ handleSubmit, dirty, isSubmitting }) => (
          <form className="add-job-advertisement-form p-4" onSubmit={handleSubmit}>
            <h5 className="font-weight-bold text-center">İlan Oluştur</h5>
            <small className="d-block text-center text-muted">İlan Oluştur, Aradığın Liyakate Ulaş...</small>
            <hr />
            <div className="row mb-2">
              <div className="col-md-4">
                <HRMSCustomField as="select" name="city">
                  <option value="" disabled hidden>
                    Şehir Seçiniz
                  </option>
                  {cities.map((city) => (
                    <option key={city.id} value={JSON.stringify(city)}>
                      {city.cityName}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="select" name="jobtitle">
                  <option value="" disabled hidden>
                    Pozisyon Seçiniz
                  </option>
                  {jobTitles.map((jobTitle) => (
                    <option key={jobTitle.id} value={JSON.stringify(jobtitle)}>
                      {jobTitle.jobTitle}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="select" name="workType">
                <option value="" disabled hidden>
                  İş Türü Seçiniz
                </option>
                  {workTypes.map((workType) => (
                    <option key={workType.id} value={JSON.stringify(workType)}>
                      {workType.workType}
                    </option>
                  ))}
                </HRMSCustomField>
              </div>
            </div>
            <HRMSCustomField as="textarea" rows="4" label="Açıklama;" name="description" placeholder="Açıklama" />
            <div className="row">
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Açık Pozisyon Adedi;" name="openTitleCount" placeholder="0" />
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Minimum Ücret;" name="salaryMin" />
              </div>
              <div className="col-md-4">
                <HRMSCustomField as="input" label="Maksimum Ücret;" name="salaryMax" />
              </div>
            </div>
            <button type="submit" disabled={!dirty || isSubmitting} className="btn btn-main mt-3 btn-block text-light">
              <FontAwesomeIcon icon={faCheckCircle} /> Kaydet
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}