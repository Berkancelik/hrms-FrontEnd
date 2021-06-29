  
import React from "react";
import { Modal, Button } from "semantic-ui-react";
import { useState } from "react";
import AddLink from "../../../pages/Candidate/Resume/add/AddLink";

export default function AddLinkModal({ resumeId }) {
  const [setOpenAddLink, setOpenAddLink] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddLink(false)}
      onOpen={() => setOpenAddLink(true)}
      open={openAddLink}
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
          <AddLink resumeId={resumeId}></AddLink>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}