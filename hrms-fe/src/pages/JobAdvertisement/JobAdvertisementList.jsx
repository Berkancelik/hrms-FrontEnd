import React, { useState, useEffect } from "react";
import {Button,Container, Divider, Header, Segment, Card, Icon, Pagination,} from "semantic-ui-react";
import { NavLink} from "react-router-dom";
import Filter from '../../layouts/Filter'
import JobAdvertisementService from "../../services/jobAdvertisementService";
import FavoriteService from "../../services/favoriteService";
import swal from "sweetalert";
export default function JobAdvertisementList() {

  const [pageNo, setPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [pageSize] = useState(4);
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    let jobPostService = new JobAdvertisementService();
    jobPostService
      .getByisActiveTrueAndConfirmStatusTrueAndFilter(pageNo,pageSize,filter)
      .then((result) => setJobPosts(result.data.data));
  }, [filter,pageNo,pageSize]);


  const handleFilterClick = (filter) => {
    if(filter.cityId.length === 0){
      filter.cityId = null;
    }
    if(filter.jobTitleId.length === 0){
      filter.jobTitleId = null;
    }
    if(filter.workTypeId.length === 0){
      filter.workTypeId = null;
    }
    if(filter.workHourId.length === 0){
      filter.workHourId = null;
    }
    setFilter(filter);
    setPage(1);
  }

  const handlePaginationChange = (e, { activePage }) => {
    setPage(activePage);
  }

 
  const addtoFavorites=()=>{
    let favoriteService=new FavoriteService();
    const favorite={
      candidateId:1,
      jobAdvertisementId:32
    }
    favoriteService.add(favorite).then(swal("Başarılı!", "Favorilere eklendi!", "success"));
  }

  return (
    <div>
      <Filter  clickEvent={handleFilterClick}/>
      <Segment circle="true"  style={{ padding: "8em 0em" }} vertical>
        <Container>
          
          <Header circle="true" as="h3" style={{ fontSize: "3em" }}>
            Recent Job
          </Header>
          <Card.Group itemsPerRow={4}>
            {jobPosts.map((jobPost) => (
              <Card
                color="violet"
                circle="true"
                style={{
                  minHeight: 350,
                  fontSize: "1.2em",
                  fontWeight: "normal",
                  padding: "3.4em 0.50em",
                }}
                key={jobPost.id}>

         

     
                <Card.Content >
                <Card.Meta>
                <Button
                onClick={()=>addtoFavorites()}
                    circular
                    style={{ marginLeft: "9em" }}
                    size="large"
                    color="violet"
                    icon="heart"
                    inverted
                  >
                 
                  </Button>
                </Card.Meta>
                  <Icon
                    color="violet"
                    style={{ paddingBottom: "1.7em" }}
                    size="huge"
                    name="briefcase"
                  />

                  <Card.Header>{jobPost.jobTitle.jobTitle}</Card.Header>
                  <Card.Meta>{jobPost.employer.companyName}</Card.Meta>
                  <Card.Description>
                    {" "}
                    <Icon name="map marker" /> {jobPost.city.cityName}
                  </Card.Description>
                  <Card.Description>
                    {jobPost.minSalary} <Icon name="lira" /> -{" "}
                    {jobPost.maxSalary} <Icon name="lira" />
                  </Card.Description>
                  <Card.Description>
                    {" "}
                    <Icon name="user" /> {jobPost.openTitleCount}
                  </Card.Description>
                  <Card.Description>
                    {" "}
                    <Icon name="time" /> {jobPost.workHour?.workHour}
                  </Card.Description>
                </Card.Content>

                <Divider>
                  <Button
                    as={NavLink}
                    to={`/jobadvertisements/${jobPost.id}`}
                    circular
                    style={{ marginTop: "0.90em" }}
                    size="big"
                    inverted
                    color="blue"
                  >
                    İlana Git
                  </Button>
                </Divider>
              </Card>
            ))}
          </Card.Group>
          <br />
          <Pagination
           
            boundaryRange={1}
            siblingRange={1}
            onPageChange={handlePaginationChange}
            style={{ marginTop: "3.5em" }}
            defaultActivePage={1}
            pointing
            secondary
            circle="true"
            size="massive"
            totalPages={5}
          
          />
        </Container>
      </Segment>
    </div>
  );
}