import React from "react";
import DeleteCoverLetter from "../../../pages/Candidate/Resume/delete/DeleteCoverLetter";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteCoverLetterModal({id}) {
  const [openDeleteCoverLetter, setOpenDeleteCoverLetter] = useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteCoverLetter(false)}
      onOpen={() => setOpenDeleteCoverLetter(true)}
      open={openDeleteCoverLetter}
      trigger={
        <Button color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Ön Yazı Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteCoverLetter id={id}></DeleteCoverLetter>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}