import "./css/JobDescriptionCard.css";
import React from "react";

export default function JobDescriptionCard({ jobAdvertisement: jobAdvertisement }) {
  return <div className="job-description">{jobAdvertisement.jobDescription}</div>;
}