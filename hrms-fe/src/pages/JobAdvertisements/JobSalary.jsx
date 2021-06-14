import "./css/JobSalary.css";

import React from "react";

export default function JobSalary({ jobAdvertisement }) {
  return (
    <div
      style={{
        borderTop: "2px solid #EBEBEB",
        border: "1px solid #EBEBEB",
        borderRadius: "8px",
        marginTop: "10px",
      }}
    >
      {jobAdvertisement.minSalary && jobAdvertisement.maxSalary ? (
        <div className="salary">
          <h2>Ödeme aralığı</h2>
          <p>
            {jobAdvertisement.minSalary ? (
              <span>
                En düşük <strong>{jobAdvertisement.minSalary} ₺</strong>{" "}
              </span>
            ) : (
              ""
            )}
            {jobAdvertisement.minSalary && jobAdvertisement.maxSalary ? <span>ila</span> : ""}
            {jobAdvertisement.maxSalary ? (
              <span>
                {" "}
                en yüksek <strong>{jobAdvertisement.maxSalary} ₺</strong>
              </span>
            ) : (
              ""
            )}
            {jobAdvertisement.minSalary && jobAdvertisement.maxSalary ? (
              <span> arasında</span>
            ) : (
              ""
            )}
            <span> maaş vaat etmektedir.</span>
          </p>
        </div>
      ) : (
        <div className="salary">
          <h2>Ödeme aralığı mevcut değil</h2>
          <p>Şu an için maaş bilgileri mevcut değil</p>
        </div>
      )}
    </div>
  );
}