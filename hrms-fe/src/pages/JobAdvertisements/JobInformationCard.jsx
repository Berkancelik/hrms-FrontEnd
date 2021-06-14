import "./css/JobInformationCard.css";

import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default function JobInformationCard({ jobAdvert: jobAdvertisement }) {
  let defaultImage ="https://res.cloudinary.com/diq6d5egr/image/upload/v1623606849/krpjh03bdcqshsprhrua.jpg"
  function getHowLongAgo(publishedAt) {
    let today = new Date();
    let publishedDate = new Date(publishedAt);
    let difference = today.getTime() - publishedDate.getTime();
    let days = difference / (1000 * 3600 * 24);
    if (days > 30) {
      return Math.floor(days / 30) + " ay önce";
    }
    if (days > 7) {
      return Math.floor(days / 7) + " hafta önce";
    }
    if (Math.floor(days) <= 0) {
      return "Bugün";
    }
    return Math.floor(days) + " gün önce";
  }

  return (
    <div className="job-information-card">
      <div class="company-image">
        <img src={defaultImage} alt="" width="122" height="122" />
      </div>
      <div style={{ display: "flex" }}>
        <div class="job-informations">
          <div class="job-position">
            <span>{jobAdvertisement.jobTitle.name}</span>
          </div>
          <div class="company-informations">
            <span class="company-name">{jobAdvertisement.employer.companyName}</span>
            &nbsp; | &nbsp;
            <span class="city-name">{jobAdvertisement.city.name}</span>
          </div>
          <div>
            <time datetime={jobAdvertisement.publishedAt} class="published-at">
              {getHowLongAgo(jobAdvertisement.publishedAt)} yayınlandı.
            </time>
          </div>
        </div>
      </div>
      <div style={{ float: "left", marginTop: "10px" }}>
        <Button icon labelPosition="right" size="medium">
          Şirket websitesi
          <Icon name="linkify" />
        </Button>
        <Button color="green" icon labelPosition="right" size="medium">
          Başvur
          <Icon name="external alternate" />
        </Button>
      </div>
    </div>
  );
}