import "./css/jobAdvertisementDetails.css";

import React from "react";
import JobInformationCard from "./JobInformationCard";
import JobDescriptionCard from "./JobDescriptionCard";
import JobSalary from "./JobSalary.jsx";

export default function jobAdvertisementDetails({ jobAdvertisement }) {
  return (
    <div>
      {jobAdvertisement && (
        <section className="scroll-bar job-post-details">
          <div style={{ padding: "16px 12px" }}>
            <div style={{ paddingTop: "24px" }}>
              <JobInformationCard jobAdvertisement={jobAdvertisement} />
            </div>
            <div>
              <JobDescriptionCard jobAdvertisement={jobAdvertisement} />
              <JobSalary jobAdvertisement={jobAdvertisement} />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}