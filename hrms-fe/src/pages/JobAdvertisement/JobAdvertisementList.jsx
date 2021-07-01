import React, { useState, useEffect } from "react";
import JobAdvertisementService from "../services/jobAdvertisementService";
import {Card,Icon,Image,Grid,Pagination,Select,Menu,Container,} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AddFavorite from "./Jobseeker/Favorite/AddFavorite";
import FilterJobAdvertisement from "../layouts/FilterJobAdvertisement";

export default function JobAdvertsiementList() {
  const [jobAdvertisementFilters, setJobAdvertisementFilters] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  const handleChangePageNo = (event, { activePage }) => {
    setPageNo(activePage);
  };

  const handleChangePageSize = (event, { value }) => {
    setPageSize(value);
  };

  const pageSizeOptions = [
    { key: 2, value: 10, text: "10 İLAN" },
    { key: 3, value: 20, text: "20 İLAN" },
    { key: 5, value: 50, text: "50 İLAN" },
    { key: 5, value: 100, text: "100 İLAN" },
  ];

  const sortOptions = [
    { key: 2, value: 10, text: "10 İLAN" },
    { key: 3, value: 20, text: "20 İLAN" },
  ];

  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByFilter(jobAdvertisementFilters, pageNo, pageSize)
      .then((result) => {
        setJobAdvertisements(result.data.data);
        setTotalPages(parseInt(result.data.message));
      });
  }, [jobAdvertisementFilters, pageNo, pageSize]);

  const handleFilter = (jobAdvertisementFilters) => {
    if (jobAdvertisementFilters.jobTitleId.length === 0) {
      jobAdvertisementFilters.jobTitleId = null;
    }
    if (jobAdvertisementFilters.cityId.length === 0) {
      jobAdvertisementFilters.cityId = null;
    }
    if (jobAdvertisementFilters.workTypeId.length === 0) {
      jobAdvertisementFilters.workTypeId = null;
    }
    if (jobAdvertisementFilters.workHourId.length === 0) {
      jobAdvertisementFilters.workHourId = null;
    }

    setJobAdvertisementFilters(jobAdvertisementFilters);
    setPageNo(1);
  };
  return (
    <div>
      <Menu className="fixedMenu" size="small">
        <Container className="app">
          <Menu.Item>İŞ İLANLARI</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              Bir Sayfadaki İlan Sayısı{" "}
              <Select
                placeholder="Seçiniz"
                onChange={handleChangePageSize}
                options={pageSizeOptions}
              ></Select>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
      <Container>
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={4}>
              <div className="filters">
                <FilterJobAdvertisement
                  jobAdvertisementFilters={handleFilter}
                ></FilterJobAdvertisement>
              </div>
            </Grid.Column>
            <Grid.Column width={12}>
              <Card.Group style={{ marginTop: "115pt" }}>
                {jobAdvertisements.map((jobAdvertisement) => (
                  <Card color="yellow" fluid style={{ marginLeft: "10pt" }}>
                    <Card.Header textAlign="right">
                      Favorilere Ekle
                      <AddFavorite
                        candidateId={21}
                        id={jobAdvertisement.id}
                      ></AddFavorite>
                    </Card.Header>
                    <Card.Content
                      as={NavLink}
                      to={`/jobAdvertisements/${jobAdvertisement.id}`}
                    >
                      {!jobAdvertisement.employer.image ? (
                        <Image
                          rounded
                          floated="left"
                          size="tiny"
                          src="https://image.flaticon.com/icons/png/128/2107/2107820.png"
                        ></Image>
                      ) : (
                        <Image
                          rounded
                          floated="left"
                          size="tiny"
                          src={jobAdvertisement.employer.image.url}
                        ></Image>
                      )}
                      <Card.Header>
                        {jobAdvertisement.jobTitle.jobTitle}
                      </Card.Header>
                      <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
                      <Card.Meta>{jobAdvertisement.workHour.workHour}</Card.Meta>
                      <Card.Description>
                        <Icon name="map marker alternate" />
                        {jobAdvertisement.city.name}
                      </Card.Description>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
              <Pagination
                style={{ marginTop: "25pt" }}
                firstItem={null}
                lastItem={null}
                activePage={pageNo}
                onPageChange={handleChangePageNo}
                totalPages={totalPages}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}