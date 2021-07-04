import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import WorkHourService from "../services/workHourService";
import { Dropdown } from "semantic-ui-react";

export default function WorkHours() {
  const [workHours, setWorkHours] = useState([]);

  useEffect(() => {
    let workHourService = new WorkHourService();
    workHourService
      .getWorkHours()
      .then((result) => setWorkHours(result.data.data));
  });

  const workHourOptions = workHours.map((workHour) => ({
    key: workHour.id,
    text: workHour.workHour,
    value: workHour.id,
  }));

  return (
    <div style={{ marginTop: "15pt" }}>
      <label>Çalışma Zamanı</label>
      <Dropdown
        placeholder="Çalışma Zamanı Seçin"
        fluid
        multiple
        search
        selection
        options={workHourOptions}
      ></Dropdown>
    </div>
  );
}