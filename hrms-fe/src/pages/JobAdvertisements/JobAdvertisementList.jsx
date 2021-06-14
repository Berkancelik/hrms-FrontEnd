import "./css/JobAdvertList.css";
import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import JobAdvert from "./JobAdvert";

export default function JobAdvertisementList(setCurrentJobAdvertisement) {

    const [jobAdvertisements, setjobAdvertisements] = useState([]);
    useEffect(() => {
      let jobAdvertisementService = new JobAdvertisementService();
      jobAdvertisementService
        .getAllByIsConfirmed(true)
        .then((result) => setjobAdvertisements(result.data.data));
    }, []);

  return (
    <section className="scroll-bar job-adverts">
      <Table className="job-adverts-table">
        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement, i) => (
            <Table.Row>
              <Table.Cell key={i}>
                <JobAdvert
                  setCurrentJobAdvertisement={setCurrentJobAdvertisement}
                  jobAdvert={jobAdvertisement}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}