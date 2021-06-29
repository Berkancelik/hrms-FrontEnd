import React from "react";
import UpdateJobExperience from "../../../pages/Candidate/Resume/update/UpdateJobExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateJobExperienceModal({
  id,
  companyName,
  jobTitleId,
  startedDAte,
  endedDate,
}) {
  const [openUpdateJobExperience, setOpenUpdateJobExperience] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateJobExperience(false)}
      onOpen={() => setOpenUpdateJobExperience(true)}
      open={openUpdateJobExperience}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateJobExperience
            id={id}
            companyName={companyName}
            jobTitleId={jobTitleId}
            startedDAte={startedDAte}
            endedDate={endedDate}
          ></UpdateJobExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}