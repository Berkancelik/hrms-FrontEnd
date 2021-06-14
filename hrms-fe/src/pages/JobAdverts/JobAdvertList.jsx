import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import jobAdvertisementService from "../../services/jobAdvertisementService";
import JobAdvert from "./JobAdvert";

export default function JobPostList({ setCurrentJobAdvert }) {
  const [jobAdverts, setJobAdverts] = useState([]);
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAllByIsConfirmed(true)
      .then((result) => setJobAdverts(result.data.data));
  }, []);
  return (
    <section className="scroll-bar job-adverts">
      <Table className="job-adverts-table">
        <Table.Body>
          {jobAdverts.map((jobAdverts, i) => (
            <Table.Row>
              <Table.Cell key={i}>
                <JobAdvert
                  setCurrentJobAdvert={setCurrentJobAdvert}
                  jobAdvert={jobAdverts}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </section>
  );
}