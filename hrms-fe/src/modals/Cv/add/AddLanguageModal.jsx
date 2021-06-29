import React from "react";
import AddLanguage from "../../../pages/Candidate/Resume/add/AddLanguage";
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function AddLanguageModal({ curriculumVitaeId }) {
  const [openAddLanguage, setOpenAddLanguage] = useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenAddLanguage(false)}
      onOpen={() => setOpenAddLanguage(true)}
      open={openAddLanguage}
      trigger={
        <Button style={{ marginLeft: "360pt" }} inverted color="green">
          Yabancı Dil Ekle
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Ekleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <AddLanguage
            curriculumVitaeId={curriculumVitaeId}
          ></AddLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}