import React from "react";
import AddJobExperience from "../../../pages/Candidate/Resume/add/AddJobExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function AddJobExperienceModal({ resumeId }) {
  const [openAddJobExperience, setOpenAddJobExperience] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddJobExperience(false)}
      onOpen={() => setOpenAddJobExperience(true)}
      open={openAddJobExperience}
      trigger={
        <Button style={{ marginLeft: "339pt" }} inverted color="green">
          İş Deneyimi Ekle
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddJobExperience
            resumeId={resumeId}
          ></AddJobExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}