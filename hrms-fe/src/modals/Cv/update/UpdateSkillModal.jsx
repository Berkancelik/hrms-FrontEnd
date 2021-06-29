import React from "react";
import UpdateSkill from "../../../pages/Candidate/Resume/update/UpdateSkill";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateSkillModal({
  id,
  skillName,
}) {
  const [openUpdateSkill, setOpenUpdateSkill] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateSkill(false)}
      onOpen={() => setOpenUpdateSkill(true)}
      open={openUpdateSkill}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yetenek Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateSkill
            id={id}
            skillName={skillName}
          ></UpdateSkill>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}