import React from 'react'
import DeleteSkill from '../../../pages/Candidate/Resume/delete/DeleteSkill';
import { Modal, Button, Icon } from "semantic-ui-react";
import { useState } from "react";

export default function DeleteSkillModal({id}) {
    const [openDeleteSkill, setOpenDeleteSkill] = useState(false);
  return (
      <Modal
        size="mini"
        closeIcon
        onClose={() => setOpenDeleteSkill(false)}
        onOpen={() => setOpenDeleteSkill(true)}
        open={openDeleteSkill}
        trigger={
          <Button style={{marginTop:"10pt"}} color="red" animated="fade">
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>SİL</Button.Content>
          </Button>
        }
      >
        <Modal.Header>Yetenek Silme</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <DeleteSkill id={id}></DeleteSkill>
          </Modal.Description>
        </Modal.Content>
      </Modal>
  );
}