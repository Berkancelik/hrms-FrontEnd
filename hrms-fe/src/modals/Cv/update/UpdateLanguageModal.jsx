  
import React from "react";
import UpdateLanguage from "../../../pages/Candidate/Resume/update/UpdateLanguage";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function UpdateLanguageModal({id,languageName,level}) {
  const [openUpdateLanguage, setOpenUpdateLanguage] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateLanguage(false)}
      onOpen={() => setOpenUpdateLanguage(true)}
      open={openUpdateLanguage}
      trigger={
        <Button style={{marginTop:"10pt"}} animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateLanguage
            id={id}
            languageName={languageName}
            level={level}
          ></UpdateLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}