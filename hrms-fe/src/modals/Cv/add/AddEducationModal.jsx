import React from "react";
import AddEducation from "../../../pages/Candidate/Resume/add/AddEducation";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function AddEducationModal({ resumeId }) {
  const [openAddEducation, setOpenAddEducation] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddEducation(false)}
      onOpen={() => setOpenAddEducation(true)}
      open={openAddEducation}
      trigger={
        <Button style={{ marginLeft: "327pt" }} inverted color="green">
          Eğitim Bilgisi Ekle
        </Button>
      }
    >
      <Modal.Header>Eğitim Bilgisi Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddEducation resumeId={resumeId}></AddEducation>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}