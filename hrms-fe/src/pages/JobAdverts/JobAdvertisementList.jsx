import "./css/JobAdvertList.css";
import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import jobAdvertisementService from "../../services/jobAdvertisementService";
export default function JobAdvertisementList(setCurrentJobAdvert) {
  
  
  const[jobAdvertisements, setJobAdvertisements] =  useState([]); 


  useEffect(() => {
    let jobAdvert = new jobAdvertisementService();
    jobAdvert
      .getjobAdvertisements()
      .then((result) => setJobAdvertisements(result.data.data));
  }, []);

  return (
    <section className="scroll-bar job-adverts">
      <Table className="job-adverts-table">
        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement, i) => (
            <Table.Row>
              <Table.Cell key={i}>
                <JobPost
                  setCurrentJobAdvert={setCurrentJobAdvert}
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