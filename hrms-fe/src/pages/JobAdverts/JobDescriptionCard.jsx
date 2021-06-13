import "./css/JobDescriptionCard.css";
import React from "react";

export default function JobDescriptionCard({ jobAdvert }) {
  return <div className="job-description">{jobAdvert.jobDescription}</div>;
}