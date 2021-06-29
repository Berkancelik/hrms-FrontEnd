import React from "react";
import AddResume from "../../../pages/Candidate/Resume/add/AddResume";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddResumeModal({ candidateId }) {
  const [openAddResume, setOpenAddResume] = useState(false);
  return (
    <Modal
      size="small"
      closeIcon
      onClose={() => setOpenAddResume(false)}
      onOpen={() => setOpenAddResume(true)}
      open={openAddResume}
      trigger={
        <Button style={{ marginBottom: "5pt" }} floated="right" color="green">
          Yeni Özgeçmiş Oluştur
        </Button>
      }
    >
      <Modal.Header>Yeni Özgeçmiş Oluşturma</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddResume candidateId={candidateId}></AddResume>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}