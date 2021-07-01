import React from "react";
import { useState, useEffect } from "react";
import {Button,Card,Icon,Pagination,Message,Select} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import JobAdvertisementService from "../../services/jobAdvertisementService";

export default function ConfirmJobAdvertisement() {
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

  let jobAdvertisementService = new JobAdvertisementService;

  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByConfirmFalseAndActiveTrue(pageNo, pageSize)
      .then((result) => {
        setJobAdvertisements(result.data.data);
        setTotalPages(parseInt(result.data.message));
      });
  }, [pageNo, pageSize]);

  const confirm = (id) => {
    jobAdvertisementService
      .confirm(id)
      .then(toast.success("İLAN ONAYLANDI"), window.location.reload());
  };

  return (
    <div>
      <Message size="large">
        ONAY BEKLEYEN İŞ İLANLARI Bir Saydaki İlan Sayısı{" "}
        <Select
          onChange={handleChangePageSize}
          placeholder="Seçiniz"
          options={pageSizeOptions}
        />
      </Message>
      <Card.Group>
        {jobAdvertisements.map((jobAdvertisement) => (
          <Card fluid>
            <Card.Content>
              <Card.Header>{jobAdvertisement.jobTitle.jobTitle}</Card.Header>
              <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
              <Card.Description>
                <Icon name="map marker alternate" />
                {jobAdvertisement.city.name}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className="ui two buttons">
                <Button
                  onClick={() => confirm(jobAdvertisement.id)}
                  inverted
                  color="green"
                >
                  ONAYLA
                </Button>
                <Button
                  as={NavLink}
                  to={`/examinejobAdvertisement/${jobAdvertisement.id}`}
                  inverted
                  color="blue"
                >
                  İNCELE
                </Button>
              </div>
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
    </div>
  );
}