  
import React from "react";
import DeleteJobExperience from "../../../pages/Candidate/Resume/delete/DeleteJobExperience";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteWokrExperienceModal({id}) {
  const [openDeleteJobExperience, setOpenDeleteJobExperience] = useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteJobExperience(false)}
      onOpen={() => setOpenDeleteJobExperience(true)}
      open={openDeleteJobExperience}
      trigger={
        <Button style={{marginTop:"43pt"}} color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>İş Deneyimi Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteJobExperience id={id}></DeleteJobExperience>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}