import React from "react";
import UpdateLink from "../../../pages/Candidate/Resume/update/UpdateLink";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateLinkModal({
  id,
  linkedin,
  github,
}) {
  const [openUpdateLink, setOpenUpdateLink] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateLink(false)}
      onOpen={() => setOpenUpdateLink(true)}
      open={openUpdateLink}
      trigger={
        <Button animated="fade" style={{ marginLeft: "20pt" }}>
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Hesapları Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateLink
            id={id}
            linkedin={linkedin}
            github={github}
          ></UpdateLink>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}