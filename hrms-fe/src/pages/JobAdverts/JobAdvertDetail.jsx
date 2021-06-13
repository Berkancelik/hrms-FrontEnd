import "./css/jobAdvertDetails.css";

import React from "react";
import JobInformationCard from "./JobInformationCard";
import JobDescriptionCard from "./JobDescriptionCard";
import JobSalary from "./JobSalary";

export default function jobAdvertDetails({ jobAdvert }) {
  return (
    <div>
      {jobAdvert && (
        <section className="scroll-bar job-post-details">
          <div style={{ padding: "16px 12px" }}>
            <div style={{ paddingTop: "24px" }}>
              <JobInformationCard jobAdvert={jobAdvert} />
            </div>
            <div>
              <JobDescriptionCard jobAdvert={jobAdvert} />
              <JobSalary jobAdvert={jobAdvert} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}