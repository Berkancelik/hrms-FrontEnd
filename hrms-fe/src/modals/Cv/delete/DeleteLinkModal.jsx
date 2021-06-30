import React from "react";
import DeleteLink from "../../../pages/Candidate/Resume/delete/DeleteLink";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteLinkModal({ id }) {
  const [openDeleteLink, setOpenDeleteLink] = useState(false);
  return (
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpenDeleteLink(false)}
        onOpen={() => setOpenDeleteLink(true)}
        open={openDeleteLink}
        trigger={
          <Button color="red" animated="fade">
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>SİL</Button.Content>
          </Button>
        }
      >
        <Modal.Header>Hesapları Silme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <DeleteLink id={id}></DeleteLink>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  );
}