import React from "react";
import { Route } from "react-router";
import AdminManagement from "./AdminManagement";
import CompanyManagement from "./CompanyManagement";
import JobAdverts from "./JobAdverts";

export default function Dashboard() {
  return (
    <div>
      <Route exact path="/" component={JobAdverts} />
      <Route exact path="/jobpostings" component={JobAdverts} />
      <Route path="/companymanagement" component={CompanyManagement} />
      <Route path="/admin" component={AdminManagement} />
    </div>
  );
}