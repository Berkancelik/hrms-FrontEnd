  
import React from "react";
import { useState } from "react";
import UpdateEmployee from "../../../pages/Employee/UpdateEmployee";
import { Modal,Button,Icon } from "semantic-ui-react";

export default function UpdateEmployeeModal({
    userId,
    firstName,
    lastName,
    email,
  }) {
  const [openUpdateEmployee, setOpenUpdateEmployee] =
    useState(false);
  return (
    <Modal
      size="tiny"
      closeIcon
      onClose={() => setOpenUpdateEmployee(false)}
      onOpen={() => setOpenUpdateEmployee(true)}
      open={openUpdateEmployee}
      trigger={
        <Button floated="right" animated="fade">
          <Button.Content visible>
            <Icon name="pencil" />
          </Button.Content>
          <Button.Content hidden>Düzenle</Button.Content>
        </Button>
      }
    >
      <Modal.Header>Kişisel Bilgileri Güncelleme</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <UpdateEmployee
            userId={userId}
            firstName={firstName}
            lastName={lastName}
            email={email}
          ></UpdateEmployee>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}