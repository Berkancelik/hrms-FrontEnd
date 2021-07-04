import React from "react";
import SkillService from "../../../../services/skillService";
import { toast } from "react-toastify";
import { Message,Button } from "semantic-ui-react";

export default function DeleteSkill({ id }) {
  let skillService = new SkillService();

  const deleteSkill = (id) => {
    skillService
      .delete(id)
      .then(toast.success("Teknoloji Silindi"), window.location.reload());
  };
  return (
    <div>
      <Message size="massive" error>Yeteneği silmek ister misin?</Message>
      <Button
        style={{ marginBottom: "10pt" }}
        floated="right"
        inverted
        color="red"
        onClick={() => deleteSkill(id)}
      >
        SİL
      </Button>
    </div>
  );
}