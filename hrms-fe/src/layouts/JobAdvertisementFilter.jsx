import React, { useEffect, useState } from "react";
import { Dropdown, Button } from "semantic-ui-react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";
import WorkHourService from "../services/workHourService";
import WorkTypeService from "../services/workTypeService";

export default function JobAdvertisementFilter({ jobPostingFilters }) {
  const [jobtitles, setTitles] = useState([]);
  const [cities, setCities] = useState([]);
  const [workTypes, setWorkTypes] = useState([]);
  const [workTimes, setHours] = useState([]);

  useEffect(() => {
    let jobTitleService = new JobTitleService();
    jobTitleService
      .getJobTitles()
      .then((result) => setTitles(result.data.data));

    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));

    let workHourService = new WorkHourService();
    workHourService
      .getWorkHours()
      .then((result) => setHours(result.data.data));
  }, []);

  const jobTitleOptions = jobtitles.map((jobtitle) => ({
    key: jobtitle.id,
    text: jobtitle.jobtitle,
    value: jobtitle.id,
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

  const workHourOptions = workTimes.map((workTime) => ({
    key: workTime.id,
    text: workTime.workTime,
    value: workTime.id,
  }));

  const [jobtitleId, setJobtitleId] = useState([]);
  const handleChangeJobtitleId = (event, { value }) => {
  setJobtitleId(value);
  };

  const [cityId, setCityId] = useState([]);
  const handleChangeCityId = (event, { value }) => {
    setCityId(value);
  };
  const [workTypeId, setWorkTypeId] = useState([]);
  const handleChangeWorkTypeId = (event, { value }) => {
    setWorkTypeId(value);
  };
  const [workHourId, setWorkHourId] = useState([]);
  const handleChangeWorkHourId = (event, { value }) => {
    setWorkHourId(value);
  };
  return (
    <div>
      <label>Pozisyon</label>
      <Dropdown
        placeholder="Pozisyon Seç"
        fluid
        multiple
        search
        selection
        options={jobTitleOptions}
        value={jobtitleId}
        onChange={handleChangeJobtitleId}
      />

      <div style={{ marginTop: "15pt" }}>
        <label>Şehir</label>
        <Dropdown
          placeholder="Şehir Seç"
          fluid
          multiple
          search
          selection
          options={cityOptions}
          value={cityId}
          onChange={handleChangeCityId}
        ></Dropdown>
      </div>

      <div style={{ marginTop: "15pt" }}>
        <label>Çalışma Türü</label>
        <Dropdown
          placeholder="Çalışma Türü Seçin"
          fluid
          multiple
          search
          selection
          options={workTypeOptions}
          value={workTypeId}
          onChange={handleChangeWorkTypeId}
        ></Dropdown>
      </div>

      <div style={{ marginTop: "15pt" }}>
        <label>Çalışma Zamanı</label>
        <Dropdown
          placeholder="Çalışma Zamanı Seçin"
          fluid
          multiple
          search
          selection
          options={workHourOptions}
          value={workHourId}
          onChange={handleChangeWorkHourId}
        ></Dropdown>
      </div>
      <Button
        type="button"
        onClick={() =>
          jobPostingFilters({
            jobtitleId: jobtitleId,
            cityId: cityId,
            workTypeId: workTypeId,
            workHourId: workHourId,
          })
        }
        fluid
        primary
        style={{ marginTop: "15pt" }}
      >
        FİLTRELE
      </Button>
    </div>
  );
}