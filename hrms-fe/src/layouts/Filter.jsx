import React, { useState, useEffect } from "react";
import CityService from "../services/cityService";
import JobTitleService from "../services/jobTitleService";

import {
  Container,
  Header,
  Segment,
  Grid,
  Icon,
  Button,
  Dropdown,
} from "semantic-ui-react";
import WorkTypeService from "../services/workTypeService";
import WorkHourService from "../services/workHourService";

export default function Filter({ clickEvent }) {
  const [cities, setCities] = useState([]);
  const [titles, setTitles] = useState([]);
  const [workType, setworkType] = useState([]);
  const [workHour, setWorkHour] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getAll().then((result) => setCities(result.data.data));

    let titleService = new JobTitleService();
    titleService.getJobTitles().then((result) => setTitles(result.data.data));

    let workTypeService = new WorkTypeService();
    workTypeService
      .getWorkTypes()
      .then((result) => setworkType(result.data.data));

    let workHourService = new WorkHourService();
    workHourService
      .getWorkHours()
      .then((result) => setWorkHour(result.data.data));
  }, []);

  const [cityIndex, setCityIndex] = useState([]);
  const handleChangeCity = (e, { value }) => {
    setCityIndex(value);
  };

  const [jobTitleIndex, setjobTitleIndex] = useState([]);
  const handleChangeJobTitle = (e, { value }) => {
    setjobTitleIndex(value);
  };

  const [workTypeIndex, setworkTypeIndex] = useState([]);
  const handleChangeWorkType = (e, { value }) => {
    setworkTypeIndex(value);
  };
  const [workHourIndex, setWorkHourIndex] = useState([]);
  const handleChangeWorkHour = (e, { value }) => {
    setWorkHourIndex(value);
  };

  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 500, padding: "1em 0em" }}
        vertical
      >
        <Container>
          <Header
            as="h2"
            content="Yeni İşinizi Almanın En Kolay Yolu"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              marginBottom: 0,
              marginTop: "1.1em",
            }}
          />
          <Segment inverted color="grey">
            <Segment inverted color="grey">
              <Grid columns="equal" textAlign="center">
                <Grid.Row verticalAlign="middle">
                  <Grid.Column>
                    <Dropdown
                      placeholder="Şehir"
                      selection
                      search
                      multiple
                      clearable
                      options={cities.map((city, index) => {
                        return {
                          text: city.cityName,
                          key: city.index,
                          value: city.id,
                        };
                      })}
                      onChange={handleChangeCity}
                      value={cityIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Çalışma Zamanı"
                      selection
                      search
                      multiple
                      clearable
                      options={workHour.map((workHour, index) => {
                        return {
                          text: workHour.workHour,
                          key: workHour.index,
                          value: workHour.id,
                        };
                      })}
                      onChange={handleChangeWorkHour}
                      value={workHourIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Çalışma Tipi"
                      selection
                      search
                      multiple
                      clearable
                      options={workType.map((workType, index) => {
                        return {
                          text: workType.workType,
                          key: workType.index,
                          value: workType.id,
                        };
                      })}
                      onChange={handleChangeWorkType}
                      value={workTypeIndex}
                    />
                  </Grid.Column>

                  <Grid.Column>
                    <Dropdown
                      placeholder="Pozisyon..."
                      selection
                      search
                      multiple
                      clearable
                      options={titles.map((jobTitle, index) => {
                        return {
                          text: jobTitle.jobTitle,
                          key: jobTitle.index,
                          value: jobTitle.id,
                        };
                      })}
                      onChange={handleChangeJobTitle}
                      value={jobTitleIndex}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Button
                      animated
                      basic
                      inverted
                      color="violet"
                      size="massive"
                      onClick={() =>
                        clickEvent({
                          cityId: cityIndex,
                          jobTitleId: jobTitleIndex,
                          workTypeId: workTypeIndex,
                          workHourId: workHourIndex,
                        })
                      }
                    >
                      <Button.Content visible>Filtrele</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </Segment>
        </Container>
      </Segment>
    </div>
  );
}