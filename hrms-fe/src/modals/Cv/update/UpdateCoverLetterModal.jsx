import React from "react";
import UpdateCoverLetter from "../../../pages/Candidate/Resume/update/UpdateCoverLetter";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateCoverLetterModal({ id, content }) {
  const [openUpdateCoverLetter, setOpenUpdateCoverLetter] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateCoverLetter(false)}
      onOpen={() => setOpenUpdateCoverLetter(true)}
      open={openUpdateCoverLetter}
      trigger={
        <Button animated="fade" style={{ marginLeft: "20pt" }}>
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Ön Yazı Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateCoverLetter
            id={id}
            content={content}
          ></UpdateCoverLetter>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}