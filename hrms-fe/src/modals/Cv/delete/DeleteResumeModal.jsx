import React from "react";
import DeleteResume from "../../../pages/Candidate/Resume/delete/DeleteResume";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteResumeModal({ id }) {
  const [openDeleteResume, setOpenDeleteResume] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenDeleteResume(false)}
      onOpen={() => setOpenDeleteResume(true)}
      open={openDeleteResume}
      trigger={
        <Button floated="right" inverted color="red">
          SİL
        </Button>
      }
    >
      <Modal.Header>Özgeçmiş Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteResume
            id={id}
          ></DeleteResume>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}