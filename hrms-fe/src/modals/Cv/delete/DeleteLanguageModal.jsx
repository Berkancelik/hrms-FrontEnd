import React from 'react'
import DeleteLanguage from '../../../pages/Candidate/Resume/delete/DeleteLanguage';
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteLanguageModal({id}) {
    const [openDeleteLanguage, setOpenDeleteLanguage] =
    useState(false);
  return (
    <Modal
      size="mini"
      closeIcon
      onClose={() => setOpenDeleteLanguage(false)}
      onOpen={() => setOpenDeleteLanguage(true)}
      open={openDeleteLanguage}
      trigger={
        <Button style={{marginTop:"21pt"}} color="red" animated="fade">
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>SİL</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Yabancı Dil Silme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <DeleteLanguage
            id={id}
          ></DeleteLanguage>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}