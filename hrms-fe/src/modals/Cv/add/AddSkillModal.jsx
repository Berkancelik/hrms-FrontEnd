import React from "react";
import AddSkill from "../../../pages/Candidate/Resume/add/AddSkill";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddSkillModal({ resumeId }) {
  const [openAddSkill, setOpenAddSkill] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddSkill(false)}
      onOpen={() => setOpenAddSkill(true)}
      open={openAddSkill}
      trigger={
        <Button style={{ marginLeft: "373pt" }} inverted color="green">
          Yetenek Ekle
        </Button>
      }
    >
      <Modal.Header>Yetenek Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddSkill resumeId={resumeId}></AddSkill>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}