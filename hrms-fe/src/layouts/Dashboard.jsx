import React from "react";
import { Route } from "react-router";
import AdminManagement from "./AdminManagement";
import CompanyManagement from "./CompanyManagement";
import JobAdvertisements from "./JobAdvertisements";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={JobAdvertisements} />
      <Route exact path="/jobadvertisements" component={JobAdvertisements} />
      <Route path="/companymanagement" component={CompanyManagement} />
      <Route path="/admin" component={AdminManagement} />
    </div>
  );
}