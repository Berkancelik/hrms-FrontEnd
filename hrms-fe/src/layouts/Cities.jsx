import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import { Dropdown } from "semantic-ui-react";

export default function Cities() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));
  }, []);

  const cityOptions = cities.map((city) => ({
    key: city.id,
    text: city.name,
    value: city.name,
  }));

  return (
    <div style={{ marginTop: "15pt" }}>
      <label>Şehir</label>
      <Dropdown
        placeholder="Şehir Seç"
        fluid
        multiple
        search
        selection
        options={cityOptions}
      ></Dropdown>
    </div>
  );
}