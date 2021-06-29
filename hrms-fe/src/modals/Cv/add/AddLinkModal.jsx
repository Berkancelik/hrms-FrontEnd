import React from "react";
import AddLink from "../../../pages/Candidate/Resume/add/AddLink";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";

export default function AddLinkModal({ id }) {
  const [openLink, setOpenLink] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenLink(false)}
      onOpen={() => setOpenLink(true)}
      open={openLink}
      trigger={
        <Button
          floated="right"
          inverted
          color="green"
        >
          Hesap Ekle
        </Button>
      }
    >
      <Modal.Header>Hesap Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddLink id={id}></AddLink>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}