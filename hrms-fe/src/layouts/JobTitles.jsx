import React, { useState, useEffect } from "react";
import JobTitleService from "../services/jobTitleService";
import { Dropdown} from "semantic-ui-react";

export default function JobTitles() {
    const [jobTitles, setJobTitles] = useState([]);

    useEffect(() => {
        let jobTitleService = new JobTitleService();
        jobTitleService.getJobTitles().then((result)=>setJobTitles(result.data.data))
      }, []);

      const jobTitleOptions=jobTitles.map((jobTitle)=>({
        key:jobTitle.id,
        text:jobTitle.jobTitle,
        value:jobTitle.jobTitle
      }))

    return (
        <div>
            <label>Pozisyon</label>
            <Dropdown placeholder="Pozisyon Seç" fluid multiple search selection options={jobTitleOptions} />
        </div>
    )
}