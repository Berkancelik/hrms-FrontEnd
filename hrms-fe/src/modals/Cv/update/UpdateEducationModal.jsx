import React from "react";
import UpdateEducation from "../../../pages/Candidate/Resume/update/UpdateEducation";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateEducationModal({
  id,
  schoolName,
  department,
  startedDate,
  endedDate,
}) {
  const [openUpdateEducation, setOpenUpdateEducation] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateEducation(false)}
      onOpen={() => setOpenUpdateEducation(true)}
      open={openUpdateEducation}
      trigger={
        <Button style={{ marginTop: "10pt" }} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Eğitim Bilgisi Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateEducation
            id={id}
            schoolName={schoolName}
            department={department}
            startedDate={startedDate}
            endedDate={endedDate}
          ></UpdateEducation>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}