import React from "react";
import { useState, useEffect } from "react";
import WorkTypeService from "../services/workTypeService";
import { Dropdown } from "semantic-ui-react";

export default function WorkTypes() {
  const [workTypes, setWorkTypes] = useState([]);

  useEffect(() => {
    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setWorkTypes(result.data.data));
  }, []);

  const workTypeOptions = workTypes.map((workType) => ({
    key: workType.id,
    text: workType.workType,
    value: workType.id,
  }));

  return (
    <div style={{ marginTop: "15pt" }}>
      <label>Çalışma Türü</label>
      <Dropdown
        placeholder="Çalışma Türü Seçin"
        fluid
        search
        selection
        options={workTypeOptions}
      ></Dropdown>
    </div>
  );
}