import React from "react";
import JobExperienceService from "../../../../services/jobExperienceService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteJobExperience({id}) {
  let jobExperienceService = new JobExperienceService();

  const deleteJobExperience = (id) => {
    jobExperienceService
      .delete(id)
      .then(toast.success("İş Deneyimi Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>İş deneyimini silmek ister misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteJobExperience(id)}
      >
        SİL
      </Button>
    </div>
  );
}